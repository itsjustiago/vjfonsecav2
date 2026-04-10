import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const reviews = [
  {
    name: 'António Rodrigues',
    company: 'Rodrigues & Filhos, Lda.',
    text: 'Trabalho impecável. A equipa da V&J Fonseca cumpriu todos os prazos e a qualidade dos painéis de cobertura superou as nossas expectativas. Recomendo sem hesitar.',
    stars: 5,
  },
  {
    name: 'Margarida Costa',
    company: 'Grupo Logística Norte',
    text: 'Contratámos para a cobertura de um armazém de grande dimensão. Profissionalismo total desde o orçamento até à entrega final. Voltaremos a trabalhar juntos.',
    stars: 5,
  },
  {
    name: 'Paulo Ferreira',
    company: 'Ferreira Construções',
    text: 'Ótima relação qualidade-preço. Os perfis estruturais chegaram nos prazos acordados e a montagem correu sem problemas. Parceiro de confiança.',
    stars: 5,
  },
  {
    name: 'Sofia Mendes',
    company: 'SM Arquitectura',
    text: 'Colaborámos em vários projetos de fachada. A V&J Fonseca destaca-se pela precisão nos acabamentos e pela disponibilidade para adaptar soluções ao projeto.',
    stars: 5,
  },
]

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="var(--color-accent)">
          <polygon points="7,1 8.8,5.2 13.4,5.5 10,8.5 11,13 7,10.5 3,13 4,8.5 0.6,5.5 5.2,5.2" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review, index }) {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Stars count={review.stars} />
      <p
        style={{
          color: 'var(--color-text-60)',
          fontSize: '15px',
          lineHeight: '1.7',
          flex: 1,
          marginBottom: '24px',
        }}
      >
        "{review.text}"
      </p>
      <div
        style={{
          borderTop: '1px solid var(--color-border)',
          paddingTop: '20px',
        }}
      >
        <p
          style={{
            color: 'var(--color-text)',
            fontSize: '14px',
            fontWeight: 500,
            letterSpacing: '0.05em',
          }}
        >
          {review.name}
        </p>
        <p
          style={{
            color: 'var(--color-muted)',
            fontSize: '12px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginTop: '4px',
          }}
        >
          {review.company}
        </p>
      </div>
    </motion.div>
  )
}

export default function Reviews() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section id="reviews" style={{ background: 'var(--color-bg)', padding: '80px 0' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '48px' }}
        >
          <h2 className="section-title">Clientes</h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2px',
          }}
        >
          {reviews.map((review, i) => (
            <ReviewCard key={review.name} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
