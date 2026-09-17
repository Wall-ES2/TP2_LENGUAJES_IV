import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { InfoCard } from './components/InfoCard'
import { NavBar } from './components/NavBar'
import { PageHeader } from './components/PageHeader'

const services = [
  {
    title: 'Diseño de interfaz',
    description: 'Se desarrollan estructuras visuales claras y funcionales para una mejor experiencia de usuario.',
    accent: '#7c3aed',
  },
  {
    title: 'Documentación',
    description: 'Se organiza la información de forma ordenada para facilitar la comprensión del proyecto.',
    accent: '#f97316',
  },
  {
    title: 'Presentación',
    description: 'Se prepara la entrega con una vista profesional y accesible para la evaluación académica.',
    accent: '#06b6d4',
  },
]

const contactItems = [
  { label: 'Email', value: 'tp.lenguajesiv@universidad.edu' },
  { label: 'Campus', value: 'Facultad de Informática' },
  { label: 'Horario', value: 'Lunes a Viernes · 9:00 a 18:00' },
]

const overviewStats = [
  { value: '3', label: 'áreas de trabajo' },
  { value: '1', label: 'proyecto académico' },
  { value: '100%', label: 'enfocado en la entrega' },
]

function HomePage() {
  return (
    <div className="page-panel">
      <PageHeader
        title="Inicio"
        description="Proyecto académico desarrollado con React para presentar las páginas principales del trabajo práctico."
      />

      <section className="hero-banner">
        <div>
          <p className="mini-label">Universidad</p>
          <h2>Lenguajes IV</h2>
          <p className="hero-copy">
            Presentación clara, moderna y organizada para mostrar el trabajo práctico con una visual profesional.
          </p>
        </div>
        <Link to="/servicios" className="primary-button">
          Ver contenido
        </Link>
      </section>

      <section className="stats-grid" aria-label="Resumen del proyecto">
        {overviewStats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>
    </div>
  )
}

function ServicesPage() {
  return (
    <div className="page-panel">
      <PageHeader
        title="Servicios"
        description="Se presentan actividades y recursos que forman parte del desarrollo del trabajo práctico universitario."
      />

      <section className="info-grid">
        {services.map((service) => (
          <InfoCard
            key={service.title}
            title={service.title}
            description={service.description}
            accent={service.accent}
          />
        ))}
      </section>
    </div>
  )
}

function ContactPage() {
  return (
    <div className="page-panel">
      <PageHeader
        title="Contacto"
        description="Datos de contacto para consultas relacionadas con el trabajo práctico y la entrega académica."
      />

      <section className="contact-panel">
        {contactItems.map((item) => (
          <div key={item.label} className="contact-item">
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </section>
    </div>
  )
}

function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <NavBar />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </main>

        <footer className="site-footer">Lenguajes IV • Trabajo Práctico 2</footer>
      </div>
    </HashRouter>
  )
}

export default App
