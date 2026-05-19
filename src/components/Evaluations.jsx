import { config } from '../config'
import './Evaluations.css'

const batteries = [
  { code: 'PHQ-9', label: 'Depresión' },
  { code: 'GAD-7', label: 'Ansiedad generalizada' },
  { code: 'BDI-II', label: 'Inventario de Beck' },
  { code: 'PSS-10', label: 'Estrés percibido' },
  { code: 'PCL-5', label: 'Estrés postraumático' },
  { code: '+', label: 'Otras en desarrollo' },
]

export default function Evaluations() {
  return (
    <section className="block eval-section" id="evaluaciones">
      <div className="container">
        <div className="eval-grid">
          <div>
            <div className="eyebrow">Evaluaciones clínicas</div>
            <h2 className="section-title">Instrumentos validados, <em>resultados</em> que orientan.</h2>
            <p className="section-lead">
              Una plataforma propia con baterías de evaluación validadas internacionalmente, diseñada para que puedas hacer un primer mapeo de lo que estás sintiendo, antes o durante el proceso terapéutico.
            </p>

            <ul className="eval-list">
              {batteries.map((b) => (
                <li key={b.code}>
                  <code>{b.code}</code> {b.label}
                </li>
              ))}
            </ul>

            <a
              href={config.evaluationsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn eval-cta"
            >
              Realizar una evaluación
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M7 17 17 7M7 7h10v10"/>
              </svg>
            </a>
          </div>

          <div className="eval-visual" aria-hidden="true">
            <div className="eval-mock">
              <div className="eval-mock-tag">GAD-7 · Pregunta 3 de 7</div>
              <h4>¿Con qué frecuencia te ha costado relajarte?</h4>
              <p className="eval-q">En las últimas 2 semanas</p>
              <div className="eval-options">
                <div className="eval-opt">Nunca</div>
                <div className="eval-opt">Varios días</div>
                <div className="eval-opt active">+ mitad</div>
                <div className="eval-opt">Casi cada día</div>
              </div>
              <div className="eval-progress">
                <span className="filled"></span>
                <span className="filled"></span>
                <span className="filled"></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
