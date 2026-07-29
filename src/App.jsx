import Nav from './components/Nav'
import Hero from './components/Hero'
import QuoteBand from './components/QuoteBand'
import About from './components/About'
import Services from './components/Services'
import Evaluations from './components/Evaluations'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <QuoteBand />
        <About />
        <Services />
        <Evaluations />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
