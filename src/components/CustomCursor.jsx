import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch || window.innerWidth <= 900) return

    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    let raf = 0

    const onMove = (e) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }

    const onOver = (e) => {
      const t = e.target
      if (
        t.closest('a, button, [role="button"], input, textarea, label, .project-visual, .design-card, .strength-card')
      ) {
        cursor.classList.add('hover')
        ring.classList.add('hover')
      }
    }

    const onOut = (e) => {
      const t = e.target
      if (
        t.closest('a, button, [role="button"], input, textarea, label, .project-visual, .design-card, .strength-card')
      ) {
        cursor.classList.remove('hover')
        ring.classList.remove('hover')
      }
    }

    const onDown = () => cursor.classList.add('click')
    const onUp = () => cursor.classList.remove('click')

    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.22
      pos.current.y += (target.current.y - pos.current.y) * 0.22
      cursor.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`
      ring.style.transform = `translate(${target.current.x}px, ${target.current.y}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  )
}
