import SectionBadge from './SectionBadge'

const clients = [
  { name: 'António Rodrigues', company: 'Rodrigues & Filhos, Lda.' },
  { name: 'Margarida Costa',   company: 'Grupo Logística Norte' },
  { name: 'Paulo Ferreira',    company: 'Ferreira Construções' },
  { name: 'Sofia Mendes',      company: 'SM Arquitectura' },
  { name: 'Ricardo Alves',     company: 'Alves & Associados' },
  { name: 'Carla Nunes',       company: 'CNA Engenharia' },
  { name: 'José Teixeira',     company: 'Teixeira Industrial' },
  { name: 'Beatriz Santos',    company: 'Santos & Correia, S.A.' },
]

function Item({ name, company }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '32px', flexShrink: 0 }}>
      <span style={{ display: 'inline-flex', flexDirection: 'column', gap: '3px' }}>
        <span style={{
          fontFamily: 'Helvetica, sans-serif',
          fontWeight: 700,
          fontSize: '13px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--color-text)',
          whiteSpace: 'nowrap',
        }}>
          {name}
        </span>
        <span style={{
          fontFamily: 'Helvetica, sans-serif',
          fontSize: '11px',
          letterSpacing: '0.08em',
          color: 'var(--color-muted)',
          whiteSpace: 'nowrap',
        }}>
          {company}
        </span>
      </span>

      {/* separator */}
      <span style={{
        width: '4px',
        height: '4px',
        borderRadius: '50%',
        background: 'var(--color-accent)',
        flexShrink: 0,
        opacity: 0.7,
      }} />
    </span>
  )
}

export default function Reviews() {
  // Duplicate enough times for a seamless loop regardless of screen width
  const track = [...clients, ...clients, ...clients]

  return (
    <section id="reviews" style={{ background: 'var(--color-bg)', padding: '80px 0 0' }}>
      {/* Title — contained */}
      <div className="container" style={{ marginBottom: '48px' }}>
        <SectionBadge label="Clientes" />
        <h2 className="section-title">Os nossos clientes</h2>
      </div>

      {/* Full-bleed marquee strip */}
      <div style={{
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        background: 'var(--color-surface)',
        overflow: 'hidden',
        paddingTop: '24px',
        paddingBottom: '24px',
        marginBottom: '0',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Fade edges */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '120px',
          background: 'linear-gradient(to right, var(--color-surface), transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '120px',
          background: 'linear-gradient(to left, var(--color-surface), transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />

        <div className="marquee-track">
          {track.map((c, i) => (
            <Item key={i} name={c.name} company={c.company} />
          ))}
        </div>
      </div>

      <div style={{ height: '80px' }} />
    </section>
  )
}
