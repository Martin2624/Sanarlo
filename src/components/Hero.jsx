import { config, professional } from '../config'
import './Hero.css'

export default function Hero() {
  return (
    <header className="hero">
      <div className="container hero-grid">
        <div>
          <div className="hero-eyebrow">Psicoterapia cognitivo conductual · {professional.city.split(',')[0]}</div>
          <h1>Un espacio para <em>encontrarte</em> y volver a habitarte.</h1>
          <p className="hero-lead">
           Creo profundamente que la terapia no busca cambiar quién eres, sino ayudarte a comprenderte mejor, aceptar tu historia y construir una vida con mayor bienestar, autenticidad y equilibrio.          </p>
          <div className="hero-actions">
            <a href={config.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Agendar primera consulta
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#evaluaciones" className="btn btn-ghost">Conocer evaluaciones</a>
          </div>
        </div>

        <div className="hero-visual">
          <div
            className="photo-frame"
            style={{ backgroundImage: 'url(/images/eva-portrait.jpeg)' }}
            role="img"
            aria-label="Retrato profesional de Eva Czarina Estrada"
          >
          </div>
          <div className="hero-badge">
            <div className="hero-badge-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <div className="hero-badge-text">
              <strong>Lic. {professional.shortName} Estrada</strong>
              Cédula {professional.cedula} · UNISON
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
