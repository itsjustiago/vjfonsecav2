import { useState, useEffect } from 'react'

const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contacto', href: '#contacto' },
]

const linkStyle = {
  color: 'rgba(255,255,255,0.6)',
  textDecoration: 'none',
  fontSize: '11px',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  fontWeight: 500,
  transition: 'color 0.2s ease',
  fontFamily: "'Inter', sans-serif",
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85)
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
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0',
        backgroundColor: 'rgba(8,8,8,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        opacity: scrolled ? 1 : 0,
        pointerEvents: scrolled ? 'auto' : 'none',
        transition: 'opacity 0.5s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {/* Left: nav links */}
        <ul style={{ display: 'flex', gap: '32px', listStyle: 'none', padding: 0, margin: 0 }}>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={linkStyle}
                onMouseEnter={(e) => (e.target.style.color = '#fff')}
                onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.6)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: contact link */}
        <a
          href="tel:916641573"
          style={{ ...linkStyle, color: 'rgba(255,255,255,0.4)' }}
          onMouseEnter={(e) => (e.target.style.color = '#fff')}
          onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.4)')}
        >
          916 641 573
        </a>
      </div>
    </nav>
  )
}
