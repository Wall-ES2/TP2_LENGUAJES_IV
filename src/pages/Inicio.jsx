import { Link } from "react-router-dom";
import Repositorios from "../components/Repositorios";

const Inicio = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] page-surface px-4 py-10 text-slate-900 sm:px-6 md:py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1.15fr_0.85fr]">
        <section>
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase text-slate-700 sm:text-sm">
            <span className="h-px w-8 bg-slate-400" aria-hidden="true" />
            Desarrollo web · Portafolio
          </p>
          <h1 className="mb-6 max-w-2xl text-5xl font-semibold leading-tight text-slate-900 md:text-6xl lg:text-7xl">
            Ideas claras.
            <br />
            <span className="text-slate-700">Web que trabaja.</span>
          </h1>
          <p className="max-w-xl text-base leading-8 text-slate-600 md:text-lg">
            Bienvenido a mi portafolio profesional. Desarrollo aplicaciones web
            y soluciones digitales enfocadas en resolver necesidades reales.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              to="/servicios"
              className="inline-flex min-h-12 items-center rounded-2xl glass-button px-5 py-3 text-sm font-semibold text-white transition-colors  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
            >
              Conocer servicios
            </Link>
            <Link
              to="/contacto"
              className="rounded-2xl px-2 py-3 text-sm font-medium text-slate-600 transition-colors hover:text-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
            >
              Hablemos
            </Link>
          </div>
        </section>
        <aside
          className="rounded-2xl glass-panel p-6  sm:p-8"
          aria-label="Proceso de trabajo"
        >
          <p className="mb-6 text-lg font-semibold text-slate-900">
            De la idea al producto
          </p>
          <ol className="divide-y divide-slate-300/60">
            <li className="flex gap-4 py-4 text-sm text-slate-600 first:pt-0">
              <span className="font-mono text-xs text-slate-700">01</span>
              Entender el problema
            </li>
            <li className="flex gap-4 py-4 text-sm text-slate-600">
              <span className="font-mono text-xs text-slate-700">02</span>
              Construir la solución
            </li>
            <li className="flex gap-4 py-4 text-sm text-slate-600 last:pb-0">
              <span className="font-mono text-xs text-slate-700">03</span>
              Mejorar con intención
            </li>
          </ol>
          <p className="mt-5 border-t border-slate-300/60 pt-5 text-xs text-slate-500">
            Personas <span className="text-slate-700">·</span> Producto{" "}
            <span className="text-slate-700">·</span> Código
          </p>
        </aside>
      </div>
      <Repositorios />
    </main>
  );
};

export default Inicio;
