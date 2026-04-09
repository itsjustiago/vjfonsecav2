import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'url(https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(30%)',
        }}
      />
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.4) 100%)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          paddingLeft: '8vw',
          paddingRight: '4vw',
          maxWidth: '900px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p
            style={{
              color: 'var(--color-accent)',
              fontSize: '12px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              fontWeight: 500,
            }}
          >
            Serralharia &amp; Construção Metálica
          </p>

          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(72px, 13vw, 180px)',
              lineHeight: '0.9',
              letterSpacing: '0.02em',
              color: 'var(--color-text)',
              marginBottom: '32px',
            }}
          >
            V&amp;J
            <br />
            FONSECA
          </h1>

          <div
            style={{
              width: '60px',
              height: '1px',
              background: 'var(--color-accent)',
              marginBottom: '24px',
            }}
          />

          <p
            style={{
              color: 'var(--color-muted)',
              fontSize: '16px',
              lineHeight: 1.7,
              marginBottom: '40px',
              maxWidth: '440px',
            }}
          >
            Especialistas em perfis estruturais, painéis metálicos e soluções
            de cobertura e fachada. Qualidade e rigor em cada projeto.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#servicos" className="btn-outline">
              Ver Serviços ›
            </a>
            <a href="#contacto" className="btn-accent">
              Contactar ›
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--color-muted)',
          fontSize: '10px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '40px',
            background: 'var(--color-muted)',
          }}
        />
        SCROLL
      </div>
    </section>
  )
}
