import ContactForm from "../components/ContactForm";

const Contacto = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 px-4 pt-20">
      <h1 className="text-4xl font-bold text-purple-500 mb-8">Contacto</h1>

      {/* 
        Instanciamos el componente hijo y le pasamos una prop. 
        Esto se usa para compartir información entre componentes. 
      */}
      <ContactForm buttonText="Enviar Mensaje" />
    </main>
  );
};

export default Contacto;
