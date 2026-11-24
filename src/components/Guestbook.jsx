import { useEffect, useState, useCallback } from 'react'
import { supabase, isSupabaseConfigured } from '../supabaseClient'

const STORAGE_KEY = 'mario-portfolio-visitor-wall-v1'
const MAX_MARKS = 50
const STAMPS = new Set(['✳', '☻', '♡', '↗'])

function cleanMark(value) {
  if (!value || typeof value !== 'object') return null
  const name = typeof value.name === 'string' ? value.name.trim().slice(0, 32) : ''
  const note = typeof value.note === 'string' ? value.note.trim().slice(0, 100) : ''
  const date = typeof value.date === 'string' ? new Date(value.date) : new Date(NaN)
  if (!name || !STAMPS.has(value.stamp) || Number.isNaN(date.getTime())) return null
  return { id: value.id || undefined, name, note, stamp: value.stamp, date: date.toISOString() }
}

export default function Guestbook() {
  const [marks, setMarks] = useState([])
  const [status, setStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Fetch marks from Supabase or fallback to LocalStorage
  const loadMarks = useCallback(async () => {
    if (isSupabaseConfigured && supabase) {
      setIsLoading(true)
      try {
        const { data, error } = await supabase
          .from('guestbook')
          .select('id, name, note, stamp, created_at')
          .order('created_at', { ascending: false })
          .limit(MAX_MARKS)

        if (error) {
          console.error('Error fetching guestbook from Supabase:', error)
          setStatus('Could not load marks from database. Falling back to local storage.')
          loadLocalMarks()
        } else if (data) {
          const formatted = data.map((item) => ({
            id: item.id,
            name: item.name,
            note: item.note || '',
            stamp: item.stamp || '✳',
            date: item.created_at,
          }))
          setMarks(formatted)
        }
      } catch (err) {
        console.error('Unexpected error loading marks:', err)
        loadLocalMarks()
      } finally {
        setIsLoading(false)
      }
    } else {
      loadLocalMarks()
    }
  }, [])

  const loadLocalMarks = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        if (Array.isArray(parsed)) {
          setMarks(parsed.map(cleanMark).filter(Boolean).slice(0, MAX_MARKS))
        }
      }
    } catch {
      setStatus('Browser storage is unavailable. Marks will last for this session only.')
    }
  }

  // Load marks on mount & subscribe to realtime updates if using Supabase
  useEffect(() => {
    loadMarks()

    if (isSupabaseConfigured && supabase) {
      const channel = supabase
        .channel('guestbook-feed')
        .on(
          'postgres_changes',
          { event: 'INSERT', schema: 'public', table: 'guestbook' },
          (payload) => {
            const entry = payload.new
            if (!entry) return
            const newMark = {
              id: entry.id,
              name: entry.name,
              note: entry.note || '',
              stamp: entry.stamp || '✳',
              date: entry.created_at,
            }
            setMarks((prev) => {
              if (prev.some((m) => m.id === newMark.id)) return prev
              return [newMark, ...prev].slice(0, MAX_MARKS)
            })
          }
        )
        .subscribe()

      return () => {
        supabase.removeChannel(channel)
      }
    } else {
      // Local storage sync across tabs
      const onStorage = (e) => {
        if (e.key !== STORAGE_KEY && e.key !== null) return
        try {
          const parsed = e.newValue ? JSON.parse(e.newValue) : []
          setMarks(
            Array.isArray(parsed)
              ? parsed.map(cleanMark).filter(Boolean).slice(0, MAX_MARKS)
              : []
          )
        } catch {
          /* ignore */
        }
      }
      window.addEventListener('storage', onStorage)
      return () => window.removeEventListener('storage', onStorage)
    }
  }, [loadMarks])

  const saveLocal = (next) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return true
    } catch {
      return false
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim().slice(0, 32)
    const note = String(data.get('note') || '').trim().slice(0, 100)
    const stamp = String(data.get('stamp') || '✳')

    if (!name) {
      setStatus('Add your name first.')
      return
    }
    if (!STAMPS.has(stamp)) {
      setStatus('Please choose one of the available stamps.')
      return
    }

    if (isSupabaseConfigured && supabase) {
      setIsSubmitting(true)
      setStatus('Saving your mark to the wall')

      try {
        const { data: inserted, error } = await supabase
          .from('guestbook')
          .insert([{ name, note, stamp }])
          .select()

        if (error) {
          console.error('Supabase insert error:', error)
          setStatus(`Failed to save mark: ${error.message}`)
        } else if (inserted && inserted.length > 0) {
          const savedMark = {
            id: inserted[0].id,
            name: inserted[0].name,
            note: inserted[0].note || '',
            stamp: inserted[0].stamp || '✳',
            date: inserted[0].created_at,
          }
          setMarks((prev) => [savedMark, ...prev.filter((m) => m.id !== savedMark.id)].slice(0, MAX_MARKS))
          form.reset()
          setStatus('Your mark is on the wall!')
        }
      } catch (err) {
        console.error('Unexpected insert error:', err)
        setStatus('An unexpected error occurred while saving.')
      } finally {
        setIsSubmitting(false)
      }
    } else {
      // Local fallback
      const next = [
        { name, note, stamp, date: new Date().toISOString() },
        ...marks,
      ].slice(0, MAX_MARKS)

      const saved = saveLocal(next)
      setMarks(next)
      form.reset()
      setStatus(
        saved
          ? 'Your mark is on the wall. (Saved locally in this browser. Add Supabase keys to .env to save to database)'
          : 'Your mark is here for this session. Browser storage is unavailable.'
      )
    }
  }

  const clearWall = () => {
    if (!marks.length) return
    if (!window.confirm('Remove all marks saved in this browser?')) return
    const saved = saveLocal([])
    setMarks([])
    setStatus(
      saved
        ? 'This browser’s local wall has been cleared.'
        : 'Cleared for this session, but browser storage could not be updated.'
    )
  }

  return (
    <section id="guestbook" className="guestbook" aria-labelledby="guestbook-title">
      <div className="wrap guestbook-grid">
        <div className="reveal">
          <p className="eyebrow">06 / You were here</p>
          <h2 id="guestbook-title" className="serif">
            Leave
            <br />
            your mark.
          </h2>
          <p className="guestbook-intro">
            The internet is more interesting with people in it. Pick a stamp, leave a
            little note, and make yourself at home.
          </p>
          <p className="storage-note">
            {isSupabaseConfigured
              ? 'Marks are public and live.'
              : 'Leave your mark here.'}
          </p>

          <form className="visitor-form" onSubmit={onSubmit}>
            <fieldset className="stamp-options">
              <legend>Choose your stamp</legend>
              {['✳', '☻', '♡', '↗'].map((s, i) => (
                <label className="stamp-choice" key={s}>
                  <input
                    type="radio"
                    name="stamp"
                    value={s}
                    defaultChecked={i === 0}
                    aria-label={s}
                  />
                  <span aria-hidden="true">{s}</span>
                </label>
              ))}
            </fieldset>

            <label htmlFor="visitor-name">Your name</label>
            <input
              type="text"
              id="visitor-name"
              name="name"
              maxLength={32}
              required
              autoComplete="given-name"
              placeholder="What should I call you?"
            />

            <label htmlFor="visitor-note">A little note — optional</label>
            <textarea
              id="visitor-note"
              name="note"
              maxLength={100}
              placeholder="Something nice, feedback, or just hello…"
            />

            <button type="submit" className="submit-mark" disabled={isSubmitting}>
              {isSubmitting ? 'Leaving mark…' : 'Leave my mark ↗'}
            </button>
            <p className="form-status" role="status" aria-live="polite">
              {status}
            </p>
          </form>
        </div>

        <div className="wall reveal" style={{ '--delay': '100ms' }}>
          <div className="wall-header">
            <span className="eyebrow">
              {marks.length} {isSupabaseConfigured ? 'mark' : 'local mark'}
              {marks.length === 1 ? '' : 's'}
              {isLoading ? ' (refreshing…)' : ''}
            </span>
            {isSupabaseConfigured ? (
              <button type="button" onClick={loadMarks} disabled={isLoading}>
                {isLoading ? 'Loading…' : 'Refresh wall'}
              </button>
            ) : (
              <button type="button" onClick={clearWall} disabled={marks.length === 0}>
                Clear local marks
              </button>
            )}
          </div>
          <div className="wall-entries">
            {marks.length === 0 ? (
              <p className="empty-wall">
                {isLoading
                  ? 'Loading marks from database…'
                  : 'A little empty, a lot of possibility. Leave the first mark for Mario.'}
              </p>
            ) : (
              marks.map((m) => (
                <article className="visitor-mark" key={m.id || m.date + m.name}>
                  <span className="mark-symbol" aria-hidden="true">
                    {m.stamp}
                  </span>
                  <p className="mark-note">{m.note || 'I was here.'}</p>
                  <strong className="mark-name">{m.name}</strong>
                  <time className="mark-date" dateTime={m.date}>
                    {new Intl.DateTimeFormat(undefined, {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    }).format(new Date(m.date))}
                  </time>
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
