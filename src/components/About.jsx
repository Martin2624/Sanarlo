import { professional } from '../config'
import './About.css'

export default function About() {
  return (
    <section className="block" id="sobre">
      <div className="container">
        <div className="about-grid">
          <div
            className="about-photo"
            style={{ backgroundImage: 'url(/images/consultorio.jpeg)' }}
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
              Soy Licenciada en Psicología y trabajo desde un enfoque cognitivo-conductual basado en evidencia científica. 
              Acompaño a adolescentes y personas adultas en procesos relacionados con ansiedad, depresión, regulación emocional, autoestima, duelo y autoconocimiento, ofreciendo un espacio seguro, respetuoso y libre de juicios donde cada persona pueda avanzar a su propio ritmo.    
            </p>
            <p>
             Mi interés por la neurodiversidad nace tanto de mi formación profesional como de mi experiencia personal como mujer autista con diagnóstico tardío. 
             Esto me permite acompañar a personas autistas, con TDAH y otras formas de neurodivergencia desde una comprensión cercana, sin perder el rigor clínico y el compromiso con una atención basada en evidencia.
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
