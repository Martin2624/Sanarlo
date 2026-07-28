import './Nav.css'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#" className="logo">
          <img src="/images/sanarlo-horizontal.svg" alt="Sanarlo — Psicoterapia" className="logo-img" />
        </a>
        <div className="nav-links">
          <a href="#sobre">Sobre Eva</a>
          <a href="#servicios">Servicios</a>
          <a href="#evaluaciones">Evaluaciones</a>
          <a href="#blog">Blog</a>
          <a href="#contacto">Contacto</a>
        </div>
        <a href="#contacto" className="nav-cta">Agendar cita</a>
      </div>
    </nav>
  )
}
