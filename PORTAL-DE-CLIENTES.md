# El Portal de Clientes (portal.sarexp.com)

**Para la IA que trabaja en este repo.** Escrito el 2026-09-02.

Este archivo existe porque el portal de clientes de SAREXP **funciona hoy y tiene
clientes reales adentro**, pero su código **no está en este repo** — así que si
buscás acá, no lo vas a encontrar y vas a concluir mal. Antes de escribir una
línea sobre el portal, leé esto entero.

Este `.md` **no se sirve** al público: el `.htaccess` (bloque 5) deniega
`\.(md|py|sh|ps1|zip|...)$`. Mantenelo como `.md` en la raíz y no copies su
contenido dentro de un `.html`.

---

## 1. Lo mínimo, en cinco líneas

1. El portal vive en **https://portal.sarexp.com** y anda. No es una maqueta.
2. Su código es de **otro proyecto** (un ERP), en **otro repo** y **otro
   servidor**. Acá no está, no lo busques, no lo recrees.
3. Lo que este sitio tiene que hacer es **explicar el portal y enlazarlo**. Nada más.
4. **Las cuentas se piden por WhatsApp** (decisión del dueño, 2026-09-02), aunque
   el autoregistro técnicamente exista.
5. El portal es **compartido con otra marca del grupo** y cambia de nombre según
   el dominio. **El único dominio que se enlaza desde acá es `portal.sarexp.com`.**

---

## 2. Qué es el portal y por qué no está en este repo

`sarexp.com` es HTML/CSS/JS a mano, sin build, servido por Hostinger compartido
(Apache/LiteSpeed). El portal es otra cosa: una **aplicación con backend, base de
datos y sesiones**, que corre en un servidor propio del grupo (responde con
`Server: uvicorn`) y es parte del **ERP** — otro repo git, otro deploy, otra
gente tocándolo.

Consecuencias prácticas, sin vueltas:

- **No lo busques en este repo.** No hay carpeta `portal/`, ni API, ni base.
  `portal.html` de este repo NO es el portal (ver §8).
- **No lo clones ni lo recrees acá.** Nada de un login propio, un formulario que
  postee al portal, un proxy, ni un iframe. La sesión del portal es una **cookie
  httponly de su propio dominio**: un login hecho desde `sarexp.com` no puede
  funcionar y además rompe la seguridad del ERP.
- **Si hace falta un cambio adentro del portal** (un texto, un campo, cerrar el
  autoregistro), eso se pide en el repo del ERP. Desde acá no se toca.
- El path del repo del ERP **no se escribe en este archivo a propósito**: el
  nombre de esa carpeta contiene la marca que en este repo no se nombra (§7).
  Si necesitás saberlo, se lo preguntás al dueño.

---

## 3. Las direcciones exactas

| Qué | URL |
|---|---|
| Portal (raíz) | `https://portal.sarexp.com` — redirige (302) a la pantalla de login |
| Login | `https://portal.sarexp.com/portal/login.html` |
| Alta de cuenta | `https://portal.sarexp.com/portal/registro.html` |

Cuando enlaces desde el sitio, usá **el login**, no la raíz:
`https://portal.sarexp.com/portal/login.html`. Enlace externo, con
`target="_blank"` (y `rel="noopener"`).

---

## 4. Cómo entra un cliente

La pantalla de login ofrece **dos formas**, las dos ya implementadas:

1. **Enlace de acceso por mail** — el cliente pone su email y recibe un enlace
   que lo mete adentro **sin contraseña**. Es la opción que aparece primero: el
   botón principal dice *"Enviarme un enlace de acceso"*.
2. **Email + contraseña** — hay un botón secundario que cambia el formulario a
   contraseña.

Para describirlo en el sitio alcanza con: *"Entrás con tu email y contraseña, o
pidiendo un enlace de acceso que te llega por mail."* No inventes códigos de
cuenta, ni "credenciales que te asigna tu ejecutivo", ni recuperación por
teléfono: eso no existe.

---

## 5. Cómo se da de alta un cliente

**Lo que el sistema permite hoy:** `registro.html` es un alta abierta —
cualquiera se crea la cuenta solo con nombre, email y contraseña (empresa,
teléfono y servicio son opcionales).

**Lo que manda:** la decisión del dueño del 2026-09-02.

> **Las cuentas se piden por WhatsApp, no por un formulario de alta abierto.**
> El sitio **no** debe empujar al autoregistro ni mostrarlo como el camino
> principal.

O sea: el autoregistro existe pero **no se publicita desde sarexp.com**. En el
sitio, el camino para pedir cuenta es **WhatsApp +1 305 468 8404**
(`https://wa.me/13054688404`) o **contacto@sarexp.com**.

**No enlaces `registro.html` desde ninguna página de este sitio.** Si te piden un
botón de "registrate", eso contradice la decisión: preguntá antes de ponerlo.

Y al revés, el enlace al portal:

> **Va discreto**: es para el que YA es cliente y tiene cuenta. No un botón
> gigante de "REGISTRATE".

Lo que **sí** tiene que quedar visible y claro: **para quién es el portal y qué
se puede hacer adentro**. Eso es lo que vende.

---

## 6. Qué ve el cliente adentro (para poder describirlo sin inventar)

Esto está implementado y es real. Si algo no está en esta lista, **no lo escribas
en el sitio**:

- **Su dirección de Miami con su prefijo de casillero.** Es una sola dirección
  para todos los clientes; lo que identifica a cada uno es su **prefijo de
  tracking** (3-4 letras que asigna el sistema), que va al lado del nombre del
  destinatario. Ejemplo, para un cliente con prefijo `BISM`:

  ```
  Bismal Duran BISM
  6993 NW 82nd Ave, Suite 28
  Miami, FL 33166
  ```

- **El inventario de sus paquetes y pallets en el depósito.**
- **Fotos de control de las cajas**, cuando se pidió inspección.
- **Sus facturas.**
- **Pedir un retiro / dar instrucciones de despacho.**

Nada más. No hay tracking público, ni app, ni notificaciones, ni tiempos de
tránsito garantizados — al menos nada que esté confirmado acá.

---

## 7. La regla más dura del repo, y por qué pega justo acá

**En este sitio no se nombra a ninguna otra empresa del grupo, ni a los socios.
Ni una mención, ni en un comentario del HTML.** SAREXP sí se nombra: es la marca
de este sitio.

Con el portal esto deja de ser una regla de redacción y pasa a ser un bug
posible, porque **el portal es compartido**: el mismo backend y la misma base
atienden a dos marcas, y **la marca que ve el cliente se decide por el dominio
desde el que entró**, por **host exacto**. El nombre y el logo que se muestran
salen de una tabla de dominios; si el host no está en esa tabla, cae en una
**marca por defecto que no es SAREXP**. El HTML incluso viene con ese nombre
puesto de fábrica antes de que el JavaScript lo reemplace.

Traducido: **si enlazás el dominio equivocado, un cliente de SAREXP abre el
portal y ve el nombre de otra empresa del grupo.**

Reglas, entonces:

- **El único dominio que se enlaza desde este sitio es `portal.sarexp.com`.**
- Nunca una IP, nunca la URL interna del ERP, nunca el dominio de la otra marca,
  nunca un subdominio "de prueba". Cualquiera de esos muestra la otra marca.
- Nada de subcadenas ni dominios parecidos: la búsqueda es por host exacto.
- Y lo obvio: al describir el portal en el sitio, **no menciones que es
  compartido** ni con quién.

---

## 8. Lo que hay hoy en el sitio y está mal

Inventario al 2026-09-02, verificado archivo por archivo:

- **`portal.html` tiene un login de mentira.** Su formulario es
  `onsubmit="event.preventDefault(); alert('...tu ejecutivo de ventas te enviará
  la clave de acceso directo...')"`. No manda a ningún lado. El cliente que ya
  tiene cuenta en el portal real recibe un cartel diciéndole que espere a un
  vendedor.
- **La caja de "Tracking público" de `portal.html` también es falsa**: el botón
  "Buscar" dispara otro `alert()` con un texto inventado. No hay tracking público
  confirmado; no la conectes a nada sin preguntar.
- **En todo el sitio no hay ni una mención a `portal.sarexp.com`.** Los enlaces
  "Acceso Portal" / "INGRESAR AL PORTAL" de la barra y del cajón móvil, en las 10 paginas que llevan la barra (`terms.html`, `privacy.html` y
`cookies.html` no la tienen), apuntan todos a `portal.html`. El pie de `index.html` también
  ("Portal Clientes" → `portal.html`).
- **⚠ EL DOMINIO PROHIBIDO ESTA EN EL SITIO VIVO.** Verificado por HTTP el
  2026-09-02, no solo en el repo. Es lo mas grave de este inventario:
  - `index.html:478` — **texto visible** en "Definicion del Servicio":
    *"Salvo acuerdos especificos operados en Argentina con Shipairglobal..."*
  - `terms.html:74` — **texto visible**, la misma excepcion en los terminos.
  - `index.html:845` y `app.js:28` — el formulario de leads postea a
    `https://auto.shipairglobal.com/webhook/sarexp-b2b-leads`: el dominio queda
    expuesto en la pestaña Red del navegador de cualquiera que use el formulario.
  - `index.html` lineas 22, 56, 203 y 271 — comentarios
    `/* HEADER STYLE SHIPAIR GLOBAL (EXACT PATTERN) */` y similares.

  Las dos menciones VISIBLES pueden ser una decision del dueño y no un descuido:
  dicen algo legalmente util sobre quien nacionaliza en Argentina. **No las borres
  sin preguntarle.** Los comentarios y el webhook si son para arreglar.
- **La razon social esta escrita de cuatro formas distintas** en el propio sitio:
  `SAREXP WORLDWIDE COURIER LLC` (30 veces), `SAREXP WORLDWIDE COURIER, INC.` (24),
  `SAREXP WORLD COURIER LLC` (7) y `SAREXP WORLDWIDE COURIER LLC.` (6). LLC e INC
  son formas societarias distintas. Lo tiene que confirmar el dueño contra el
  documento societario: **no elijas una vos.**
- **La FAQ de `index.html`** manda a `sarexp.com/portal.html` a "iniciar sesión
  con tus credenciales asignadas" — describe un flujo que no existe.
- **Los botones "Solicitar Cuenta"** van a `index.html#contacto` (el formulario
  de leads que postea a n8n). El formulario puede quedar, pero **el camino para
  pedir cuenta que se comunica es WhatsApp** (§5).

Ese es el trabajo pendiente. No lo hagas de motu propio si te llamaron para otra
cosa; y cuando lo hagas, copiá exactamente la estructura del `<head>`, las clases
CSS, la barra, el pie y el tono que ya usan las páginas de servicio
(`couriers.html`, `almacenaje-miami.html`, etc.). Tiene que parecer de la misma
mano.

---

## 9. Qué podés tocar y qué no

**Sí, es tuyo:** los `.html` de este repo, `styles.css`, `app.js`, `.htaccess`,
`sitemap.xml`, `robots.txt`. Textos, layout, enlaces, SEO.

**No, no lo toques:**

- El **portal** (`portal.sarexp.com`) — código de otro repo.
- El **ERP** que está atrás, su **base de datos**, sus usuarios, sus sesiones.
- Las **cuentas de clientes reales**. Hay gente adentro. No pruebes logins, no
  crees cuentas de test, no pidas enlaces de acceso a mails ajenos.
- **Datos reales de clientes** (nombres, prefijos de casillero reales, DNI/CUIT,
  facturas, PDFs): nunca a un commit ni a una página. El `BISM` de arriba es el
  ejemplo que dio el dueño para explicar el formato — no lo publiques como si
  fuera un cliente.

---

## 10. Reglas de contenido que aplican a todo esto

- No nombrar a las otras empresas del grupo ni a los socios (§7).
- **No publicar porcentajes de impuestos ni aranceles.**
- **No inventar métricas, cifras, plazos, precios ni testimonios.** Si no está en
  este documento ni confirmado por el dueño, no existe. Nada de "más de 500
  clientes", "99% de entregas a tiempo" ni "en 24 horas".
- Ojo con `PROJECT_HANDOVER.md`: es un documento viejo, **nombra a las otras
  empresas y trae métricas inventadas** (metros cuadrados, cantidad de despachos,
  porcentajes de aduana). Es material interno y desactualizado — **no es fuente
  para el texto del sitio**.

---

## 11. `git push` acá es un deploy a producción

No hay build ni carpeta `dist/`: **los archivos del repo son el sitio**. No está
confirmado si el deploy es subida manual por hPanel/FTP o el auto-deploy de Git
de Hostinger en cada push a `main`, así que se asume lo peor.

**Commitear local, sí. Pushear, solo con OK explícito del dueño.**

Y por lo mismo: todo lo que se commitea puede terminar público. El 28/08/2026 se
descubrió un script en la raíz **con el token de la API de n8n adentro**, servido
en `https://sarexp.com/...`. De ahí salieron el `.gitignore` y el bloque 5 del
`.htaccess`. No dejes archivos que no sean el sitio en la raíz.

---

## 12. Cómo verificar que esto sigue siendo cierto

Sin abrir un navegador (la máquina del dueño no aguanta paneles):

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://portal.sarexp.com/portal/login.html    # 200
curl -s -o /dev/null -w "%{http_code}\n" https://portal.sarexp.com/portal/registro.html # 200
curl -sI https://portal.sarexp.com/                                                     # 302 -> /portal/login.html
curl -I https://sarexp.com/                                                             # cabeceras de seguridad del .htaccess
```

Si alguna de esas cambia, el portal se movió o se cerró el autoregistro: **avisá
antes de tocar textos del sitio que dependan de eso.**
