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

**CONFIRMADO el 20/09/2026: un `git push origin main` PUBLICA el sitio solo.**
Hostinger tiene este repo conectado con despliegue automático activo (rama
`main`, app de GitHub instalada el 13/07/2026). Se verificó con su API oficial:
`GET https://developers.hostinger.com/api/hosting/v1/accounts/{usuario}/websites/sarexp.com/git/auto-deployments/settings`
→ `is_enabled: true`. **Ojo con la trampa**: Hostinger despliega por una *app de
GitHub*, que no figura entre los webhooks del repo ni como GitHub Action; mirar
esas dos cosas hace creer que "un push no publica" (pasó el 20/09).

**Commitear local sí; pushear solo cuando el dueño dice "deploy sarexp".**
Después del push: esperar ~1 minuto y comparar las páginas en vivo contra el
repo (`Grupo-ShipAirGlobal/.claude/handoff/sarexp-servidor-leer.mjs`, solo lee).

**No usar** el endpoint "Deploy static site archive" de esa API: la doc oficial
avisa que pisa todo el contenido del sitio y no se puede deshacer.

El despliegue copia el repo ENTERO a la raíz pública, así que en el servidor
también están `.git/`, `.claude/`, los `.md` y dos sobrantes viejos
(`deploy_sarexp_lead_workflow.py`, `sarexp-b2b-web-build.zip`). El `.htaccess`
los bloquea (todos dan 403, verificado el 20/09). **No aflojar esas reglas del
`.htaccess`** y no agregar al repo nada que no pueda estar en un servidor web.

## Reglas de contenido

Las mismas del grupo (`Grupo-ShipAirGlobal/CLAUDE.md`), con **una diferencia
importante**: acá SAREXP sí se nombra — es la marca de este sitio. Lo que sigue
prohibido es lo demás: no nombrar **ShipAirGlobal / FM Express / FedEx / el
socio chino**, no publicar porcentajes impositivos, no inventar métricas ni
testimonios.

Datos reales de clientes (DNI/CUIT, PDFs de órdenes) nunca a un commit.

**No decir "somos TSA"** (regla del dueño, 17/09/2026): el programa de Indirect Air
Carrier está en hold voluntario y la carga aérea sale a través de otro agente. En
material comercial se dice que **nos especializamos en carga aérea**. Nada de
"Conformidad TSA", "TSA Compliance" ni citar el 49 CFR 1548 como propio. La
cláusula de inspección de los Términos se conserva (es consentimiento del cliente,
no una credencial nuestra) y la Política de Privacidad puede nombrar a TSA y CBP
como autoridades. Todo cambio de redacción regulatoria lo valida antes el dueño.

## La visual no se toca (directiva del dueño, 20/09/2026)

El sitio "no está mal": **se mantiene como se ve**. Acá se cambia TEXTO; no se
rediseña, no se toca `styles.css`, ni la estructura de las páginas, ni las
imágenes, salvo pedido explícito. Antes de commitear:
`git diff --name-only origin/main..HEAD` no debería listar `.css` ni imágenes.
El **logo va a cambiar** para parecerse al de Sarexpress y ya existe una versión:
no proponer logos; cuando el dueño la pase se reemplaza el archivo y se revisan
favicon, `og:image` y el pie.

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
