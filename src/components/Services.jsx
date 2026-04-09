import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="8" width="24" height="16" rx="0" />
        <line x1="4" y1="16" x2="28" y2="16" />
        <line x1="12" y1="8" x2="12" y2="24" />
        <line x1="20" y1="8" x2="20" y2="24" />
      </svg>
    ),
    title: 'Perfis Estruturais',
    desc: 'Perfil Ómega e Perfil U Galvanizado para aplicações industriais e de construção.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 22 L8 10 L16 16 L24 8 L30 22 Z" />
        <line x1="2" y1="22" x2="30" y2="22" />
      </svg>
    ),
    title: 'Painéis de Cobertura',
    desc: 'Painéis com isolamento térmico e designs de imitação de telha para coberturas duradouras.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="4" width="20" height="24" />
        <line x1="6" y1="11" x2="26" y2="11" />
        <line x1="6" y1="18" x2="26" y2="18" />
        <line x1="6" y1="25" x2="26" y2="25" />
      </svg>
    ),
    title: 'Painéis de Fachada',
    desc: 'Sistemas de fixação visível e oculta para fachadas modernas e funcionais.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="10" width="24" height="12" />
        <rect x="4" y="10" width="24" height="4" fill="currentColor" fillOpacity="0.2" />
        <rect x="4" y="18" width="24" height="4" fill="currentColor" fillOpacity="0.2" />
      </svg>
    ),
    title: 'Painéis Sandwich',
    desc: 'Painéis compostos de alto desempenho para cobertura com excelente isolamento.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="8" width="24" height="16" />
        <line x1="9" y1="8" x2="9" y2="24" />
        <line x1="14" y1="8" x2="14" y2="24" />
        <line x1="19" y1="8" x2="19" y2="24" />
        <line x1="24" y1="8" x2="24" y2="24" />
      </svg>
    ),
    title: 'Painéis Alveolares',
    desc: 'Painéis galvanizados alveolares para encerramento e selagem de estruturas.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 26 L6 14 L16 6 L26 14 L26 26" />
        <rect x="12" y="18" width="8" height="8" />
        <circle cx="26" cy="8" r="3" />
        <line x1="23" y1="8" x2="18" y2="8" />
      </svg>
    ),
    title: 'Serralharia Geral',
    desc: 'Trabalhos à medida, reparações, soldadura e soluções metálicas personalizadas.',
  },
]

function ServiceCard({ service, index }) {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        padding: '36px 28px',
        cursor: 'default',
        transition: 'border-color 0.3s ease, transform 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-accent)'
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-border)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div style={{ color: 'var(--color-accent)', marginBottom: '20px' }}>
        {service.icon}
      </div>
      <h3
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '22px',
          letterSpacing: '0.08em',
          marginBottom: '12px',
          color: 'var(--color-text)',
        }}
      >
        {service.title}
      </h3>
      <p style={{ color: 'var(--color-muted)', fontSize: '14px', lineHeight: 1.7 }}>
        {service.desc}
      </p>
    </motion.div>
  )
}

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section
      id="servicos"
      style={{
        background: 'var(--color-bg)',
        padding: '120px 8vw',
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '64px' }}
      >
        <h2 className="section-title">Serviços</h2>
        <p
          style={{
            color: 'var(--color-muted)',
            fontSize: '16px',
            marginTop: '20px',
            maxWidth: '480px',
          }}
        >
          Soluções metálicas completas para construção industrial e comercial.
        </p>
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1px',
          background: 'var(--color-border)',
        }}
      >
        {services.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>
    </section>
  )
}
