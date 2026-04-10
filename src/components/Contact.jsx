import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useState } from 'react'
import SectionBadge from './SectionBadge'

const TABLE_GRID = '48px 180px 1fr'

const inputStyle = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--color-input-border)',
  padding: '10px 0',
  color: 'var(--color-text)',
  fontSize: '13px',
  fontFamily: "'Inter', sans-serif",
  outline: 'none',
  transition: 'border-color 0.3s ease',
}

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1 })
  const [focused, setFocused] = useState(null)

  const rowStyle = (isLast) => ({
    display: 'grid',
    gridTemplateColumns: TABLE_GRID,
    alignItems: 'center',
    borderBottom: isLast ? 'none' : '1px solid var(--color-border)',
  })

  const numStyle = {
    padding: '20px 24px',
    fontFamily: 'Helvetica, sans-serif',
    fontSize: '11px',
    letterSpacing: '0.18em',
    color: 'var(--color-muted)',
  }

  const labelStyle = {
    padding: '20px 24px',
    fontFamily: 'Helvetica, sans-serif',
    fontSize: '15px',
    fontWeight: 700,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: 'var(--color-text)',
    whiteSpace: 'nowrap',
  }

  return (
    <section id="contacto" style={{ background: 'var(--color-surface-alt)', padding: '80px 0' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px' }}
        >
          <SectionBadge label="Contacto" />
          <h2 className="section-title">Contacto</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ paddingBottom: '80px' }}
        >
          <form onSubmit={(e) => e.preventDefault()}>
            <div style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.2)',
            }}>
              {/* Header */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: TABLE_GRID,
                background: 'var(--color-surface-alt)',
                borderBottom: '1px solid var(--color-border)',
              }}>
                {['#', 'Campo', 'Detalhe'].map((label) => (
                  <span key={label} style={{
                    padding: '14px 24px',
                    fontSize: '10px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--color-muted)',
                    fontWeight: 500,
                    fontFamily: 'Helvetica, sans-serif',
                  }}>{label}</span>
                ))}
              </div>

              {/* Row 01 — Telefone */}
              <div style={rowStyle(false)}>
                <span style={numStyle}>01</span>
                <span style={labelStyle}>Telefone</span>
                <span style={{ padding: '20px 24px', fontSize: '13px', lineHeight: 1.65, color: 'var(--color-muted)' }}>
                  916 641 573 &nbsp;/&nbsp; 263 079 366
                </span>
              </div>

              {/* Row 02 — Email info */}
              <div style={rowStyle(false)}>
                <span style={numStyle}>02</span>
                <span style={labelStyle}>Email</span>
                <span style={{ padding: '20px 24px', fontSize: '13px', lineHeight: 1.65 }}>
                  <a
                    href="mailto:jf@vjfonseca.com"
                    style={{ color: 'var(--color-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--color-text)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--color-muted)')}
                  >
                    jf@vjfonseca.com
                  </a>
                </span>
              </div>

              {/* Row 03 — Localização */}
              <div style={rowStyle(false)}>
                <span style={numStyle}>03</span>
                <span style={labelStyle}>Localização</span>
                <span style={{ padding: '20px 24px', fontSize: '13px', lineHeight: 1.65, color: 'var(--color-muted)' }}>
                  Portugal
                </span>
              </div>

              {/* Row 04 — Nome (form) */}
              <div style={rowStyle(false)}>
                <span style={numStyle}>04</span>
                <span style={labelStyle}>Nome</span>
                <span style={{ padding: '12px 24px' }}>
                  <input
                    type="text"
                    placeholder="O seu nome"
                    style={{
                      ...inputStyle,
                      borderBottomColor: focused === 'nome' ? 'var(--color-text)' : 'var(--color-input-border)',
                    }}
                    onFocus={() => setFocused('nome')}
                    onBlur={() => setFocused(null)}
                  />
                </span>
              </div>

              {/* Row 05 — Email (form) */}
              <div style={rowStyle(false)}>
                <span style={numStyle}>05</span>
                <span style={labelStyle}>Email</span>
                <span style={{ padding: '12px 24px' }}>
                  <input
                    type="email"
                    placeholder="email@exemplo.com"
                    style={{
                      ...inputStyle,
                      borderBottomColor: focused === 'email' ? 'var(--color-text)' : 'var(--color-input-border)',
                    }}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                  />
                </span>
              </div>

              {/* Row 06 — Mensagem (form) */}
              <div style={{ ...rowStyle(false), alignItems: 'start' }}>
                <span style={{ ...numStyle, paddingTop: '24px' }}>06</span>
                <span style={{ ...labelStyle, paddingTop: '24px' }}>Mensagem</span>
                <span style={{ padding: '12px 24px' }}>
                  <textarea
                    rows={4}
                    placeholder="Como podemos ajudar?"
                    style={{
                      ...inputStyle,
                      resize: 'none',
                      borderBottomColor: focused === 'msg' ? 'var(--color-text)' : 'var(--color-input-border)',
                    }}
                    onFocus={() => setFocused('msg')}
                    onBlur={() => setFocused(null)}
                  />
                </span>
              </div>

              {/* Row 07 — Submit */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: TABLE_GRID,
                alignItems: 'center',
                background: 'var(--color-surface-alt)',
                borderTop: '1px solid var(--color-border)',
              }}>
                <span style={numStyle}>07</span>
                <span style={labelStyle}>Enviar</span>
                <span style={{ padding: '20px 24px' }}>
                  <button type="submit" className="btn-outline">
                    Enviar Mensagem ›
                  </button>
                </span>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
