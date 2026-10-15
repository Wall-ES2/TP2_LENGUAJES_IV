import { Link } from "react-router-dom";
import Repositorios from "../components/Repositorios";

const Inicio = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] page-surface px-4 py-6 text-slate-900 sm:px-6 md:py-8">
      <div className="mx-auto grid max-w-5xl items-start gap-6 md:grid-cols-[1.15fr_0.85fr]">
        <section>
          <p className="mb-2 flex items-center gap-3 text-xs font-semibold uppercase text-slate-700">
            <span className="h-px w-8 bg-slate-400" aria-hidden="true" />
            Desarrollo web · Portafolio
          </p>
          <h1 className="mb-2 max-w-2xl text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            Ideas claras.
            <br />
            <span className="text-slate-700">Web que trabaja.</span>
          </h1>
          <p className="max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Bienvenido a mi portafolio profesional. Desarrollo aplicaciones web
            y soluciones digitales enfocadas en resolver necesidades reales.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-5">
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
          className="rounded-2xl glass-panel p-5 sm:p-6"
          aria-label="Proceso de trabajo"
        >
          <p className="mb-3 text-lg font-semibold text-slate-900">
            De la idea al producto
          </p>
          <ol className="divide-y divide-slate-300/60">
            <li className="flex gap-4 py-3 text-sm text-slate-600 first:pt-0">
              <span className="font-mono text-xs text-slate-700">01</span>
              Entender el problema
            </li>
            <li className="flex gap-4 py-3 text-sm text-slate-600">
              <span className="font-mono text-xs text-slate-700">02</span>
              Construir la solución
            </li>
            <li className="flex gap-4 py-3 text-sm text-slate-600 last:pb-0">
              <span className="font-mono text-xs text-slate-700">03</span>
              Mejorar con intención
            </li>
          </ol>
          <p className="mt-3 border-t border-slate-300/60 pt-3 text-xs text-slate-500">
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
