import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)

  // Fit text to full viewport width
  useEffect(() => {
    function fitText() {
      ;[
        { ref: line1Ref, text: 'V&J' },
        { ref: line2Ref, text: 'FONSECA' },
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
        justifyContent: 'space-between',
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
          filter: 'grayscale(60%) brightness(0.55)',
        }}
      />

      {/* Gradient — heavier at top and bottom, lighter in centre so image shows */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.75) 100%)',
        }}
      />

      {/* ─── Top spacer for navbar ─── */}
      <div style={{ height: '60px' }} />

      {/* ─── TITLE — fills full width ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{
          position: 'relative',
          zIndex: 1,
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

      {/* ─── Bottom bar ─── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'flex-end',
          padding: '0 3vw 32px',
          gap: '20px',
        }}
      >
        {/* Left */}
        <div>
          <p
            style={{
              color: 'rgba(255,255,255,0.55)',
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
              color: 'var(--color-accent)',
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontFamily: "'Inter', sans-serif",
              textDecoration: 'none',
              borderBottom: '1px solid var(--color-accent)',
              paddingBottom: '1px',
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
            Painéis Sandwich · Perfis Galvanizados
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
            }}
            onMouseEnter={(e) => (e.target.style.color = '#fff')}
            onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.55)')}
          >
            Ver Projeto ›
          </a>
        </div>
      </motion.div>
    </section>
  )
}
