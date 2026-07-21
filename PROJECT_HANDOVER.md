# SAREXP B2B LOGISTICS: PROJECT HANDOVER & MASTER SPECIFICATION

Este documento sirve como el **Prompt de Inicialización Absoluto (Handover)** para que cualquier nuevo asistente de IA configure, entienda y desarrolle el ecosistema logístico de **SAREXP WORLD COURIER** y su sitio web B2B.

---

## 1. Mapeo Corporativo y Arquitectura de Marcas

Para no contaminar bases de datos ni generar alertas de cumplimiento aduanero, las empresas operan con bases separadas bajo la siguiente estructura:

```
                  ┌──────────────────────────────────────────────┐
                  │              SAREXP USA LLC                  │
                  │        (Miami Cargo Forwarder Hub)           │
                  │   Licencia TSA IAC (Voluntary Hold)          │
                  └──────────────────────┬───────────────────────┘
                                         │
                 ┌───────────────────────┴───────────────────────┐
                 ▼ (Bypass de Co-Loading)                        ▼ (Futuro Envío Directo)
    ┌──────────────────────────────┐                ┌──────────────────────────────┐
    │     SHIPAIRGLOBAL S.A.       │                │      OTRAS EMPRESAS LATAM    │
    │  (Courier Oficial Argentina) │                │     (B2B Courier / Cargas)   │
    │  Opera Licencia FM Express   │                │   (Chile, Uruguay, etc.)     │
    └──────────────────────────────┘                └──────────────────────────────┘
```

1.  **SAREXP WORLD COURIER (USA):** Compañía radicada en Miami. Es el *Hub* físico receptor de mercadería mundial (Miami Suite Warehouse). Posee los permisos para exportar carga aérea desde EE.UU. a nivel global.
2.  **SHIPAIRGLOBAL / FM EXPRESS (Argentina):** Empresa argentina autorizada bajo la licencia activa del prestador postal **FM Express S.A.** (CUIT 30-71694375-1). Es el canal de nacionalización local exclusivo para Argentina.
3.  **SAREXPRESS (Argentina):** Marca y sistema heredado (antigua licencia de Courier suspendida). **Opera estrictamente sobre el sistema antiguo** y no se mezcla bajo ninguna circunstancia con la base de datos ni los clientes de Shipairglobal o la nueva línea B2B.

---

## 2. Estatus Regulatorio y Estrategia TSA (Miami)

*   **El Problema:** La manager de seguridad (US Citizen) que sustentaba la licencia *Indirect Air Carrier (IAC)* ante la TSA renunció. Los socios fundadores tienen visas de turismo/negocios **B-1/B-2** que les prohíben legalmente fungir como oficiales de cumplimiento (*Security Coordinators*).
*   **La Solución Legal/Operativa:**
    1.  **Program Hold:** La licencia IAC de SAREXP se coloca formalmente en **Suspensión Voluntaria Temporal** ante la TSA para detener auditorías y evitar revocaciones por falta de personal idóneo.
    2.  **Operación vía Co-Loading (Co-Despacho):** El depósito de Miami sigue consolidando la carga. En lugar de entregarla directo a la aerolínea, se transfiere en sacas cerradas a un **Co-Loader mayorista** (partner con IAC activo en Miami) que realiza el escaneo reglamentario y la despacha al avión.
    3.  **Estatus Migratorio:** El hermano menor utilizará su estadía con visa B-1 para recopilar facturas y estructurar el trámite de la **Visa de Inversionista E-2**, habilitándolo en el mediano plazo a obtener su SSN de trabajo, asumir el rol de *Security Coordinator* ante la TSA y reactivar la licencia directa de SAREXP.

---

## 3. Propuesta del Sitio Web B2B (Landing Page Única)
*   **Live Demo (GitHub Pages):** `https://lucasmacgowan2-del.github.io/sarexp-b2b-web/`
*   **Repositorio GitHub:** `https://github.com/lucasmacgowan2-del/sarexp-b2b-web`

El objetivo de SAREXP es vender su capacidad de depósito, consolidación y forwarding en Miami a empresas corporativas, tiendas e-commerce y otros couriers locales en Latinoamérica (Chile, Uruguay, Paraguay, Colombia, etc.), excluyendo el canal masivo en Argentina (donde ya opera Shipairglobal).

### Estructura de la Web (Single Page):
1.  **Header (Logotipo Reconstruido):** Recreación vectorial idéntica del logo clásico de `sarexp.com` en tipografía serif (*Georgia Bold Italic*) con **SAR** en azul (`#1e3a8a`), **EXP** en rojo (`#991b1b`) y una representación translúcida del globo terráqueo como fondo del carácter "S".
2.  **Dropdown Language Switcher:** Menú selectivo desplegable (ES / EN) para un control de traducciones corporativo más flexible.
3.  **Hero Section:** Imagen real de fondo de ala de avión comercial en las nubes con superposición oscura. Contiene el eslogan B2B, puntos clave de beneficio y el **Estimador de Canal B2B Interactivo** (calculador de regímenes por peso).
4.  **Flujo Operativo en 6 Pasos (Con Imágenes HD):**
    *   *1. Recepción y Clasificación:* Banner de operario escaneando bultos en depósito.
    *   *2. Control de Daños y Devoluciones:* Banner de inspección de cajas para control de daños.
    *   *3. Reembalaje y Verificación:* Banner de re-empaque de seguridad y consolidación.
    *   *4. Recolección (Pick-up):* Banner de flota de transporte logístico.
    *   *5. Despacho Aéreo Global:* Banner de carga aérea cargando contenedores en avión en Miami (MIA).
    *   *6. Expertos en Importaciones:* Banner de firmas y documentación de aduanas.
5.  **Por Qué Elegirnos & Estadísticas:** Bloques con métricas operativas (2500m² depósito, 10k+ despachos, 18+ países, 99.8% aduana).
6.  **Formulario de Contacto B2B & Política de Privacidad:** Captura de leads corporativos sincronizados con n8n, acompañados de un enlace en el pie de página que abre un **modal popup de Política de Privacidad corporativo** (conforme a regulaciones estadounidenses e internacionales).

---

## 4. Estructura Técnica del Backend ERP (Referencia)

Si en el futuro se extiende el sistema de SAREXP hacia la base SQLite central del ERP, se debe respetar el siguiente esquema unificado:

### SQLite Schema (`fmexpress.db`):
*   `clientes`: Casilleros asignados con formato `SAG-XXXX` o `SXP-XXXX` y tarifas personalizadas (`flete_usa`, `cargo_terminal`, `handling_por_kg`).
*   `inventario`: Paquetes en depósito con tracking original, tracking interno, estado (`En Depósito`, `Hold - Falta Factura`, `Aduana`, `Liberado`) y dimensiones físicas (`largo_cm`, `ancho_cm`, `alto_cm`).
*   `empleados`: Privilegios y roles centralizados (`ADMIN`, `USA_DEPOSITO`, `USA_DESPACHO`, `EZE_RAMPA`, `ARG_REPARTO`).
*   `facturas`: Datos fiscales de facturación que emiten CAE y códigos de barra de la AFIP simulando la homologación en tiempo real.

### Webhooks de Notificaciones (n8n):
*   `WEBHOOK_EVENTOS_CARGA`: `https://auto.macgowanmaigan.site/webhook/fms-eventos-carga` (Para notificar cambios de estados por WhatsApp/Email).

---

## 5. Integración n8n Activa (Captura de Leads)
*   **Workflow Creado en n8n:** `SAREXP - B2B Leads` (ID: `pGTetOXjVhccBqhx`).
*   **Production Webhook Endpoint:** `https://auto.macgowanmaigan.site/webhook/sarexp-b2b-leads` (POST).
*   *Nota:* Para habilitar el envío de correos, se debe abrir el workflow desde el panel de n8n, seleccionar las credenciales SMTP activas en el nodo `Send Mail to Commercial`, y activarlo.

---

## 6. Despliegue en Hostinger (Plan de 50 Sitios)
Al tratarse de un sitio web estático (HTML5 / Vanilla CSS / Vanilla JS), el despliegue es inmediato y no requiere contenedores Docker ni Node.js:

1.  **Paso 1:** Conectarse al panel de administración hPanel de Hostinger.
2.  **Paso 2:** Crear el dominio/subdominio corporativo (ej. `commercial.sarexp.com` o `sarexp.com`).
3.  **Paso 3:** Subir los archivos del proyecto (`index.html`, `styles.css`, `app.js` y el archivo de configuración `.htaccess`) a la carpeta `/public_html` utilizando el administrador de archivos de Hostinger o una conexión FTP (FileZilla).
4.  **Paso 4 (Alternativa Automática):** En el panel de Hostinger, ir a la pestaña **Git**, pegar el repositorio de tu proyecto y configurar el webhook para despliegues automáticos (*Auto-Deploy*) en cada `git push` a la rama `main`.

---

## 7. Skills de Desarrollo Recomendadas para la Nueva IA
1.  **ui-ux-pro-max:** Para aplicar paletas de color con base en el color azul corporativo del logo de SAREXP sobre fondos claros/limpios, manteniendo el contraste técnico y premium.
2.  **ui-styling:** Para la maquetación responsiva del formulario B2B y las tarjetas de servicios logísticos.
3.  **docker-deployment:** En caso de que decidan en el futuro migrar la landing a un servidor VPS propio usando Easypanel.
