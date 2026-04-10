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
        {/* Contact info */}
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <p
                style={{
                  color: 'var(--color-text-dim)',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                Telefone
              </p>
              <p style={{ color: 'var(--color-text)', fontSize: '18px' }}>
                916 641 573
              </p>
              <p style={{ color: 'var(--color-muted)', fontSize: '15px', marginTop: '4px' }}>
                263 079 366
              </p>
            </div>

            <div>
              <p
                style={{
                  color: 'var(--color-text-dim)',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                Email
              </p>
              <a
                href="mailto:jf@vjfonseca.com"
                style={{
                  color: 'var(--color-text)',
                  fontSize: '16px',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'rgba(255,255,255,0.7)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--color-text)')}
              >
                jf@vjfonseca.com
              </a>
            </div>

            <div>
              <p
                style={{
                  color: 'var(--color-text-dim)',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                Localização
              </p>
              <p style={{ color: 'var(--color-muted)', fontSize: '15px', lineHeight: 1.7 }}>
                Portugal
              </p>
            </div>
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
