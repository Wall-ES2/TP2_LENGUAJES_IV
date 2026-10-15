import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = ({ buttonText = "Enviar mensaje" }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [errores, setErrores] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({ ...currentData, [name]: value }));
    setErrores((currentErrors) => ({ ...currentErrors, [name]: "" }));
    setStatus("");
  };

  const validarFormulario = () => {
    let nuevosErrores = {};
    if (!formData.nombre.trim())
      nuevosErrores.nombre = "El nombre y apellido son obligatorios.";

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      nuevosErrores.email = "El correo electrónico es obligatorio.";
    } else if (!regexEmail.test(formData.email)) {
      nuevosErrores.email = "El formato del correo no es válido.";
    }

    if (!formData.mensaje.trim())
      nuevosErrores.mensaje = "El mensaje no puede estar vacío.";
    return nuevosErrores;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const erroresDetectados = validarFormulario();

    if (Object.keys(erroresDetectados).length > 0) {
      setErrores(erroresDetectados);
      setStatus("");
      return;
    }

    setErrores({});
    setIsSubmitting(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_dv56c9i",
        "template_8vvhd3a",
        formData,
        "MNej6Ak4dh4xJjYw2",
      );
      setStatus("¡Mensaje enviado correctamente!");
      setFormData({ nombre: "", email: "", mensaje: "" });
    } catch (error) {
      console.error("No se pudo enviar el mensaje:", error);
      setStatus("No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-busy={isSubmitting}
      className="w-full rounded-2xl glass-panel p-6  sm:p-8"
    >
      <div className="mb-4">
        <label
          htmlFor="nombre"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Nombre y Apellido
        </label>
        <input
          id="nombre"
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          autoComplete="name"
          required
          aria-invalid={Boolean(errores.nombre)}
          aria-describedby={errores.nombre ? "nombre-error" : undefined}
          className={`w-full rounded-2xl border bg-white/60 px-3 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 ${errores.nombre ? "border-red-500 focus:ring-red-500" : "border-slate-300/80 focus:border-slate-500 focus:ring-slate-400/30"}`}
          placeholder="Ej: Juan Pérez"
        />
        {errores.nombre && (
          <p id="nombre-error" className="text-red-700 text-sm mt-1">
            {errores.nombre}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Correo Electrónico
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          required
          aria-invalid={Boolean(errores.email)}
          aria-describedby={errores.email ? "email-error" : undefined}
          className={`w-full rounded-2xl border bg-white/60 px-3 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 ${errores.email ? "border-red-500 focus:ring-red-500" : "border-slate-300/80 focus:border-slate-500 focus:ring-slate-400/30"}`}
          placeholder="ejemplo@correo.com"
        />
        {errores.email && (
          <p id="email-error" className="text-red-700 text-sm mt-1">
            {errores.email}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="mensaje"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Mensaje{" "}
          <span
            id="mensaje-contador"
            className="text-xs font-normal text-slate-500"
          >
            ({formData.mensaje.length}/300)
          </span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows="4"
          maxLength={300}
          required
          aria-invalid={Boolean(errores.mensaje)}
          aria-describedby={
            errores.mensaje
              ? "mensaje-error mensaje-contador"
              : "mensaje-contador"
          }
          className={`w-full resize-y rounded-2xl border bg-white/60 px-3 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 ${errores.mensaje ? "border-red-500 focus:ring-red-500" : "border-slate-300/80 focus:border-slate-500 focus:ring-slate-400/30"}`}
          placeholder="Escribe tu mensaje aquí..."
        />
        {errores.mensaje && (
          <p id="mensaje-error" className="text-red-700 text-sm mt-1">
            {errores.mensaje}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="min-h-12 w-full rounded-2xl glass-button px-4 py-3 text-sm font-semibold text-white transition-colors  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Enviando..." : buttonText}
      </button>
      <p
        className="mt-3 min-h-5 text-sm leading-6 text-slate-600"
        role="status"
        aria-live="polite"
      >
        {status}
      </p>
    </form>
  );
};

export default ContactForm;
