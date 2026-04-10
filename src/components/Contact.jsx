import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useState } from 'react'
import SectionBadge from './SectionBadge'

const inputStyle = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--color-input-border)',
  padding: '14px 0',
  color: 'var(--color-text)',
  fontSize: '15px',
  fontFamily: "'Inter', sans-serif",
  outline: 'none',
  transition: 'border-color 0.3s ease',
}

const TABLE_GRID = '48px 160px 1fr'

const contactRows = [
  { num: '01', label: 'Telefone', value: '916 641 573 / 263 079 366' },
  { num: '02', label: 'Email',    value: 'jf@vjfonseca.com', isEmail: true },
  { num: '03', label: 'Localização', value: 'Portugal' },
]

function ContactRow({ row, index, isLast }) {
  const border = isLast ? 'none' : '1px solid var(--color-border)'
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: TABLE_GRID,
        alignItems: 'center',
        borderBottom: border,
      }}
    >
      <span
        style={{
          padding: '20px 24px',
          fontFamily: 'Helvetica, sans-serif',
          fontSize: '11px',
          letterSpacing: '0.18em',
          color: 'var(--color-muted)',
        }}
      >
        {row.num}
      </span>
      <span
        style={{
          padding: '20px 24px',
          fontFamily: 'Helvetica, sans-serif',
          fontSize: '15px',
          fontWeight: 700,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: 'var(--color-text)',
          whiteSpace: 'nowrap',
        }}
      >
        {row.label}
      </span>
      <span style={{ padding: '20px 24px', fontSize: '13px', lineHeight: 1.65, color: 'var(--color-muted)' }}>
        {row.isEmail ? (
          <a
            href={`mailto:${row.value}`}
            style={{ color: 'var(--color-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--color-text)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--color-muted)')}
          >
            {row.value}
          </a>
        ) : row.value}
      </span>
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

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '80px',
        }}
      >
        {/* Contact info table */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '20px',
              letterSpacing: '0.15em',
              color: 'var(--color-muted)',
              marginBottom: '40px',
            }}
          >
            Fale Connosco
          </h3>

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
              {['#', 'Tipo', 'Detalhe'].map((label) => (
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

            {/* Rows */}
            {contactRows.map((row, i) => (
              <ContactRow key={row.num} row={row} index={i} isLast={i === contactRows.length - 1} />
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={(e) => e.preventDefault()}
          style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
        >
          <div>
            <label
              style={{
                display: 'block',
                color: 'var(--color-muted)',
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}
            >
              Nome
            </label>
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
          </div>

          <div>
            <label
              style={{
                display: 'block',
                color: 'var(--color-muted)',
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}
            >
              Email
            </label>
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
          </div>

          <div>
            <label
              style={{
                display: 'block',
                color: 'var(--color-muted)',
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}
            >
              Mensagem
            </label>
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
          </div>

          <div>
            <button type="submit" className="btn-outline">
              Enviar Mensagem ›
            </button>
          </div>
        </motion.form>
      </div>
      </div>
    </section>
  )
}
