export default function SectionBadge({ label }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        border: '1px solid var(--color-border)',
        borderRadius: '6px',
        padding: '5px 12px',
        marginBottom: '16px',
        background: 'var(--color-surface)',
      }}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        style={{ opacity: 0.5, flexShrink: 0 }}
      >
        <polygon
          points="6,1 7.5,4.5 11,4.8 8.5,7 9.3,10.5 6,8.8 2.7,10.5 3.5,7 1,4.8 4.5,4.5"
          fill="var(--color-text)"
        />
      </svg>
      <span
        style={{
          fontSize: '12px',
          color: 'var(--color-text-60)',
          letterSpacing: '0.04em',
          fontWeight: 500,
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
    </div>
  )
}
