import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/contacto', label: 'Contacto' },
]

export function NavBar() {
  return (
    <header className="site-header">
      <div className="brand-wrap">
        <div className="brand-mark">TP</div>
        <span className="brand-name">Trabajo Práctico 2</span>
      </div>

      <nav className="main-nav" aria-label="Navegación principal">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
