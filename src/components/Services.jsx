import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionBadge from './SectionBadge'

const services = [
  {
    num: '01',
    title: 'Perfis Estruturais',
    desc: 'Perfil Ómega e Perfil U Galvanizado para aplicações industriais e de construção.',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80',
  },
  {
    num: '02',
    title: 'Painéis de Cobertura',
    desc: 'Painéis com isolamento térmico e designs de imitação de telha para coberturas duradouras.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
  },
  {
    num: '03',
    title: 'Painéis de Fachada',
    desc: 'Sistemas de fixação visível e oculta para fachadas modernas e funcionais.',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80',
  },
  {
    num: '04',
    title: 'Painéis Sandwich',
    desc: 'Painéis compostos de alto desempenho para cobertura com excelente isolamento.',
    img: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=400&q=80',
  },
  {
    num: '05',
    title: 'Painéis Alveolares',
    desc: 'Painéis galvanizados alveolares para encerramento e selagem de estruturas.',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=80',
  },
  {
    num: '06',
    title: 'Serralharia Geral',
    desc: 'Trabalhos à medida, reparações, soldadura e soluções metálicas personalizadas.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
  },
]

const GRID = '48px 220px 1fr 140px'

function ServiceRow({ service, index, isLast }) {
  const [ref, inView] = useInView({ threshold: 0.1 })
  const border = isLast ? 'none' : '1px solid var(--color-border)'

  return (
    <motion.button
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="service-row"
      onClick={() => {}}
      style={{
        display: 'grid',
        gridTemplateColumns: GRID,
        alignItems: 'center',
        borderBottom: border,
        padding: '0',
      }}
    >
      <span
        className="service-num"
        style={{
          padding: '20px 24px',
          fontFamily: 'Helvetica, sans-serif',
          fontSize: '11px',
          letterSpacing: '0.18em',
        }}
      >
        {service.num}
      </span>

      <span
        className="service-title"
        style={{
          padding: '20px 24px',
          fontFamily: 'Helvetica, sans-serif',
          fontSize: '15px',
          fontWeight: 700,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        {service.title}
      </span>

      <span
        style={{
          padding: '20px 24px',
          fontSize: '13px',
          lineHeight: 1.65,
          color: 'var(--color-muted)',
        }}
      >
        {service.desc}
      </span>

      <span style={{ padding: '12px 24px' }}>
        <span style={{ display: 'block', width: '120px', height: '64px', overflow: 'hidden', borderRadius: '4px' }}>
          <img
            className="service-img"
            src={service.img}
            alt={service.title}
            loading="lazy"
          />
        </span>
      </span>
    </motion.button>
  )
}

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section id="servicos" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ padding: '80px 0 40px' }}
        >
          <SectionBadge label="Serviços" />
          <h2 className="section-title">Serviços</h2>
        </motion.div>

        <div style={{ paddingBottom: '80px' }}>
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.2)',
            position: 'relative',
            zIndex: 1,
          }}>
            {/* Header */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: GRID,
              background: 'var(--color-surface-alt)',
              borderBottom: '1px solid var(--color-border)',
            }}>
              {['#', 'Serviço', 'Descrição', ''].map((label) => (
                <span key={label} style={{
                  padding: '14px 24px',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-muted)',
                  fontWeight: 500,
                  fontFamily: 'Helvetica, sans-serif',
                }}>{label}</span>
              ))}
            </div>

            {/* Rows */}
            {services.map((service, i) => (
              <ServiceRow
                key={service.num}
                service={service}
                index={i}
                isLast={i === services.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
