import { services } from '../data/services'
import './Services.css'

// Mapa de iconos SVG inline para no depender de librería externa
const icons = {
  sun: (
    <>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      <circle cx="12" cy="12" r="3"/>
    </>
  ),
  chat: <path d="M3 12c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9c-1.5 0-2.92-.37-4.16-1.02L3 21l1.02-4.84A8.97 8.97 0 0 1 3 12z"/>,
  heart: <path d="M12 21s-7-4.5-9-10c-1-3 1-7 4.5-7C9 4 11 5.5 12 7c1-1.5 3-3 4.5-3C20 4 22 8 21 11c-2 5.5-9 10-9 10z"/>,
  user: (
    <>
      <circle cx="12" cy="8" r="4"/>
      <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
    </>
  ),
  shield: (
    <>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <path d="M22 4 12 14.01l-3-3"/>
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v6l4 2"/>
      <path d="M8 2h8"/>
    </>
  ),
}

export default function Services() {
  return (
    <section className="block services-section" id="servicios">
      <div className="container">
        <div className="eyebrow">Servicios</div>
        <h2 className="section-title">Áreas en las que <em>trabajamos</em>.</h2>
        <p className="section-lead">
          Procesos terapéuticos individuales para adultos, con enfoque humanista y duración acordada según la necesidad. No hay paquetes cerrados: cada plan se construye en la primera sesión.
        </p>

        <div className="services-grid">
          {services.map((s) => (
            <article key={s.title} className="service-card">
              <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                {icons[s.iconName]}
              </svg>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
