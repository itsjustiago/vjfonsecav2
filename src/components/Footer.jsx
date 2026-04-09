export default function Footer() {
  return (
    <footer
      style={{
        background: '#000',
        borderTop: '1px solid var(--color-border)',
        padding: '32px 8vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
      }}
    >
      <span
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '18px',
          letterSpacing: '0.1em',
          color: 'var(--color-text)',
        }}
      >
        V&amp;J FONSECA
      </span>
      <p style={{ color: '#444', fontSize: '13px' }}>
        © {new Date().getFullYear()} V&amp;J Fonseca. Todos os direitos reservados.
      </p>
    </footer>
  )
}
