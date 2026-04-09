import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useState } from 'react'

const projects = [
  {
    title: 'Cobertura Industrial',
    category: 'Painéis de Cobertura',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    span: 'col-span-2 row-span-2',
  },
  {
    title: 'Fachada Comercial',
    category: 'Painéis de Fachada',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    span: '',
  },
  {
    title: 'Estrutura Metálica',
    category: 'Perfis Estruturais',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
    span: '',
  },
  {
    title: 'Pavilhão Industrial',
    category: 'Painéis Sandwich',
    img: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=600&q=80',
    span: '',
  },
  {
    title: 'Cobertura Residencial',
    category: 'Painéis de Cobertura',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    span: 'col-span-2',
  },
]

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        aspectRatio: project.span.includes('row-span-2') ? 'auto' : '4/3',
        gridColumn: project.span.includes('col-span-2') ? 'span 2' : 'span 1',
        gridRow: project.span.includes('row-span-2') ? 'span 2' : 'span 1',
        minHeight: project.span.includes('row-span-2') ? '400px' : '220px',
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
          filter: 'grayscale(20%)',
          transform: hovered ? 'scale(1.06)' : 'scale(1)',
          transition: 'transform 0.5s ease',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: hovered ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.2)',
          transition: 'background 0.4s ease',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '28px',
        }}
      >
        <p
          style={{
            color: 'var(--color-accent)',
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '6px',
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
            fontSize: '24px',
            letterSpacing: '0.08em',
            color: '#fff',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 0.3s ease 0.05s',
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
    <section
      id="portfolio"
      style={{
        background: '#0a0a0a',
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
        <h2 className="section-title">Projetos</h2>
        <p
          style={{
            color: 'var(--color-muted)',
            fontSize: '16px',
            marginTop: '20px',
            maxWidth: '480px',
          }}
        >
          Alguns dos trabalhos que realizámos ao longo dos anos.
        </p>
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
