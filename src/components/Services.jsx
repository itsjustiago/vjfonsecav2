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

function ServiceRow({ service, index }) {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <motion.tr
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="service-row"
    >
      <td style={{
        padding: '20px 24px',
        fontFamily: 'Helvetica, sans-serif',
        fontSize: '11px',
        letterSpacing: '0.18em',
        color: 'var(--color-accent)',
        whiteSpace: 'nowrap',
        borderBottom: '1px solid var(--color-border)',
        width: '48px',
      }}>
        {service.num}
      </td>
      <td style={{
        padding: '20px 24px',
        fontFamily: 'Helvetica, sans-serif',
        fontSize: '15px',
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'var(--color-text)',
        whiteSpace: 'nowrap',
        borderBottom: '1px solid var(--color-border)',
      }}>
        {service.title}
      </td>
      <td style={{
        padding: '20px 24px',
        fontSize: '13px',
        lineHeight: 1.65,
        color: 'var(--color-muted)',
        borderBottom: '1px solid var(--color-border)',
        width: '100%',
      }}>
        {service.desc}
      </td>
      <td style={{
        padding: '12px 24px',
        borderBottom: '1px solid var(--color-border)',
        width: '140px',
      }}>
        <div style={{ width: '120px', height: '64px', overflow: 'hidden' }}>
          <img
            className="service-img"
            src={service.img}
            alt={service.title}
            loading="lazy"
          />
        </div>
      </td>
    </motion.tr>
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
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--color-surface-alt)' }}>
                  {['#', 'Serviço', 'Descrição', ''].map((label) => (
                    <th key={label} style={{
                      padding: '14px 24px',
                      textAlign: 'left',
                      fontSize: '10px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--color-muted)',
                      fontWeight: 500,
                      fontFamily: 'Helvetica, sans-serif',
                      borderBottom: '1px solid var(--color-border)',
                    }}>{label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {services.map((service, i) => (
                  <ServiceRow key={service.num} service={service} index={i} isLast={i === services.length - 1} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
