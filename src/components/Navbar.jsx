import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 w-full glass-nav">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-center px-4 sm:px-6"
        aria-label="Navegación principal"
      >
        <ul className="flex items-center gap-4 sm:gap-10">
          <li>
            <NavLink
              to="/"
              end
              className="aero-nav-link"
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/servicios"
              className="aero-nav-link"
            >
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className="aero-nav-link"
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
