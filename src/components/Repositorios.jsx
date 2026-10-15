import { useEffect, useState } from "react";

const inputClass =
  "min-w-0 flex-1 rounded-2xl border border-slate-300/80 bg-white/60 px-4 py-3 text-slate-900 focus:outline-2 focus:outline-slate-500";
const buttonClass =
  "rounded-2xl glass-button px-5 py-3 font-semibold text-white  disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500";

function useConsulta(urlInicial) {
  const [consulta, setConsulta] = useState({ url: urlInicial });
  const [resultado, setResultado] = useState({
    estado: "cargando",
    datos: null,
    error: "",
  });

  useEffect(() => {
    const controller = new AbortController();
    let activo = true;
    const timeout = setTimeout(() => controller.abort(), 15000);
    async function cargar() {
      try {
        const respuesta = await fetch(consulta.url, {
          signal: controller.signal,
          headers: { Accept: "application/vnd.github+json" },
        });
        if (!respuesta.ok) {
          if (respuesta.status === 404)
            throw new Error("No se encontró ese usuario.");
          if ([403, 429].includes(respuesta.status))
            throw new Error(
              "Se alcanzó el límite de consultas. Intentá más tarde.",
            );
          if (respuesta.status === 422)
            throw new Error(
              "La búsqueda no es válida. Probá con otro término.",
            );
          throw new Error(
            "No se pudo completar la consulta. Volvé a intentar.",
          );
        }
        const datos = await respuesta.json();
        if (activo) setResultado({ estado: "listo", datos, error: "" });
      } catch (error) {
        if (activo)
          setResultado({
            estado: "error",
            datos: null,
            error:
              error.name === "AbortError"
                ? "La consulta tardó demasiado. Volvé a intentar."
                : error.message,
          });
      } finally {
        clearTimeout(timeout);
      }
    }
    cargar();
    return () => {
      activo = false;
      clearTimeout(timeout);
      controller.abort();
    };
  }, [consulta]);

  function consultar(url) {
    setResultado({ estado: "cargando", datos: null, error: "" });
    setConsulta({ url });
  }
  return { ...resultado, consultar };
}

function EstadoConsulta({ estado, error }) {
  return (
    <p role="status" aria-live="polite" className="my-5 text-sm text-slate-600">
      {estado === "cargando" ? "Consultando GitHub…" : error}
    </p>
  );
}

function BuscadorRepositorios() {
  const [termino, setTermino] = useState("react");
  const { estado, datos, error, consultar } = useConsulta(
    "https://api.github.com/search/repositories?q=react&sort=stars&per_page=5",
  );
  function buscar(event) {
    event.preventDefault();
    if (termino.trim())
      consultar(
        `https://api.github.com/search/repositories?q=${encodeURIComponent(termino.trim())}&sort=stars&per_page=5`,
      );
  }
  return (
    <section
      id="buscar-proyectos"
      className="glass-panel my-8 p-5 sm:p-8"
      aria-labelledby="proyectos-titulo"
      aria-busy={estado === "cargando"}
    >
      <h2 id="proyectos-titulo" className="text-3xl font-semibold text-slate-700">
        Buscador de proyectos
      </h2>
      <p className="my-4 text-slate-600">
        Buscá una tecnología y explorá los cinco repositorios con más estrellas
        entre los resultados.
      </p>
      <form onSubmit={buscar} className="max-w-2xl">
        <label htmlFor="tecnologia" className="mb-2 block text-sm">
          Tecnología o nombre del proyecto
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id="tecnologia"
            value={termino}
            onChange={(event) => setTermino(event.target.value)}
            required
            maxLength={150}
            placeholder="React, Python, bases de datos…"
            className={inputClass}
          />
          <button
            className={buttonClass}
            disabled={estado === "cargando" || !termino.trim()}
          >
            Buscar proyectos
          </button>
        </div>
      </form>
      <EstadoConsulta estado={estado} error={error} />
      {estado === "listo" && (
        <>
          <p className="mb-4 text-slate-600">
            {datos.total_count.toLocaleString("es-AR")} resultados encontrados.
            Mostrando {datos.items.length}.
          </p>
          {datos.items.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">
                  Repositorios obtenidos de GitHub
                </caption>
                <thead className="border-b border-slate-300/80 text-slate-700">
                  <tr>
                    {[
                      "Propietario",
                      "Proyecto y descripción",
                      "Lenguaje",
                      "Estrellas",
                      "Forks",
                    ].map((titulo) => (
                      <th key={titulo} scope="col" className="p-3">
                        {titulo}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {datos.items.map((repo) => (
                    <tr
                      key={repo.id}
                      className="border-b border-slate-300/60 align-top"
                    >
                      <td className="p-3">
                        <img
                          src={repo.owner.avatar_url}
                          alt={`Avatar de ${repo.owner.login}`}
                          width="48"
                          height="48"
                          className="mb-2 rounded-full"
                        />
                        <span>{repo.owner.login}</span>
                      </td>
                      <td className="min-w-56 p-3">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-slate-700 underline"
                        >
                          {repo.full_name}
                        </a>
                        <p className="mt-2 max-w-lg leading-6 text-slate-600">
                          {repo.description || "Sin descripción disponible"}
                        </p>
                      </td>
                      <td className="p-3">
                        {repo.language || "No especificado"}
                      </td>
                      <td className="p-3">
                        {repo.stargazers_count.toLocaleString("es-AR")}
                      </td>
                      <td className="p-3">
                        {repo.forks_count.toLocaleString("es-AR")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </section>
  );
}

function ConsultaPerfil() {
  const [usuario, setUsuario] = useState("torvalds");
  const { estado, datos, error, consultar } = useConsulta(
    "https://api.github.com/users/torvalds",
  );
  function buscar(event) {
    event.preventDefault();
    if (usuario.trim())
      consultar(
        `https://api.github.com/users/${encodeURIComponent(usuario.trim())}`,
      );
  }
  return (
    <section
      id="consultar-perfil"
      className="glass-panel my-8 p-5 sm:p-8"
      aria-labelledby="perfil-titulo"
      aria-busy={estado === "cargando"}
    >
      <h2
        id="perfil-titulo"
        className="text-3xl font-semibold text-slate-700"
      >
        Explorador de desarrolladores
      </h2>
      <p className="my-4 text-slate-600">
        Ingresá un usuario de GitHub para consultar su perfil público.
      </p>
      <form onSubmit={buscar} className="max-w-2xl">
        <label htmlFor="usuario-github" className="mb-2 block text-sm">
          Usuario de GitHub
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id="usuario-github"
            value={usuario}
            onChange={(event) => setUsuario(event.target.value)}
            required
            maxLength={39}
            placeholder="Ejemplo: torvalds"
            className={inputClass}
            autoCapitalize="none"
            spellCheck={false}
          />
          <button
            className={buttonClass}
            disabled={estado === "cargando" || !usuario.trim()}
          >
            Consultar perfil
          </button>
        </div>
      </form>
      <EstadoConsulta estado={estado} error={error} />
      {estado === "listo" && (
        <div className="flex flex-col items-start gap-8 sm:flex-row">
          <img
            src={datos.avatar_url}
            alt={`Avatar de ${datos.login}`}
            width="144"
            height="144"
            className="rounded-full"
          />
          <div className="min-w-0">
            <h3 className="text-2xl font-semibold">
              {datos.name || datos.login}
            </h3>
            <p className="mt-2 text-slate-600">
              {datos.bio || "Sin biografía pública"}
            </p>
            <dl className="my-5 grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
              {[
                ["Usuario", datos.login],
                ["Ubicación", datos.location || "No especificada"],
                ["Repositorios públicos", datos.public_repos],
                ["Seguidores", datos.followers],
                ["Siguiendo", datos.following],
                [
                  "Miembro desde",
                  new Date(datos.created_at).toLocaleDateString("es-AR"),
                ],
              ].map(([etiqueta, valor]) => (
                <div key={etiqueta}>
                  <dt className="text-slate-600">{etiqueta}</dt>
                  <dd className="mt-1 break-words font-medium">{valor}</dd>
                </div>
              ))}
            </dl>
            <a
              href={datos.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 underline"
            >
              Ver perfil en GitHub
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default function Repositorios() {
  return (
    <div className="mx-auto mt-6 max-w-5xl">
      <nav
        aria-label="Herramientas de desarrollo"
        className="mb-8 flex flex-wrap gap-5 text-sm text-slate-700"
      >
        <a href="#buscar-proyectos" className="underline">
          Buscar proyectos
        </a>
        <a href="#consultar-perfil" className="underline">
          Consultar desarrolladores
        </a>
      </nav>
      <BuscadorRepositorios />
      <ConsultaPerfil />

    </div>
  );
}
