import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionBadge from './SectionBadge'

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
  const [ref, inView] = useInView({ threshold: 0.05 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      className="project-card"
      style={{
        gridColumn: project.col,
        gridRow: project.row,
        height: project.height,
      }}
    >
      <img
        src={project.img}
        alt={project.title}
        loading={index < 3 ? 'eager' : 'lazy'}
      />
      <div className="card-overlay">
        <p className="card-category" style={{ fontFamily: "'Inter', sans-serif" }}>
          {project.category}
        </p>
        <h3 className="card-title" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
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
          <SectionBadge label="Portfolio" />
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
