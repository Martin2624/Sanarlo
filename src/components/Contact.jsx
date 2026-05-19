import { config, professional } from '../config'
import './Contact.css'

export default function Contact() {
  return (
    <section className="block contact-section" id="contacto">
      <div className="container">
        <div className="contact-grid">
          <div>
            <div className="eyebrow">Agenda</div>
            <h2 className="section-title">Reservemos un <em>primer encuentro</em>.</h2>
            <p className="section-lead">
              La primera consulta es un espacio para conocernos y entender qué necesitas. Sin compromiso a un proceso largo: solo hablar y ver si tiene sentido continuar.
            </p>

            <div className="contact-info-item">
              <div className="contact-info-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <path d="M16 2v4M8 2v4M3 10h18"/>
                </svg>
              </div>
              <div className="contact-info-text">
                <strong>Disponibilidad</strong>
                Lunes a viernes, 9:00 — 19:00 hrs<br />
                Sábados, 10:00 — 14:00 hrs
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="contact-info-text">
                <strong>Ubicación</strong>
                Consultorio presencial en {professional.city}<br />
                Sesiones en línea por videollamada · 50 minutos
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <path d="M22 6 12 13 2 6"/>
                </svg>
              </div>
              <div className="contact-info-text">
                <strong>Correo</strong>
                <a href={`mailto:${config.email}`}>{config.email}</a>
              </div>
            </div>
          </div>

          <div className="wa-card">
            <h3>¿Listo para comenzar?</h3>
            <p>
              El primer paso es escribir un mensaje breve por WhatsApp. Te respondo personalmente para coordinar horario, modalidad y costo.
            </p>
            <a
              href={config.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn wa-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.5 14.4c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.1-.2.3-.7 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.9-2.1-.2-.5-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.7 1.2 2.9.1.2 2 3.1 4.9 4.4 1.8.7 2.5.8 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.4 1.3 4.9L2 22l5.2-1.4c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
              </svg>
              Escribir por WhatsApp
            </a>
            <p className="form-note">
              * Próximamente: agenda integrada con Doctoralia para reservas en línea con disponibilidad en tiempo real.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
