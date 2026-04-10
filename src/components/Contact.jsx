import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useState } from 'react'
import SectionBadge from './SectionBadge'

const TABLE_GRID = '48px 140px 1fr'

const tableContainer = {
  background: 'var(--color-surface)',
  border: '1px solid var(--color-border)',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 8px 40px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.2)',
}

const headerCell = {
  padding: '14px 24px',
  fontSize: '10px',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'var(--color-muted)',
  fontWeight: 500,
  fontFamily: 'Helvetica, sans-serif',
}

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

function TableHeader({ cols }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: TABLE_GRID,
      background: 'var(--color-surface-alt)',
      borderBottom: '1px solid var(--color-border)',
    }}>
      {cols.map((label) => (
        <span key={label} style={headerCell}>{label}</span>
      ))}
    </div>
  )
}

function TableRow({ num, label, children, isLast, alignTop }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: TABLE_GRID,
      alignItems: alignTop ? 'start' : 'center',
      borderBottom: isLast ? 'none' : '1px solid var(--color-border)',
    }}>
      <span style={{ ...numStyle, ...(alignTop ? { paddingTop: '24px' } : {}) }}>{num}</span>
      <span style={{ ...labelStyle, ...(alignTop ? { paddingTop: '24px' } : {}) }}>{label}</span>
      <span style={{ padding: alignTop ? '12px 24px' : '20px 24px' }}>{children}</span>
    </div>
  )
}

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1 })
  const [focused, setFocused] = useState(null)

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

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '48px',
          paddingBottom: '80px',
        }}>
          {/* Contact info table */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div style={tableContainer}>
              <TableHeader cols={['#', 'Tipo', 'Detalhe']} />

              <TableRow num="01" label="Telefone">
                <span style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                  916 641 573 &nbsp;/&nbsp; 263 079 366
                </span>
              </TableRow>

              <TableRow num="02" label="Email">
                <a
                  href="mailto:jf@vjfonseca.com"
                  style={{ fontSize: '13px', color: 'var(--color-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--color-text)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--color-muted)')}
                >
                  jf@vjfonseca.com
                </a>
              </TableRow>

              <TableRow num="03" label="Localização" isLast>
                <span style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                  Portugal
                </span>
              </TableRow>
            </div>
          </motion.div>

          {/* Form table */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={(e) => e.preventDefault()}>
              <div style={tableContainer}>
                <TableHeader cols={['#', 'Campo', '']} />

                <TableRow num="01" label="Nome">
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
                </TableRow>

                <TableRow num="02" label="Email">
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
                </TableRow>

                <TableRow num="03" label="Mensagem" alignTop>
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
                </TableRow>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: TABLE_GRID,
                  background: 'var(--color-surface-alt)',
                  borderTop: '1px solid var(--color-border)',
                }}>
                  <span style={numStyle} />
                  <span style={numStyle} />
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
      </div>
    </section>
  )
}
