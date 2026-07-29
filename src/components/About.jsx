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
Soy Licenciada en Psicología y trabajo desde un enfoque cognitivo-conductual basado en evidencia científica. Acompaño a adolescentes y personas adultas en procesos relacionados con ansiedad, depresión, regulación emocional, autoestima, estrés, duelo, autoconocimiento y neurodivergencia, adaptando cada proceso a las necesidades y objetivos de cada persona.
            <p>
Mi interés por la neurodiversidad, especialmente por el autismo y el TDAH, nace tanto de mi formación profesional como de mi propia experiencia. Como mujer autista con diagnóstico tardío, conozco de primera mano lo que implica crecer sintiendo que algo es diferente sin encontrar respuestas claras, así como el impacto que puede tener recibir un diagnóstico en la vida adulta.
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
