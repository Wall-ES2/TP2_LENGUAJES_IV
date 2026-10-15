import reactLogo from "../assets/react-aero.svg";
import webImage from "../assets/web.svg";
import databaseImage from "../assets/database.svg";

const servicios = [
  {
    numero: "01",
    imagen: webImage,
    imagenAlt: "Ilustración de una ventana de desarrollo web",
    titulo: "Desarrollo web",
    descripcion:
      "Sitios claros, adaptables y accesibles, preparados para funcionar bien en distintos dispositivos.",
    tecnologias: "Responsive · Accesibilidad · Rendimiento",
  },
  {
    numero: "02",
    imagen: reactLogo,
    imagenAlt: "Logo de React para el desarrollo de aplicaciones",
    titulo: "Aplicaciones",
    descripcion:
      "Experiencias interactivas que organizan tareas y hacen más simples los procesos cotidianos.",
    tecnologias: "React · Interfaces · Integraciones",
  },
  {
    numero: "03",
    imagen: databaseImage,
    imagenAlt: "Ilustración de una base de datos",
    titulo: "Bases de datos",
    descripcion:
      "Información estructurada y disponible para que las aplicaciones puedan crecer de forma ordenada.",
    tecnologias: "Modelado · Consultas · APIs",
  },
];

const Servicios = () => {
  return (
    <main className="min-h-screen page-surface px-4 py-16 text-slate-900 sm:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12 max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase text-slate-700 sm:text-sm">
            <span className="h-px w-8 bg-slate-400" aria-hidden="true" />
            Qué puedo hacer
          </p>
          <h1 className="text-5xl font-semibold text-slate-700 md:text-6xl">
            Mis servicios
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
            Desarrollo de aplicaciones web y bases de datos, con foco en la
            necesidad detrás de cada proyecto.
          </p>
        </header>
        <div className="glass-panel divide-y divide-slate-300/60 ">
          {servicios.map((servicio) => (
            <article
              key={servicio.numero}
              className="group grid gap-4 py-7 transition-colors hover:bg-white/50 sm:grid-cols-[3rem_5rem_1fr] sm:gap-6 sm:px-4 rounded-2xl "
            >
              <span className="font-mono text-xs text-slate-700">
                {servicio.numero}
              </span>
              <div className="aero-service-icon">
                <img
                  src={servicio.imagen}
                  alt={servicio.imagenAlt}
                  width="80"
                  height="80"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                  {servicio.titulo}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  {servicio.descripcion}
                </p>
                <p className="mt-3 text-xs font-medium text-slate-700 sm:text-sm">
                  {servicio.tecnologias}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Servicios;
