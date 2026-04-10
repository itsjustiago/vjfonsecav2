import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionBadge from './SectionBadge'

const reviews = [
  {
    name: 'António Rodrigues',
    role: 'Rodrigues & Filhos, Lda.',
    text: 'Trabalho impecável. A equipa da V&J Fonseca cumpriu todos os prazos e a qualidade dos painéis de cobertura superou as nossas expectativas. Recomendo sem hesitar.',
  },
  {
    name: 'Margarida Costa',
    role: 'Grupo Logística Norte',
    text: 'Contratámos para a cobertura de um armazém de grande dimensão. Profissionalismo total desde o orçamento até à entrega final. Voltaremos a trabalhar juntos.',
  },
  {
    name: 'Paulo Ferreira',
    role: 'Ferreira Construções',
    text: 'Ótima relação qualidade-preço. Os perfis estruturais chegaram nos prazos acordados e a montagem correu sem problemas. Parceiro de confiança.',
  },
  {
    name: 'Sofia Mendes',
    role: 'SM Arquitectura',
    text: 'Colaborámos em vários projetos de fachada. A V&J Fonseca destaca-se pela precisão nos acabamentos e pela disponibilidade para adaptar soluções ao projeto.',
  },
  {
    name: 'Ricardo Alves',
    role: 'Alves & Associados',
    text: 'Entregaram a estrutura metálica dentro do prazo e com acabamentos de excelência. A comunicação ao longo de todo o projeto foi exemplar.',
  },
  {
    name: 'Carla Nunes',
    role: 'CNA Engenharia',
    text: 'Recomendo a V&J Fonseca pela seriedade e qualidade do serviço. Resultado final acima do esperado, com total cumprimento das especificações técnicas.',
  },
]

function initials(name) {
  return name.split(' ').slice(0, 2).map((n) => n[0]).join('')
}

function ReviewCard({ review, index }) {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '12px',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}
    >
      <p
        style={{
          color: 'var(--color-text-60)',
          fontSize: '14px',
          lineHeight: '1.75',
          flex: 1,
        }}
      >
        {review.text}
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          paddingTop: '16px',
          borderTop: '1px solid var(--color-border)',
        }}
      >
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'var(--color-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            fontSize: '13px',
            fontWeight: 700,
            color: '#000',
            letterSpacing: '0.02em',
          }}
        >
          {initials(review.name)}
        </div>
        <div>
          <p
            style={{
              color: 'var(--color-text)',
              fontSize: '13px',
              fontWeight: 600,
              lineHeight: 1.3,
            }}
          >
            {review.name}
          </p>
          <p
            style={{
              color: 'var(--color-muted)',
              fontSize: '12px',
              marginTop: '2px',
            }}
          >
            {review.role}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Reviews() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section id="reviews" style={{ background: 'var(--color-bg)', padding: '100px 0' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '56px' }}
        >
          <SectionBadge label="Clientes" />
          <h2 className="section-title">O que dizem os nossos clientes</h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
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
