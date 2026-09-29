import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-zinc-950 p-5 shadow-lg flex justify-center">
      <ul className="flex gap-8">
        <li>
          <Link to="/" className="text-zinc-100 hover:text-sky-500 font-medium transition-colors">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/servicios" className="text-zinc-100 hover:text-emerald-500 font-medium transition-colors">
            Servicios
          </Link>
        </li>
        <li>
          <Link to="/contacto" className="text-zinc-100 hover:text-purple-500 font-medium transition-colors">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;