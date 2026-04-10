import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { theme, toggle } = useTheme()

  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 1,
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

        <button
          onClick={toggle}
          aria-label="Toggle light/dark mode"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-text-45)',
            fontSize: '12px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontFamily: 'Helvetica, sans-serif',
            padding: 0,
          }}
        >
          <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
          <span
            style={{
              position: 'relative',
              display: 'inline-block',
              width: '36px',
              height: '20px',
              background: theme === 'dark' ? 'var(--color-border)' : 'var(--color-accent)',
              borderRadius: '10px',
              transition: 'background 0.3s ease',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: '3px',
                left: theme === 'dark' ? '3px' : '19px',
                width: '14px',
                height: '14px',
                background: theme === 'dark' ? 'var(--color-muted)' : '#fff',
                borderRadius: '50%',
                transition: 'left 0.3s ease, background 0.3s ease',
              }}
            />
          </span>
        </button>
      </div>
    </footer>
  )
}
