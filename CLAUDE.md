# Sarexp B2B Web (sarexp.com)

Sitio B2B de **SAREXP WORLD COURIER LLC** — la empresa de USA que hoy es la
única del grupo que puede cortar guías de verdad (tiene el TSA vigente;
ShipAirGlobal todavía no). Vive fuera del monorepo, en su propio repo
(`sarexp-b2b-web` en GitHub), pero está conectado: su grafo se fusiona con el de
`C:\Dev\Proyectos\Grupo-ShipAirGlobal` y comparte las reglas de negocio de ahí.

| | |
|---|---|
| **Stack** | HTML/CSS/JS a mano — **sin build, sin framework, sin node_modules** |
| **Hosting** | Hostinger compartido (LiteSpeed), misma cuenta que shipairglobal.com |
| **Ruta en el server** | `/home/u807799765/domains/sarexp.com/public_html` |
| **Formulario de leads** | postea a n8n (ver `app.js`) |
| **Analytics** | GA4, declarado en `cookies.html` y `privacy.html` |

## ⚠️ Antes de pushear: acá el repo ES el sitio

No hay build ni carpeta `dist/`: los archivos del repo son los que se sirven.
El `PROJECT_HANDOVER.md` dice que el deploy puede ser **subida manual por
hPanel/FTP** o el **auto-deploy de Git de Hostinger** en cada push a `main`, y
**no está confirmado cuál de los dos está activo**. El 28/08/2026 se comprobó
que el sitio vivo coincide byte a byte con el repo y que `main` está al día con
`origin/main` — consistente con las dos hipótesis.

**Hasta que se confirme: tratar `git push` como un deploy a producción.**
Commitear local sí; pushear solo con OK explícito del dueño, mismo criterio que
la web de ShipAirGlobal.

Para confirmarlo alcanza con mirar hPanel → Hosting → sarexp.com → pestaña
**Git**: si hay un repo conectado con Auto-Deploy, es la segunda.

## Reglas de contenido

Las mismas del grupo (`Grupo-ShipAirGlobal/CLAUDE.md`), con **una diferencia
importante**: acá SAREXP sí se nombra — es la marca de este sitio. Lo que sigue
prohibido es lo demás: no nombrar **ShipAirGlobal / FM Express / FedEx / el
socio chino**, no publicar porcentajes impositivos, no inventar métricas ni
testimonios.

Datos reales de clientes (DNI/CUIT, PDFs de órdenes) nunca a un commit.

## Cabeceras de seguridad

El `.htaccess` las manda desde el 28/08/2026 (nosniff, X-Frame-Options, HSTS,
Referrer-Policy, Permissions-Policy). Dos cosas para no romper esto:

- Van envueltas en `<IfModule mod_headers.c>` **a propósito**: sin el módulo, un
  `Header set` suelto tira 500 y se cae el sitio entero.
- **No hay `Content-Security-Policy`**, y no se agrega a ciegas: una CSP mal
  puesta rompe GA4, las fuentes o el formulario de leads de formas que solo se
  ven abriendo el sitio en un navegador. Eso necesita ojos humanos.

Verificar en vivo con: `curl -I https://sarexp.com/`

## graphify

Grafo de conocimiento en `graphify-out/`. Para preguntas sobre el código,
primero `graphify query "<pregunta>"` (subgrafo acotado); `graphify path
"<A>" "<B>"` para relaciones y `graphify explain "<concepto>"` para un concepto.
`graphify-out/GRAPH_REPORT.md` solo para revisión de arquitectura amplia. El
código se re-indexa solo (`graphify update .`, AST, sin costo de API). Nunca
`graphify update --force`.
