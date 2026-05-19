import { config, professional } from '../config'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">sanarlo<span className="dot">.</span></div>
            <p className="footer-tagline">
              Consultorio de psicoterapia humanista. Acompañamiento para adultos desde el encuentro auténtico y el respeto por tu proceso.
            </p>
          </div>
          <div>
            <h5>Navegación</h5>
            <ul>
              <li><a href="#sobre">Sobre Eva</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#evaluaciones">Evaluaciones</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div>
            <h5>Recursos</h5>
            <ul>
              <li><a href={config.evaluationsUrl} target="_blank" rel="noopener noreferrer">Plataforma de evaluaciones</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="/aviso-de-privacidad">Aviso de privacidad</a></li>
            </ul>
          </div>
          <div>
            <h5>Contacto</h5>
            <ul>
              <li><a href={`mailto:${config.email}`}>{config.email}</a></li>
              <li><a href={config.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              {config.instagramUrl && (
                <li><a href={config.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a></li>
              )}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Sanarlo · {professional.fullName}</span>
          <span>Cédula profesional {professional.cedula} · SEP</span>
        </div>
      </div>
    </footer>
  )
}
