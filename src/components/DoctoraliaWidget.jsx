import { useEffect } from 'react'
import './DoctoraliaWidget.css'

export default function DoctoraliaWidget() {
  useEffect(() => {
    // El script de Docplanner/Doctoralia escanea el DOM al cargar y reemplaza
    // el <a id="zl-url"> por el iframe del calendario. Solo se inyecta una vez.
    if (document.getElementById('zl-widget-s')) return
    const js = document.createElement('script')
    js.id = 'zl-widget-s'
    js.src = '//platform.docplanner.com/js/widget.js'
    document.body.appendChild(js)
  }, [])

  return (
    <div className="doctoralia-widget-wrap">
      
        id="zl-url"
        className="zl-url"
        href="https://www.doctoralia.com.mx/perfil/eva-czarina-estrada-nogales"
        rel="nofollow"
        data-zlw-doctor="eva-czarina-estrada-nogales"
        data-zlw-type="big_with_calendar"
        data-zlw-opinion="false"
        data-zlw-hide-branding="true"
        data-zlw-saas-only="true"
        data-zlw-a11y-title="Widget de reserva de citas médicas"
      >
        Reserve una cita
      </a>
    </div>
  )
}
