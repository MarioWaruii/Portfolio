import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Auto-close menu when resizing to desktop viewport
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close menu when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Prevent background scrolling on body when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)
  const toggleMenu = () => setIsOpen((prev) => !prev)

  return (
    <header className="masthead">
      <div className="wrap">
        <nav className="nav" aria-label="Main navigation">
          <a href="#top" className="wordmark" onClick={closeMenu}>
            chukwuma mario.
          </a>

          <button
            type="button"
            className={`nav-toggle ${isOpen ? 'is-open' : ''}`}
            aria-expanded={isOpen}
            aria-controls="nav-menu"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={toggleMenu}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>

          <div id="nav-menu" className={`nav-links ${isOpen ? 'is-open' : ''}`}>
            <a href="#work" className="nav-link" onClick={closeMenu}>
              Work
            </a>
            <a href="#designs" className="nav-link" onClick={closeMenu}>
              Designs
            </a>
            <a href="#strengths" className="nav-link" onClick={closeMenu}>
              Strengths
            </a>
            <a href="#experience" className="nav-link" onClick={closeMenu}>
              Experience
            </a>
            <a href="#about" className="nav-link" onClick={closeMenu}>
              About
            </a>
            <a href="#guestbook" className="nav-link" onClick={closeMenu}>
              Guestbook
            </a>
            <a href="#contact" className="nav-link nav-contact" onClick={closeMenu}>
              Let’s talk ↗
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
