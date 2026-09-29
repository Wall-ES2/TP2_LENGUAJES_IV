import { useState } from "react";
import emailjs from "@emailjs/browser";

// Recibimos "buttonText" como prop para hacer el componente reutilizable
const ContactForm = ({ buttonText }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [errores, setErrores] = useState({});

  // Por convención, los manejadores de eventos se nombran con el prefijo handle seguido del nombre del evento.
  const handleChange = (event) => {
    // Para capturar lo que el usuario escribe, usamos event.target, que es el elemento del DOM que disparó el evento.
    const { name, value } = event.target;

    if (name === "mensaje" && value.length > 300) return;

    setFormData({
      ...formData,
      [name]: value,
    });
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

  const handleSubmit = (event) => {
    // Implementamos event.preventDefault(), que es una función para prevenir el comportamiento por defecto del navegador.
    event.preventDefault();

    const erroresDetectados = validarFormulario();

    if (Object.keys(erroresDetectados).length > 0) {
      setErrores(erroresDetectados);
    } else {
      setErrores({});

      emailjs
        .send(
          "service_dv56c9i",
          "template_8vvhd3a",
          formData,
          "MNej6Ak4dh4xJjYw2",
        )
        .then(() => {
          alert("¡Mensaje enviado exitosamente a tu correo!");
          setFormData({ nombre: "", email: "", mensaje: "" });
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Hubo un error al procesar el envío de tu mensaje.");
        });
    }
  };

  return (
    <form
      // Se pasa una función como manejador, no un string!![cite: 5].
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-zinc-800 p-8 rounded-xl shadow-lg"
    >
      <div className="mb-4">
        <label className="block text-zinc-300 font-medium mb-2">
          Nombre y Apellido
        </label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          // Usamos onChange para rastrear cambios en inputs, textarea[cite: 5].
          onChange={handleChange}
          className={`w-full p-3 rounded bg-zinc-900 text-zinc-100 border focus:outline-none focus:ring-2 ${errores.nombre ? "border-red-500 focus:ring-red-500" : "border-zinc-700 focus:ring-purple-500"}`}
          placeholder="Ej: Juan Pérez"
        />
        {errores.nombre && (
          <p className="text-red-500 text-sm mt-1">{errores.nombre}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-zinc-300 font-medium mb-2">
          Correo Electrónico
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-3 rounded bg-zinc-900 text-zinc-100 border focus:outline-none focus:ring-2 ${errores.email ? "border-red-500 focus:ring-red-500" : "border-zinc-700 focus:ring-purple-500"}`}
          placeholder="ejemplo@correo.com"
        />
        {errores.email && (
          <p className="text-red-500 text-sm mt-1">{errores.email}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-zinc-300 font-medium mb-2">
          Mensaje{" "}
          <span className="text-sm font-normal text-zinc-500">
            ({formData.mensaje.length}/300)
          </span>
        </label>
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows="4"
          className={`w-full p-3 rounded bg-zinc-900 text-zinc-100 border focus:outline-none focus:ring-2 resize-none ${errores.mensaje ? "border-red-500 focus:ring-red-500" : "border-zinc-700 focus:ring-purple-500"}`}
          placeholder="Escribe tu mensaje aquí..."
        ></textarea>
        {errores.mensaje && (
          <p className="text-red-500 text-sm mt-1">{errores.mensaje}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-4 rounded transition-colors"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default ContactForm;
