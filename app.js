// ==========================================================================
// SAREXP LOGISTICS - APP CONTROLLER
// ==========================================================================

let currentLang = 'es';

const translations = {
    es: {
        "nav-features": "Nuestros Servicios",
        "nav-why": "Por Qué Elegirnos",
        "nav-contact": "Contacto Comercial",
        "hero-badge": "Freight Forwarder & Cargo Hub Miami",
        "hero-title": "Tu depósito y gestor de carga en Miami para el mundo",
        "hero-desc": "Recibimos, clasificamos, inspeccionamos, consolidamos y despachamos tu mercadería desde nuestro depósito en Miami hacia tu país. Un servicio logístico internacional transparente de principio a fin.",
        
        // Rate Estimator
        "calc-title": "Estimador de Canal de Envío",
        "calc-lbl-weight": "Peso de la Carga (KG)",
        "calc-lbl-type": "Tipo de Mercadería",
        "calc-opt-general": "Mercadería General (Electrónicos, Repuestos, Indumentaria)",
        "calc-opt-special": "Mercadería Especial (Hazmat, Químicos, Baterías)",
        "calc-res-title": "Canal Recomendado",
        
        // Workflow Steps
        "workflow-title": "Cómo Gestionamos tu Mercadería en Miami",
        "workflow-subtitle": "Un proceso logístico transparente y estructurado para empresas, tiendas e importadores.",
        
        "step1-title": "1. Recepción y Almacenaje",
        "step1-desc": "Recibimos tus compras o cargas en nuestro depósito de Miami (6993 NW 82nd Ave, Suite 28, Doral), las verificamos e ingresamos a inventario.",
        
        "step2-title": "2. Control e Inspección en Origen",
        "step2-desc": "Inspeccionamos el estado físico. Si la mercadería llega dañada o incorrecta, coordinamos la devolución al proveedor en EE.UU. (gestionado bajo consulta).",
        
        "step3-title": "3. Reembalaje y Consolidación",
        "step3-desc": "A tu solicitud, agrupamos múltiples paquetes en un solo envío y retiramos cajas innecesarias para reducir el volumen y optimizar el costo del flete.",
        
        "step4-title": "4. Recolección Doméstica (Pick-up)",
        "step4-desc": "Si tu proveedor en EE.UU. no entrega en Miami, coordinamos la recolección física de la carga y su traslado a nuestro hub (servicio bajo consulta previa).",
        
        "step5-title": "5. Despacho Internacional Multicanal",
        "step5-desc": "Enviamos tu carga vía fletes aéreos/marítimos consolidados o mediante convenios express con FedEx, UPS o DHL según tu requerimiento de velocidad y costo.",
        
        "step6-title": "6. Arribo a Destino & Despacho Local",
        "step6-desc": "Entregamos la carga en el puerto/aeropuerto de destino o vía courier express. La nacionalización y trámites aduaneros son gestionados por el comprador o su despachante local.",
        
        // Contact
        "contact-title": "Cotizá tu Envío o Almacenaje en Miami",
        "contact-desc": "Completá el formulario o comunicate directamente por WhatsApp. Te responderemos a la brevedad con tarifarios a medida.",
        "contact-form-title": "Consulta de Tarifas & Carga",
        "lbl-name": "Nombre de Contacto",
        "lbl-company": "Empresa / Nombre Comercial",
        "lbl-email": "Correo Corporativo",
        "lbl-phone": "Teléfono / WhatsApp",
        "lbl-country": "País de Destino",
        "lbl-volume": "Frecuencia / Volumen Estimado",
        "opt-select": "— Seleccionar País —",
        "opt-chile": "Chile",
        "opt-uruguay": "Uruguay",
        "opt-paraguay": "Paraguay",
        "opt-colombia": "Colombia",
        "opt-peru": "Perú",
        "opt-other": "Otro País / Global",
        "btn-submit": "Enviar Consulta Comercial",
        
        "toast-success": "✓ Consulta enviada con éxito. Un oficial comercial se comunicará a la brevedad."
    },
    en: {
        "nav-features": "Our Services",
        "nav-why": "Why Choose Us",
        "nav-contact": "Contact Us",
        "hero-badge": "Freight Forwarder & Cargo Hub Miami",
        "hero-title": "Your Miami Warehouse and Cargo Manager for the World",
        "hero-desc": "We receive, classify, inspect, consolidate, and ship your merchandise from our Miami warehouse to your destination country. A transparent international logistics service.",
        
        // Rate Estimator
        "calc-title": "Shipping Channel Estimator",
        "calc-lbl-weight": "Cargo Weight (KG)",
        "calc-lbl-type": "Merchandise Type",
        "calc-opt-general": "General Cargo (Electronics, Spare Parts, Apparel)",
        "calc-opt-special": "Special Cargo (Hazmat, Chemicals, Batteries)",
        "calc-res-title": "Recommended Channel",
        
        // Workflow Steps
        "workflow-title": "How We Manage Your Cargo in Miami",
        "workflow-subtitle": "A transparent, structured logistics workflow for businesses and importers.",
        
        "step1-title": "1. Reception & Warehousing",
        "step1-desc": "We receive your cargo at our Miami warehouse (6993 NW 82nd Ave, Suite 28, Doral), verify packages, and register them into inventory.",
        
        "step2-title": "2. Origin Inspection & Quality Check",
        "step2-desc": "We check physical conditions. If items arrive damaged or incorrect, we coordinate US supplier returns (managed upon consultation).",
        
        "step3-title": "3. Repacking & Consolidation",
        "step3-desc": "Upon request, we combine multiple packages into a single shipment and remove excess boxes to minimize volumetric weight and freight costs.",
        
        "step4-title": "4. US Domestic Pick-up",
        "step4-desc": "If your US supplier does not deliver to Miami, we arrange physical cargo collection and transfer to our hub (service upon prior consultation).",
        
        "step5-title": "5. Multichannel Global Dispatch",
        "step5-desc": "We ship via air/ocean consolidated freight or express carrier accounts (FedEx, UPS, DHL) based on your budget and transit time needs.",
        
        "step6-title": "6. Destination Arrival & Clearance",
        "step6-desc": "We deliver cargo to destination port/airport or via express courier. Customs clearance and local import taxes are handled by the buyer or local broker.",
        
        // Contact
        "contact-title": "Request Storage & Shipping Rates",
        "contact-desc": "Fill out the form or contact us on WhatsApp for a custom rate proposal.",
        "contact-form-title": "Cargo Rate Inquiry",
        "lbl-name": "Contact Name",
        "lbl-company": "Company Name",
        "lbl-email": "Corporate Email",
        "lbl-phone": "Phone / WhatsApp",
        "lbl-country": "Destination Country",
        "lbl-volume": "Estimated Volume / Frequency",
        "opt-select": "— Select Country —",
        "opt-chile": "Chile",
        "opt-uruguay": "Uruguay",
        "opt-paraguay": "Paraguay",
        "opt-colombia": "Colombia",
        "opt-peru": "Peru",
        "opt-other": "Other Country / Global",
        "btn-submit": "Submit Rate Inquiry",
        
        "toast-success": "✓ Inquiry sent successfully. A commercial representative will contact you shortly."
    }
};

// Switch Language
function changeLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    
    document.querySelectorAll('[data-trans]').forEach(el => {
        const key = el.getAttribute('data-trans');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    calculateB2BRate();
}

// Handle Form Submission
function handleContactSubmit(event) {
    event.preventDefault();
    
    // Anti-Spam Honeypot
    const hp = document.getElementById('lead-hp');
    if (hp && hp.value) {
        console.warn('Bot detected.');
        return;
    }

    const name = document.getElementById('lead-name').value.trim();
    const company = document.getElementById('lead-company').value.trim();
    const email = document.getElementById('lead-email').value.trim();
    const phone = document.getElementById('lead-phone').value.trim();
    const country = document.getElementById('lead-country').value;
    const volume = document.getElementById('lead-volume').value;

    if (!name || !company || !email || !phone || !country) {
        showToast(currentLang === 'es' ? 'Por favor completá los campos requeridos.' : 'Please fill all required fields.', 'warning');
        return;
    }

    showToast(translations[currentLang]["toast-success"], 'success');
    
    if (navigator.onLine) {
        fetch("https://auto.macgowanmaigan.site/webhook/sarexp-b2b-leads", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                source: "SAREXP Website Lead",
                name,
                company,
                email,
                phone,
                country,
                volume,
                timestamp: new Date().toISOString()
            })
        }).then(res => console.log('Lead synced to n8n.'))
          .catch(err => console.warn('Sync failed.', err));
    }

    document.getElementById('lead-form').reset();
}

// Rate Estimator Calculator
function calculateB2BRate() {
    const weightInput = document.getElementById('calc-weight');
    const typeSelect = document.getElementById('calc-type');
    const resRegime = document.getElementById('calc-res-regime');
    const resTime = document.getElementById('calc-res-time');
    const resDesc = document.getElementById('calc-res-desc');

    if (!weightInput || !typeSelect || !resRegime || !resTime || !resDesc) return;

    const w = parseFloat(weightInput.value) || 0;
    const isSpecial = typeSelect.value === 'special';

    if (w <= 0) {
        resRegime.textContent = currentLang === 'es' ? 'Ingresá un peso válido' : 'Enter a valid weight';
        resTime.textContent = 'Tránsito estimado: —';
        resDesc.textContent = currentLang === 'es' ? 'Por favor ingresá los kilos de tu carga.' : 'Please enter cargo weight in KG.';
        return;
    }

    if (w < 100 && !isSpecial) {
        resRegime.textContent = currentLang === 'es' ? 'Courier / Muestras Aéreas' : 'Courier / Air Samples';
        resTime.textContent = currentLang === 'es' ? 'Tránsito estimado: ~3-5 días' : 'Estimated transit: ~3-5 days';
        resDesc.textContent = currentLang === 'es' ? 
            'Opción ideal para pequeñas muestras o paquetes frecuentes. Envío ágil directo a destino.' : 
            'Ideal for small samples or frequent packages. Fast shipping to destination.';
    } else {
        resRegime.textContent = currentLang === 'es' ? 'Carga General Aérea / Forwarding' : 'General Air Freight / Forwarding';
        resTime.textContent = currentLang === 'es' ? 'Tránsito estimado: ~5-7 días' : 'Estimated transit: ~5-7 days';
        resDesc.textContent = currentLang === 'es' ? 
            'Recomendado para volúmenes comerciales o pallets. Despacho consolidado directo desde Miami.' : 
            'Recommended for commercial volumes or pallets. Consolidated shipping directly from Miami.';
    }
}

// Mobile Menu Control
function toggleMobileMenu() {
    const nav = document.getElementById('main-nav');
    const icon = document.getElementById('toggle-icon');
    if (nav) {
        nav.classList.toggle('active');
        if (icon) {
            icon.className = nav.classList.contains('active') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
        }
    }
}

function closeMobileMenu() {
    const nav = document.getElementById('main-nav');
    const icon = document.getElementById('toggle-icon');
    if (nav && nav.classList.contains('active')) {
        nav.classList.remove('active');
        if (icon) icon.className = 'fa-solid fa-bars';
    }
}

// Scroll to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Cookie Consent
function acceptCookies() {
    localStorage.setItem('sarexp_cookie_consent', 'true');
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.classList.add('hidden');
}

// Simple Toast Notification
function showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.style.position = 'fixed';
        container.style.bottom = '24px';
        container.style.right = '24px';
        container.style.zIndex = '9999';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.gap = '10px';
        document.body.appendChild(container);
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

    container.appendChild(toast);

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

// Initialization
window.addEventListener('load', () => {
    changeLanguage(currentLang);

    if (localStorage.getItem('sarexp_cookie_consent') === 'true') {
        const banner = document.getElementById('cookie-banner');
        if (banner) banner.classList.add('hidden');
    }

    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            if (scrollTopBtn) scrollTopBtn.classList.add('visible');
        } else {
            if (scrollTopBtn) scrollTopBtn.classList.remove('visible');
        }
    });
});
