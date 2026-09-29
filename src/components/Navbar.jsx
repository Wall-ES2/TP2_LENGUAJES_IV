import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-zinc-800 bg-zinc-950/95 shadow-lg shadow-black/10 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-center px-4 sm:px-6"
        aria-label="Navegación principal"
      >
        <ul className="flex items-center gap-4 sm:gap-10">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `rounded-md px-2 py-2 text-xs font-medium transition-colors sm:px-3 sm:text-sm ${isActive ? "bg-sky-400/10 text-sky-300" : "text-zinc-400 hover:text-sky-300"}`
              }
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/servicios"
              className={({ isActive }) =>
                `rounded-md px-2 py-2 text-xs font-medium transition-colors sm:px-3 sm:text-sm ${isActive ? "bg-emerald-400/10 text-emerald-300" : "text-zinc-400 hover:text-emerald-300"}`
              }
            >
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                `rounded-md px-2 py-2 text-xs font-medium transition-colors sm:px-3 sm:text-sm ${isActive ? "bg-purple-400/10 text-purple-300" : "text-zinc-400 hover:text-purple-300"}`
              }
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
