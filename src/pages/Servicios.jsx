const servicios = [
  {
    numero: "01",
    titulo: "Desarrollo web",
    descripcion:
      "Sitios claros, adaptables y accesibles, preparados para funcionar bien en distintos dispositivos.",
    tecnologias: "Responsive · Accesibilidad · Rendimiento",
  },
  {
    numero: "02",
    titulo: "Aplicaciones",
    descripcion:
      "Experiencias interactivas que organizan tareas y hacen más simples los procesos cotidianos.",
    tecnologias: "React · Interfaces · Integraciones",
  },
  {
    numero: "03",
    titulo: "Bases de datos",
    descripcion:
      "Información estructurada y disponible para que las aplicaciones puedan crecer de forma ordenada.",
    tecnologias: "Modelado · Consultas · APIs",
  },
];

const Servicios = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-950 to-slate-900 px-4 py-16 text-zinc-100 sm:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12 max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase text-emerald-300 sm:text-sm">
            <span className="h-px w-8 bg-emerald-400" aria-hidden="true" />
            Qué puedo hacer
          </p>
          <h1 className="text-5xl font-semibold text-emerald-400 md:text-6xl">
            Mis servicios
          </h1>
          <p className="mt-5 text-base leading-8 text-zinc-400 md:text-lg">
            Desarrollo de aplicaciones web y bases de datos, con foco en la
            necesidad detrás de cada proyecto.
          </p>
        </header>
        <div className="divide-y divide-zinc-800 border-y border-zinc-800">
          {servicios.map((servicio) => (
            <article
              key={servicio.numero}
              className="group grid gap-4 py-7 transition-colors hover:bg-zinc-900/50 sm:grid-cols-[3rem_1fr_2rem] sm:gap-6 sm:px-4"
            >
              <span className="font-mono text-xs text-emerald-300">
                {servicio.numero}
              </span>
              <div>
                <h2 className="text-xl font-semibold text-zinc-100 sm:text-2xl">
                  {servicio.titulo}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                  {servicio.descripcion}
                </p>
                <p className="mt-3 text-xs font-medium text-emerald-200 sm:text-sm">
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
