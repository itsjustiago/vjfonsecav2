export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-footer-bg)',
        borderTop: '1px solid var(--color-border)',
        padding: '32px 0',
      }}
    >
      <div
        className="container"
        style={{
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
            fontSize: 'clamp(20px, 2vw, 28px)',
            letterSpacing: '0.15em',
            color: 'var(--color-text)',
          }}
        >
          V&amp;J FONSECA
        </span>

        <p style={{ color: 'var(--color-copyright)', fontSize: '13px' }}>
          © {new Date().getFullYear()} V&amp;J Fonseca. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
