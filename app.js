// ==========================================================================
// SAREXP B2B LANDING PAGE - TRANSLATION DICTIONARY & CLIENT LOGIC
// ==========================================================================

// Translation Database
const translations = {
    es: {
        "nav-features": "Servicios B2B",
        "nav-pallet": "Simulador 3D",
        "nav-contact": "Contacto",
        "hero-badge": "Forwarding & Logística Miami Hub",
        "hero-title": "Conectá tu negocio con el mundo desde Miami",
        "hero-desc": "Ofrecemos consolidación, fulfillment de e-commerce y forwarding aéreo y marítimo premium para empresas en Latinoamérica. Despachá tu mercadería sin intermediarios y optimizá tu cadena logística.",
        "btn-cta": "Cotizar Carga",
        "btn-secondary": "Ver Simulador",
        "services-subtitle": "Soluciones corporativas de última milla y almacenamiento en Florida.",
        "serv1-title": "Almacenamiento & Fulfillment",
        "serv1-desc": "Freeshops y depósitos en Miami listos para recibir stock. Verificación fotográfica, re-empaque y control de calidad.",
        "serv2-title": "Consolidación & Co-Loading",
        "serv2-desc": "Minimizá costos de envío volumétrico. Agrupamos paquetes múltiples en sacas selladas listas para despacho consolidado.",
        "serv3-title": "Despacho Multimodal",
        "serv3-desc": " Forwarding aéreo y marítimo directo a puertos y terminales fiscales de destino en toda Latinoamérica.",
        "serv4-title": "Integración Tecnológica",
        "serv4-desc": "Automatización total vía webhooks y APIs. Sincronizá alertas de arribo directamente en los sistemas de tu empresa.",
        "sim-title": "Optimización de Espacio Aéreo en 3D",
        "sim-subtitle": "Comprobá cómo optimizamos tus costos de flete volumétrico estibando tus bultos en palets aéreos estandarizados.",
        "sim-lbl-type": "Tipo de Contenedor",
        "sim-lbl-qty": "Cantidad de Cajas",
        "sim-lbl-size": "Tamaño de Caja",
        "sim-btn-pack": "Estibar Contenedor",
        "contact-title": "Impulsá tu canal de importación",
        "contact-desc": "Completá tus datos corporativos. Un oficial de cuentas se pondrá en contacto para armar un tarifario personalizado según tu volumen.",
        "contact-hq": "Depósito Miami (HQ)",
        "contact-form-title": "Solicitud de Alianza B2B",
        "lbl-name": "Nombre de Contacto",
        "lbl-company": "Empresa",
        "lbl-email": "Correo Corporativo",
        "lbl-phone": "Teléfono",
        "lbl-country": "País de Destino",
        "lbl-volume": "Volumen Mensual Estimado",
        "opt-select": "— Seleccionar País —",
        "opt-chile": "Chile",
        "opt-uruguay": "Uruguay",
        "opt-paraguay": "Paraguay",
        "opt-colombia": "Colombia",
        "opt-peru": "Perú",
        "opt-other": "Otro / Global",
        "btn-submit": "Enviar Solicitud",
        "toast-success": "✓ Solicitud recibida. Un oficial de cuentas se comunicará con tu empresa en las próximas 24 horas."
    },
    en: {
        "nav-features": "B2B Services",
        "nav-pallet": "3D Simulator",
        "nav-contact": "Contact",
        "hero-badge": "Forwarding & Logistics Miami Hub",
        "hero-title": "Connect Your Business to the World via Miami",
        "hero-desc": "Premium cargo consolidation, e-commerce fulfillment, and global air/ocean forwarding tailored for companies in Latin America. Ship direct and optimize your supply chain costs.",
        "btn-cta": "Get Cargo Quote",
        "btn-secondary": "View Simulator",
        "services-subtitle": "Corporate warehousing and cargo dispatch solutions based in Florida.",
        "serv1-title": "Warehousing & Fulfillment",
        "serv1-desc": "Miami-based warehouse space ready for stock management. Digital photo verification, repacking, and quality control.",
        "serv2-title": "Consolidación & Co-Loading",
        "serv2-desc": "Minimize volumetric shipping costs. We aggregate multiple items into sealed sacks ready for consolidations.",
        "serv3-title": "Multimodal Dispatch",
        "serv3-desc": "Direct air and ocean cargo forwarding to customs terminals and fiscal depots throughout Latin America.",
        "serv4-title": "Technology Integrations",
        "serv4-desc": "Complete automation via APIs and webhooks. Sync arrival notifications directly into your ERP systems.",
        "sim-title": "3D Cargo Space Optimization",
        "sim-subtitle": "See how we optimize volumetric freight rates by securely packing your boxes into standardized air containers.",
        "sim-lbl-type": "Container Type",
        "sim-lbl-qty": "Number of Boxes",
        "sim-lbl-size": "Box Dimensions",
        "sim-btn-pack": "Calculate Stacking",
        "contact-title": "Accelerate Your Logistics Pipeline",
        "contact-desc": "Provide your corporate details. A B2B account representative will contact you with custom tariffs matching your monthly volume.",
        "contact-hq": "Miami Warehouse (HQ)",
        "contact-form-title": "B2B Partnership Inquiry",
        "lbl-name": "Contact Name",
        "lbl-company": "Company Name",
        "lbl-email": "Corporate Email",
        "lbl-phone": "Phone Number",
        "lbl-country": "Destination Country",
        "lbl-volume": "Estimated Monthly Volume",
        "opt-select": "— Select Country —",
        "opt-chile": "Chile",
        "opt-uruguay": "Uruguay",
        "opt-paraguay": "Paraguay",
        "opt-colombia": "Colombia",
        "opt-peru": "Peru",
        "opt-other": "Other / Global",
        "btn-submit": "Send Inquiry",
        "toast-success": "✓ Inquiry received. An account representative will contact your company within 24 hours."
    }
};

let currentLang = 'es';

function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    
    // Switch text inside DOM
    document.querySelectorAll('[data-trans]').forEach(el => {
        const key = el.getAttribute('data-trans');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });

    // Translate inputs/placeholders
    document.querySelectorAll('[data-placeholder]').forEach(el => {
        const key = el.getAttribute('data-placeholder');
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });

    // Update lang button text
    document.getElementById('lang-toggle-text').textContent = currentLang === 'es' ? 'EN' : 'ES';
}

// B2B Lead Form Submit Handler
function handleContactSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('lead-name').value.trim();
    const company = document.getElementById('lead-company').value.trim();
    const email = document.getElementById('lead-email').value.trim();
    const phone = document.getElementById('lead-phone').value.trim();
    const country = document.getElementById('lead-country').value;
    const volume = document.getElementById('lead-volume').value;

    if (!name || !company || !email || !phone || !country) {
        showToast(currentLang === 'es' ? 'Por favor completá los campos obligatorios.' : 'Please fill all required fields.', 'warning');
        return;
    }

    // Trigger Success Toast
    showToast(translations[currentLang]["toast-success"], 'success');
    
    // n8n Webhook connection fallback if online
    if (navigator.onLine) {
        fetch("https://auto.macgowanmaigan.site/webhook/sarexp-b2b-leads", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                source: "SAREXP B2B Website Lead",
                name,
                company,
                email,
                phone,
                country,
                volume,
                timestamp: new Date().toISOString()
            })
        }).then(res => console.log('Lead synced to n8n webhook successfully.'))
          .catch(err => console.warn('Could not sync lead online (local development / offline).', err));
    }

    // Reset Form
    document.getElementById('lead-form').reset();
}

// Custom simple Toast function
function showToast(message, type = 'info') {
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.style.position = 'fixed';
        toastContainer.style.bottom = '24px';
        toastContainer.style.right = '24px';
        toastContainer.style.zIndex = '9999';
        toastContainer.style.display = 'flex';
        toastContainer.style.flexDirection = 'column';
        toastContainer.style.gap = '10px';
        document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.style.background = type === 'success' ? '#10b981' : type === 'warning' ? '#f59e0b' : '#3b82f6';
    toast.style.color = '#ffffff';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '8px';
    toast.style.fontSize = '14px';
    toast.style.fontWeight = '700';
    toast.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    toast.style.transform = 'translateY(100px)';
    toast.style.opacity = '0';
    toast.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    toast.textContent = message;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.transform = 'translateY(0)';
        toast.style.opacity = '1';
    }, 10);

    setTimeout(() => {
        toast.style.transform = 'translateY(-20px)';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// ═══════════════════════════════════════════════════════════════════════
// CANNOT-USE-THREEJS FALLBACK: ISOMETRIC HTML5 CANVAS PALLETIZER RENDERER
// ═══════════════════════════════════════════════════════════════════════
let canvas, ctx;

function initCanvasRenderer() {
    canvas = document.getElementById('pallet-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    
    // Handle retina display crispiness
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.parentElement.clientWidth * dpr;
    canvas.height = 420 * dpr;
    canvas.style.width = canvas.parentElement.clientWidth + 'px';
    canvas.style.height = '420px';
    ctx.scale(dpr, dpr);

    drawContainerStack();
}

// Draw Isometric Cube Projection
function drawIsoCube(x, y, z, w, l, h, colorSides) {
    // Convert 3D coordinates (x, y, z) to 2D isometric projection space
    // Iso transform matrix coordinates
    const isoX = (x - y) * Math.cos(Math.PI / 6);
    const isoY = (x + y) * Math.sin(Math.PI / 6) - z;

    // Center translation
    const cx = canvas.width / (2 * (window.devicePixelRatio || 1));
    const cy = canvas.height / (2 * (window.devicePixelRatio || 1)) + 60;
    
    const px = cx + isoX;
    const py = cy + isoY;

    // Calculate delta offsets in isometric grid directions
    const dxWidth = w * Math.cos(Math.PI / 6);
    const dyWidth = w * Math.sin(Math.PI / 6);

    const dxLen = l * Math.cos(Math.PI / 6);
    const dyLen = l * Math.sin(Math.PI / 6);

    // Draw top face
    ctx.beginPath();
    ctx.moveTo(px, py - h);
    ctx.lineTo(px + dxWidth, py - dyWidth - h);
    ctx.lineTo(px + dxWidth - dxLen, py - dyWidth - dyLen - h);
    ctx.lineTo(px - dxLen, py - dyLen - h);
    ctx.closePath();
    ctx.fillStyle = colorSides[0];
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.stroke();

    // Draw left face
    ctx.beginPath();
    ctx.moveTo(px - dxLen, py - dyLen);
    ctx.lineTo(px - dxLen, py - dyLen - h);
    ctx.lineTo(px, py - h);
    ctx.lineTo(px, py);
    ctx.closePath();
    ctx.fillStyle = colorSides[1];
    ctx.fill();
    ctx.stroke();

    // Draw right face
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(px, py - h);
    ctx.lineTo(px + dxWidth, py - dyWidth - h);
    ctx.lineTo(px + dxWidth, py - dyWidth);
    ctx.closePath();
    ctx.fillStyle = colorSides[2];
    ctx.fill();
    ctx.stroke();
}

function drawContainerStack() {
    if (!ctx) return;
    
    const wLimit = canvas.width / (window.devicePixelRatio || 1);
    const hLimit = canvas.height / (window.devicePixelRatio || 1);
    ctx.clearRect(0, 0, wLimit, hLimit);

    const contType = document.getElementById('cont-type').value;
    const boxQty = parseInt(document.getElementById('box-qty').value) || 24;
    const boxSize = document.getElementById('box-size').value;

    let cWidth = 140;
    let cLength = 140;
    let cHeight = 110;

    if (contType === 'LD7') {
        cWidth = 180;
        cLength = 180;
        cHeight = 120;
    }

    // Draw Container Floor / Wireframe outline
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = 'rgba(14, 165, 233, 0.4)';
    ctx.lineWidth = 1.5;
    
    // Projected base grid
    const cx = wLimit / 2;
    const cy = hLimit / 2 + 60;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + cWidth * Math.cos(Math.PI/6), cy - cWidth * Math.sin(Math.PI/6));
    ctx.lineTo(cx + cWidth * Math.cos(Math.PI/6) - cLength * Math.cos(Math.PI/6), cy - cWidth * Math.sin(Math.PI/6) - cLength * Math.sin(Math.PI/6));
    ctx.lineTo(cx - cLength * Math.cos(Math.PI/6), cy - cLength * Math.sin(Math.PI/6));
    ctx.closePath();
    ctx.stroke();
    ctx.setLineDash([]); // Reset dash

    // Box dimensions
    let bw = 30, bl = 30, bh = 24;
    if (boxSize === 'med') {
        bw = 36; bl = 36; bh = 28;
    } else if (boxSize === 'large') {
        bw = 46; bl = 46; bh = 36;
    }

    // Render Box Stacking Layers Loop
    let boxIndex = 0;
    const padding = 2;
    
    for (let zVal = 0; zVal < cHeight - bh; zVal += bh + padding) {
        for (let yVal = 0; yVal < cLength - bl; yVal += bl + padding) {
            for (let xVal = 0; xVal < cWidth - bw; xVal += bw + padding) {
                if (boxIndex >= boxQty) break;

                // Color palette (shades of brand cyan & blues)
                const topCol = `hsl(${190 + (boxIndex % 20)}, 85%, 45%)`;
                const leftCol = `hsl(${190 + (boxIndex % 20)}, 85%, 35%)`;
                const rightCol = `hsl(${190 + (boxIndex % 20)}, 85%, 25%)`;

                drawIsoCube(xVal, yVal, zVal, bw, bl, bh, [topCol, leftCol, rightCol]);
                boxIndex++;
            }
            if (boxIndex >= boxQty) break;
        }
        if (boxIndex >= boxQty) break;
    }
}

// Window Event Listeners
window.addEventListener('load', () => {
    initCanvasRenderer();
    window.addEventListener('resize', initCanvasRenderer);
});
