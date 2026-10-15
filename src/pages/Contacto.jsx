import ContactForm from "../components/ContactForm";

const Contacto = () => {
  return (
    <main className="min-h-screen page-surface px-4 py-16 text-slate-900 sm:px-6 md:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-16">
        <section>
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase text-slate-700 sm:text-sm">
            <span className="h-px w-8 bg-slate-400" aria-hidden="true" />
            Contacto
          </p>
          <h1 className="text-5xl font-semibold leading-tight text-slate-900 md:text-6xl">
            Hablemos de
            <br />
            <span className="text-slate-700">tu proyecto.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-8 text-slate-600 md:text-lg">
            Cuéntame qué necesitas y me pondré en contacto contigo.
          </p>
          <p className="mt-8 flex items-center gap-3 text-sm text-slate-500">
            <span
              className="h-2 w-2 rounded-full bg-slate-400"
              aria-hidden="true"
            />
            Respuesta personal y directa
          </p>
        </section>
        <div className="md:col-span-2 grid items-start gap-8 md:grid-cols-2">
          <ContactForm buttonText="Enviar mensaje" />
          <section className="min-w-0 overflow-hidden rounded-2xl glass-panel" aria-labelledby="ubicacion-titulo">
            <div className="p-6">
              <h2 id="ubicacion-titulo" className="text-xl font-semibold text-slate-700">Ubicación de referencia</h2>
              <p className="mt-2 text-sm text-slate-600">Salta, Argentina.</p>
            </div>
            <iframe title="Mapa de Pueyrredón 850, Salta, Argentina" src="https://www.openstreetmap.org/export/embed.html?bbox=-65.420%2C-24.792%2C-65.390%2C-24.772&layer=mapnik" width="600" height="380" loading="lazy" referrerPolicy="no-referrer" className="block h-96 w-full border-0" />
          </section>
        </div>
      </div>

    </main>
  );
};

export default Contacto;
