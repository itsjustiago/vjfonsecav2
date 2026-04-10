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

function ReviewCard({ review }) {
  return (
    <div style={{
      width: '320px',
      height: '260px',
      flexShrink: 0,
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: '12px',
      padding: '28px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
    }}>
      <p style={{
        color: 'var(--color-text-60)',
        fontSize: '13px',
        lineHeight: '1.7',
        flex: 1,
        overflow: 'hidden',
      }}>
        "{review.text}"
      </p>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        paddingTop: '16px',
        borderTop: '1px solid var(--color-border)',
      }}>
        <div style={{
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
        }}>
          {initials(review.name)}
        </div>
        <div>
          <p style={{ color: 'var(--color-text)', fontSize: '13px', fontWeight: 600, lineHeight: 1.3 }}>
            {review.name}
          </p>
          <p style={{ color: 'var(--color-muted)', fontSize: '12px', marginTop: '2px' }}>
            {review.role}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Reviews() {
  const track = [...reviews, ...reviews, ...reviews]

  return (
    <section id="reviews" style={{ background: 'var(--color-bg)', padding: '80px 0' }}>
      {/* Title — contained */}
      <div className="container" style={{ marginBottom: '48px' }}>
        <SectionBadge label="Clientes" />
        <h2 className="section-title">O que dizem os nossos clientes</h2>
      </div>

      {/* Full-bleed marquee */}
      <div style={{ overflow: 'hidden', position: 'relative', zIndex: 1 }}>
        {/* Fade edges */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '160px',
          background: 'linear-gradient(to right, var(--color-bg), transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '160px',
          background: 'linear-gradient(to left, var(--color-bg), transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />

        <div className="marquee-track" style={{ gap: '16px', padding: '8px 0 16px' }}>
          {track.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>
    </section>
  )
}
