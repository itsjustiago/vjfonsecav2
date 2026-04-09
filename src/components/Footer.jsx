import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { theme, toggle } = useTheme()

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

        {/* Theme toggle */}
        <button
          onClick={toggle}
          aria-label="Alternar tema"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <span
            style={{
              fontSize: '10px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-copyright)',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </span>
          {/* Toggle track */}
          <span
            style={{
              position: 'relative',
              display: 'inline-block',
              width: '36px',
              height: '20px',
              borderRadius: '10px',
              background: theme === 'dark' ? 'var(--color-border)' : 'var(--color-accent)',
              transition: 'background 0.3s ease',
            }}
          >
            {/* Knob */}
            <span
              style={{
                position: 'absolute',
                top: '3px',
                left: theme === 'dark' ? '3px' : '19px',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: 'var(--color-text)',
                transition: 'left 0.3s ease',
              }}
            />
          </span>
        </button>
      </div>
    </footer>
  )
}
