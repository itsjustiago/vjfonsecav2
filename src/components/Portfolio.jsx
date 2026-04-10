import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useState } from 'react'

const projects = [
  {
    title: 'Cobertura Industrial',
    category: 'Painéis de Cobertura',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80',
    col: '1',
    row: 'span 2',
    height: '552px',
  },
  {
    title: 'Fachada Comercial',
    category: 'Painéis de Fachada',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    col: '2',
    row: '1',
    height: '274px',
  },
  {
    title: 'Estrutura Metálica',
    category: 'Perfis Estruturais',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
    col: '3',
    row: '1',
    height: '274px',
  },
  {
    title: 'Pavilhão Industrial',
    category: 'Painéis Sandwich',
    img: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=600&q=80',
    col: '2',
    row: '2',
    height: '276px',
  },
  {
    title: 'Cobertura Residencial',
    category: 'Painéis de Cobertura',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
    col: '3',
    row: '2',
    height: '276px',
  },
  // Row 3 — large right + small left
  {
    title: 'Nave Logística',
    category: 'Construção Metálica',
    img: 'https://images.unsplash.com/photo-1553260168-69b041873e65?w=600&q=80',
    col: '1',
    row: '3',
    height: '320px',
  },
  {
    title: 'Revestimento Exterior',
    category: 'Painéis de Fachada',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    col: '2 / span 2',
    row: '3',
    height: '320px',
  },
  // Row 4 — three equal
  {
    title: 'Armazém Frigorífico',
    category: 'Painéis Isotérmicos',
    img: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80',
    col: '1',
    row: '4',
    height: '280px',
  },
  {
    title: 'Edifício de Escritórios',
    category: 'Painéis de Fachada',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    col: '2',
    row: '4',
    height: '280px',
  },
  {
    title: 'Estrutura Agrícola',
    category: 'Coberturas Agrícolas',
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
    col: '3',
    row: '4',
    height: '280px',
  },
]

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.05 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        gridColumn: project.col,
        gridRow: project.row,
        height: project.height,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={project.img}
        alt={project.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: hovered ? 'grayscale(20%) brightness(0.65)' : 'grayscale(50%) brightness(0.55)',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.6s ease, filter 0.5s ease',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: hovered ? 'rgba(0,0,0,0.55)' : 'rgba(0,0,0,0.15)',
          transition: 'background 0.4s ease',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '24px',
        }}
      >
        <p
          style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '10px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            marginBottom: '5px',
            fontFamily: "'Inter', sans-serif",
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 0.3s ease',
          }}
        >
          {project.category}
        </p>
        <h3
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(18px, 1.8vw, 26px)',
            letterSpacing: '0.08em',
            color: '#fff',
            lineHeight: 1,
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 0.3s ease 0.04s',
          }}
        >
          {project.title}
        </h3>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section id="portfolio" style={{ background: 'var(--color-surface-alt)' }}>
      {/* Title zone — container-constrained */}
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ padding: '80px 0 40px' }}
        >
          <h2 className="section-title">Projetos</h2>
        </motion.div>
      </div>

      {/* Full-bleed asymmetric grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '5fr 3fr 4fr',
          gridTemplateRows: 'auto auto',
          gap: '2px',
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      <div style={{ height: '80px' }} />
    </section>
  )
}
