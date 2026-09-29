import ContactForm from "../components/ContactForm";

const Contacto = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-950 to-slate-900 px-4 py-16 text-zinc-100 sm:px-6 md:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-16">
        <section>
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase text-purple-300 sm:text-sm">
            <span className="h-px w-8 bg-purple-400" aria-hidden="true" />
            Contacto
          </p>
          <h1 className="text-5xl font-semibold leading-tight text-zinc-100 md:text-6xl">
            Hablemos de
            <br />
            <span className="text-purple-300">tu proyecto.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-8 text-zinc-400 md:text-lg">
            Cuéntame qué necesitas y me pondré en contacto contigo.
          </p>
          <p className="mt-8 flex items-center gap-3 text-sm text-zinc-500">
            <span
              className="h-2 w-2 rounded-full bg-emerald-400"
              aria-hidden="true"
            />
            Respuesta personal y directa
          </p>
        </section>
        <ContactForm buttonText="Enviar mensaje" />
      </div>
    </main>
  );
};

export default Contacto;
