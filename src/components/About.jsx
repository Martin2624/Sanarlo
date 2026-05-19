import { professional } from '../config'
import './About.css'

export default function About() {
  return (
    <section className="block" id="sobre">
      <div className="container">
        <div className="about-grid">
          <div
            className="about-photo"
            style={{ backgroundImage: 'url(/images/consultorio.jpg)' }}
            role="img"
            aria-label="Espacio terapéutico del consultorio Sanarlo"
          >
            <span aria-hidden="true">[ foto editorial · espacio terapéutico ]</span>
          </div>
          <div className="about-body">
            <div className="eyebrow">Sobre mí</div>
            <h2 className="section-title">
              Soy <em>{professional.shortName}</em>, y mi trabajo es acompañarte.
            </h2>
            <p>
              Mi formación y mi práctica se sostienen en la psicología humanista: el supuesto de que cada persona es la mejor experta en sí misma, y de que el cambio surge del encuentro auténtico, no de fórmulas. Acompaño procesos de ansiedad, duelo, crisis vitales y búsquedas de sentido.
            </p>
            <p>
              Cada proceso terapéutico es distinto. No trabajo con manuales ni recetas: trabajo desde la escucha, construyendo contigo un espacio donde puedas pensar en voz alta, sin juicio, con dirección y, sobre todo, con presencia.
            </p>
            <div className="credentials">
              <div className="credential-item">
                <strong>Formación</strong>
                Lic. en Psicología · {professional.university}
              </div>
              <div className="credential-item">
                <strong>Cédula profesional</strong>
                {professional.cedula}
              </div>
              <div className="credential-item">
                <strong>Enfoque</strong>
                {professional.approach}
              </div>
              <div className="credential-item">
                <strong>Modalidad</strong>
                Presencial ({professional.city.split(',')[0]}) y en línea
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
