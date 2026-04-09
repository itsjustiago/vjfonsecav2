import { useState, useEffect } from 'react'

const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 5vw',
        backgroundColor: scrolled ? 'rgba(8,8,8,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <a
        href="#hero"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '22px',
          letterSpacing: '0.1em',
          color: 'var(--color-text)',
          textDecoration: 'none',
        }}
      >
        V&amp;J FONSECA
      </a>

      <ul
        style={{
          display: 'flex',
          gap: '40px',
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                color: 'var(--color-muted)',
                textDecoration: 'none',
                fontSize: '12px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--color-text)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--color-muted)')}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
