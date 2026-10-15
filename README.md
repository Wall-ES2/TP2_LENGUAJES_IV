# Portafolio · Lenguajes IV

Proyecto desarrollado con React y la plantilla de Vite.

## Ejecutar

Usar `npm install` y `npm run dev`. Abrir la dirección indicada por Vite con la ruta `/TP2_LENGUAJES_IV/`, base de publicación existente.

## Requisitos del trabajo práctico

- Servicios: `src/pages/Servicios.jsx` contiene un array local de objetos con número, título, descripción, tecnologías, imagen y texto alternativo. Se recorre con `map`. Las imágenes SVG se encuentran en `src/assets`.
- Inicio: `src/components/Repositorios.jsx` contiene dos secciones interactivas que consultan la API de GitHub con fetch y useEffect. El buscador de proyectos usa `/search/repositories?q=...&sort=stars&per_page=5` y muestra una tabla con avatar, propietario, nombre, descripción, lenguaje, estrellas y forks. El explorador de desarrolladores usa `/users/{usuario}` y muestra avatar, nombre, biografía, usuario, ubicación, repositorios públicos, seguidores, seguidos y fecha de registro. Ambas cargan un ejemplo al ingresar y permiten nuevas consultas mediante formularios. Incluyen carga, errores, cancelación al desmontar y tiempo máximo de espera de 15 segundos. El buscador informa cuando no hay resultados.
- Contacto: iframe de OpenStreetMap con Pueyrredón 850, Salta, Argentina como ubicación de referencia. Aparece al lado del formulario en escritorio y debajo en celulares.

La API pública de GitHub se relaciona con el desarrollo de software y permite consultar repositorios públicos sin clave. Tiene límites de consultas. No se incorporan Geolocation, History, Web Storage, File ni Drag and Drop para resolver estos requisitos. Se conserva React Router para la navegación existente.

Documentación: https://docs.github.com/en/rest/search/search#search-repositories y https://docs.github.com/en/rest/users/users#get-a-user

## Verificación

Ejecutar `npm run lint` y `npm run build`.

Revisar Inicio, Servicios y Contacto en escritorio y celular. En Inicio, buscar tecnologías distintas y consultar usuarios distintos. Probar un usuario inexistente y una búsqueda sin coincidencias. Para probar errores de conexión, desactivar Internet y enviar una consulta; recuperar la conexión y volver a enviarla. El mapa y los datos de GitHub requieren Internet.
