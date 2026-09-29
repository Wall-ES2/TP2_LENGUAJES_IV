import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-zinc-950 via-zinc-950 to-slate-900 px-4 py-16 text-zinc-100 sm:px-6 md:py-24">
      <div className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <section>
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase text-sky-300 sm:text-sm">
            <span className="h-px w-8 bg-sky-400" aria-hidden="true" />
            Desarrollo web · Portafolio
          </p>
          <h1 className="mb-6 max-w-2xl text-5xl font-semibold leading-tight text-zinc-100 md:text-6xl lg:text-7xl">
            Ideas claras.
            <br />
            <span className="text-sky-300">Web que trabaja.</span>
          </h1>
          <p className="max-w-xl text-base leading-8 text-zinc-400 md:text-lg">
            Bienvenido a mi portafolio profesional. Desarrollo aplicaciones web
            y soluciones digitales enfocadas en resolver necesidades reales.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              to="/servicios"
              className="inline-flex min-h-12 items-center rounded-md bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
            >
              Conocer servicios
            </Link>
            <Link
              to="/contacto"
              className="rounded-md px-2 py-3 text-sm font-medium text-zinc-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
            >
              Hablemos
            </Link>
          </div>
        </section>
        <aside
          className="rounded-md border border-zinc-800 bg-zinc-900/70 p-6 shadow-2xl shadow-black/20 sm:p-8"
          aria-label="Proceso de trabajo"
        >
          <p className="mb-6 text-lg font-semibold text-zinc-100">
            De la idea al producto
          </p>
          <ol className="divide-y divide-zinc-800">
            <li className="flex gap-4 py-4 text-sm text-zinc-300 first:pt-0">
              <span className="font-mono text-xs text-sky-300">01</span>
              Entender el problema
            </li>
            <li className="flex gap-4 py-4 text-sm text-zinc-300">
              <span className="font-mono text-xs text-sky-300">02</span>
              Construir la solución
            </li>
            <li className="flex gap-4 py-4 text-sm text-zinc-300 last:pb-0">
              <span className="font-mono text-xs text-sky-300">03</span>
              Mejorar con intención
            </li>
          </ol>
          <p className="mt-5 border-t border-zinc-800 pt-5 text-xs text-zinc-500">
            Personas <span className="text-sky-300">·</span> Producto{" "}
            <span className="text-sky-300">·</span> Código
          </p>
        </aside>
      </div>
    </main>
  );
};

export default Inicio;
