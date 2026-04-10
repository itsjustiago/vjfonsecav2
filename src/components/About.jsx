import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionBadge from './SectionBadge'

const stats = [
  { value: '25+', label: 'Anos de Experiência' },
  { value: '500+', label: 'Projetos Concluídos' },
  { value: '100%', label: 'Compromisso com Qualidade' },
]

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15 })
  const [imgRef, imgInView] = useInView({ threshold: 0.15 })

  return (
    <section id="sobre" style={{ background: 'var(--color-bg)', padding: '80px 0' }}>
      <div className="container"><div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        {/* Image */}
        <motion.div
          ref={imgRef}
          initial={{ opacity: 0, x: -30 }}
          animate={imgInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ position: 'relative' }}
        >
          <img
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
            alt="Oficina V&J Fonseca"
            style={{
              width: '100%',
              aspectRatio: '4/5',
              objectFit: 'cover',
              filter: 'grayscale(35%)',
              display: 'block',
            }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionBadge label="Sobre Nós" />
          <h2 className="section-title">Sobre Nós</h2>

          <p
            style={{
              color: 'var(--color-muted)',
              fontSize: '15px',
              lineHeight: 1.8,
              marginTop: '28px',
              marginBottom: '16px',
            }}
          >
            A V&amp;J Fonseca é uma empresa portuguesa especializada em soluções
            metálicas para a construção civil e industrial. Com décadas de
            experiência no setor, somos referência na distribuição de perfis
            estruturais e painéis metálicos.
          </p>
          <p
            style={{
              color: 'var(--color-muted)',
              fontSize: '15px',
              lineHeight: 1.8,
              marginBottom: '48px',
            }}
          >
            O nosso compromisso com a qualidade dos materiais e a satisfação dos
            nossos clientes tem sido o motor do nosso crescimento e da nossa
            reputação no mercado.
          </p>

          {/* Stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              borderTop: '1px solid var(--color-border)',
              paddingTop: '40px',
            }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '48px',
                    color: 'var(--color-text)',
                    lineHeight: 1,
                    marginBottom: '6px',
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    color: 'var(--color-muted)',
                    fontSize: '11px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div></div>
    </section>
  )
}
