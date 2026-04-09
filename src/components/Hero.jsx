import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Hero() {
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)

  useEffect(() => {
    function fitText() {
      ;[
        { ref: line1Ref },
        { ref: line2Ref },
      ].forEach(({ ref }) => {
        const el = ref.current
        if (!el) return
        el.style.fontSize = '100px'
        const ratio = (window.innerWidth * 0.98) / el.scrollWidth
        el.style.fontSize = Math.floor(100 * ratio) + 'px'
      })
    }
    fitText()
    window.addEventListener('resize', fitText)
    return () => window.removeEventListener('resize', fitText)
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          filter: 'grayscale(75%) brightness(0.4)',
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 25%, transparent 60%, rgba(0,0,0,0.85) 100%)',
        }}
      />

      {/* TOP ZONE — phone number */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '24px 3vw',
        }}
      >
        <a
          href="tel:916641573"
          style={{
            color: 'rgba(255,255,255,0.45)',
            fontSize: '11px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontFamily: "'Inter', sans-serif",
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#fff')}
          onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.45)')}
        >
          916 641 573
        </a>
      </motion.div>

      {/* TITLE ZONE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: '1vw',
          lineHeight: 0.88,
          userSelect: 'none',
        }}
      >
        <div
          ref={line1Ref}
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '100px',
            letterSpacing: '0.01em',
            color: '#fff',
            whiteSpace: 'nowrap',
            display: 'block',
          }}
        >
          V&amp;J
        </div>
        <div
          ref={line2Ref}
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '100px',
            letterSpacing: '0.01em',
            color: '#fff',
            whiteSpace: 'nowrap',
            display: 'block',
          }}
        >
          FONSECA
        </div>
      </motion.div>

      {/* NAV ZONE */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        style={{
          position: 'relative',
          zIndex: 1,
          padding: '20px 3vw',
        }}
      >
        <ul
          style={{
            display: 'flex',
            gap: '48px',
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
                  color: 'rgba(255,255,255,0.55)',
                  textDecoration: 'none',
                  fontSize: '11px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  fontFamily: "'Inter', sans-serif",
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#fff')}
                onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.55)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* BOTTOM BAR */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'flex-end',
          padding: '0 3vw 36px',
          gap: '20px',
        }}
      >
        {/* Left */}
        <div>
          <p
            style={{
              color: 'rgba(255,255,255,0.45)',
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.7,
              marginBottom: '10px',
            }}
          >
            Serralharia &amp; Construção Metálica
            <br />
            Perfis, Painéis e Estruturas
          </p>
          <a
            href="#servicos"
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontFamily: "'Inter', sans-serif",
              textDecoration: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.3)',
              paddingBottom: '1px',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#fff'
              e.target.style.borderBottomColor = '#fff'
            }}
            onMouseLeave={(e) => {
              e.target.style.color = 'rgba(255,255,255,0.55)'
              e.target.style.borderBottomColor = 'rgba(255,255,255,0.3)'
            }}
          >
            Ver Serviços ›
          </a>
        </div>

        {/* Centre — scroll */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            style={{ width: '1px', height: '44px', background: 'rgba(255,255,255,0.3)' }}
          />
          <p
            style={{
              color: 'rgba(255,255,255,0.35)',
              fontSize: '9px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            SCROLL
          </p>
        </div>

        {/* Right */}
        <div style={{ textAlign: 'right' }}>
          <p
            style={{
              color: 'rgba(255,255,255,0.35)',
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontFamily: "'Inter', sans-serif",
              marginBottom: '8px',
            }}
          >
            Painéis · Perfis · Estruturas
            <br />
            Coberturas Industriais
          </p>
          <a
            href="#portfolio"
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontFamily: "'Inter', sans-serif",
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#fff')}
            onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.55)')}
          >
            Ver Portfolio ›
          </a>
        </div>
      </motion.div>
    </section>
  )
}
