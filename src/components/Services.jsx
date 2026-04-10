import { useState } from 'react'
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

function ServiceRow({ service, index, isLast }) {
  const [hovered, setHovered] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
        height: '88px',
        borderTop: '1px solid var(--color-text-08)',
        borderBottom: isLast ? '1px solid var(--color-text-08)' : 'none',
        background: hovered ? 'var(--color-row-hover)' : 'transparent',
        transition: 'background 0.3s ease',
        cursor: 'default',
        marginLeft: '-40px',
        marginRight: '-40px',
        paddingLeft: '40px',
        paddingRight: '40px',
      }}
    >
      {/* Number */}
      <span
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '12px',
          letterSpacing: '0.2em',
          color: hovered ? 'var(--color-text-55)' : 'var(--color-text-22)',
          width: '32px',
          flexShrink: 0,
          transition: 'color 0.3s ease',
        }}
      >
        {service.num}
      </span>

      {/* Title */}
      <h3
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(18px, 1.8vw, 24px)',
          letterSpacing: '0.08em',
          color: hovered ? 'var(--color-text)' : 'var(--color-text-60)',
          flex: 1,
          lineHeight: 1,
          transition: 'color 0.3s ease',
          whiteSpace: 'nowrap',
        }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        style={{
          color: 'var(--color-text-35)',
          fontSize: '13px',
          lineHeight: 1.6,
          fontFamily: "'Inter', sans-serif",
          flex: 2,
          letterSpacing: '0.02em',
        }}
      >
        {service.desc}
      </p>

      {/* Small image */}
      <div
        style={{
          width: '160px',
          height: '72px',
          flexShrink: 0,
          overflow: 'hidden',
        }}
      >
        <img
          src={service.img}
          alt={service.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: hovered ? 'grayscale(20%) brightness(0.75)' : 'grayscale(55%) brightness(0.5)',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'filter 0.4s ease, transform 0.5s ease',
          }}
        />
      </div>
    </motion.div>
  )
}

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section id="servicos" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ padding: '80px 0 40px' }}
        >
          <SectionBadge label="Serviços" />
          <h2 className="section-title">Serviços</h2>
          <hr style={{ border: 'none', borderTop: '1px solid var(--color-text-08)', marginTop: '28px' }} />
        </motion.div>

        {/* Rows */}
        <div style={{ paddingBottom: '80px' }}>
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
    </section>
  )
}
