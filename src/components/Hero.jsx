import { motion } from 'framer-motion'

const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contacto', href: '#contacto' },
]

const font = "Helvetica, 'Helvetica Neue', Arial, sans-serif"

export default function Hero() {
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
            fontFamily: font,
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#fff')}
          onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.45)')}
        >
          916 641 573
        </a>
      </motion.div>

      {/* SPACER */}
      <div style={{ flex: 1 }} />

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
                  fontFamily: font,
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
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'flex-end',
          padding: '0 3vw 36px',
          gap: '20px',
        }}
      >
        {/* Left — título */}
        <div>
          <div
            style={{
              fontFamily: font,
              fontWeight: 700,
              fontSize: 'clamp(80px, 22vh, 320px)',
              color: '#fff',
              lineHeight: 0.9,
              letterSpacing: '-0.01em',
              userSelect: 'none',
            }}
          >
            V&amp;J
            <br />
            FONSECA
          </div>
        </div>

        {/* Right — antigo direito em cima, antigo esquerdo em baixo */}
        <div
          style={{
            textAlign: 'right',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {/* antigo direito */}
          <p
            style={{
              color: 'rgba(255,255,255,0.35)',
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontFamily: font,
            }}
          >
            Painéis · Perfis · Estruturas
            <br />
            Coberturas Industriais
          </p>

          {/* antigo esquerdo */}
          <div>
            <p
              style={{
                color: 'rgba(255,255,255,0.45)',
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontFamily: font,
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
                fontFamily: font,
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
        </div>
      </motion.div>
    </section>
  )
}
