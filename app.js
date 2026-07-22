// ==========================================================================
// SAREXP B2B LANDING PAGE - LOGIC CONTROLLER (UPGRADED DESIGN WITH LOGO & MODAL)
// ==========================================================================

const translations = {
    es: {
        "nav-features": "Nuestro Servicio",
        "nav-why": "Por Qué Elegirnos",
        "nav-contact": "Contacto B2B",
        "hero-badge": "USA Cargo Forwarding & Hub",
        "hero-title": "Tu depósito y gestor de carga en Miami para el mundo",
        "hero-desc": "Recibimos, clasificamos, inspeccionamos y despachamos tu mercadería desde Miami hacia cualquier país de Latinoamérica y el mundo. Un servicio logístico corporativo transparente de punta a punta.",
        "btn-cta": "Contactar un Asesor",
        "btn-secondary": "Ver Flujo de Trabajo",
        
        // Rate Estimator
        "calc-title": "Estimador de Canal B2B",
        "calc-lbl-weight": "Peso de la Carga (KG)",
        "calc-lbl-type": "Tipo de Mercadería",
        "calc-opt-general": "Mercadería General (Electrónicos, Repuestos)",
        "calc-opt-special": "Mercadería Especial (Hazmat, Químicos)",
        "calc-btn": "Analizar Régimen de Envío",
        "calc-res-title": "Canal Recomendado",
        "calc-res-regime": "Cargando análisis...",
        "calc-res-time": "Tránsito estimado: —",
        "calc-res-desc": "Ingresá el peso de tu carga para estimar el canal de despacho óptimo.",
        
        // Workflow Steps
        "workflow-title": "Cómo Gestionamos tu Carga en Miami",
        "workflow-subtitle": "Un proceso simple, riguroso y transparente diseñado para empresas y couriers de Latinoamérica.",
        
        "step1-title": "1. Recepción y Clasificación",
        "step1-desc": "Recibimos tu mercadería en nuestro depósito de Miami y la clasificamos inmediatamente en nuestro inventario digital.",
        
        "step2-title": "2. Control de Daños y Devoluciones",
        "step2-desc": "Inspeccionamos el estado físico. Si tu mercadería llega dañada, rota o incorrecta, gestionamos la devolución al proveedor en EE.UU. por vos. Si está en óptimas condiciones, continúa el proceso.",
        
        "step3-title": "3. Reembalaje y Verificación Especial",
        "step3-desc": "Si lo solicitás, abrimos la caja para verificar contenidos, retirar embalajes innecesarios o consolidar múltiples paquetes en una sola caja para reducir el volumen y optimizar el flete.",
        
        "step4-title": "4. Recolección de Mercadería (Pick-up)",
        "step4-desc": "Si tu proveedor en EE.UU. no realiza envíos domésticos, coordinamos la recolección física de la mercadería y su traslado seguro a nuestras dependencias en Miami.",
        
        "step5-title": "5. Despacho Aéreo Global",
        "step5-desc": "Trasladamos tu carga consolidada al Aeropuerto Internacional de Miami (MIA) y coordinamos el despacho aéreo directo hacia el país de Latinoamérica o el mundo que necesites.",
        
        "step6-title": "6. Asesoría Aduanera Experta",
        "step6-desc": "Contamos con expertos en importaciones que te asisten con la documentación comercial y aduanera para garantizar un ingreso fluido de tu mercadería en el país de destino.",

        // Why choose us
        "why-title": "Logística eficiente sin complicaciones",
        "why-subtitle": "Hacemos que exportar desde EE.UU. sea tan simple como un envío local.",
        "why-item1-title": "Soporte 24/7 en tu Idioma",
        "why-item1-desc": "Atención corporativa personalizada por oficiales de cuenta especializados en comercio exterior.",
        "why-item2-title": "Especialistas en Importaciones",
        "why-item2-desc": "Te ayudamos a elegir el mejor régimen (Courier Simplificado o Carga General) según tu país y tipo de mercadería.",
        "why-item3-title": "Despacho Seguro e Inspección",
        "why-item3-desc": "Minimizamos el riesgo de recibir mercadería defectuosa en destino gracias a nuestros controles en Miami.",

        // Stats
        "stat1-text": "M² de Depósito en Miami",
        "stat2-text": "Envíos Internacionales Realizados",
        "stat3-text": "Países de Destino Activos",
        "stat4-text": "Eficiencia en Aduana",

        // Contact
        "contact-title": "Conectemos tu cadena de suministros",
        "contact-desc": "Completá tus datos de contacto corporativo. Un oficial comercial se comunicará contigo en menos de 24 horas para armar un tarifario a tu medida.",
        "contact-hq": "Miami Warehouse (HQ)",
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
        
        // Privacy Policy Modal
        "privacy-modal-title": "Política de Privacidad y Términos B2B",
        "privacy-txt-1": "En SAREXP WORLD COURIER LLC valoramos la confidencialidad de tus datos comerciales. Toda la información suministrada a través de nuestro formulario de Alianza B2B y las consultas de tarifas asociadas se procesa con encriptación de nivel bancario y de conformidad con las normativas federales de los Estados Unidos.",
        "privacy-txt-2": "Los datos capturados (nombres, teléfonos, volúmenes de carga y correos corporativos) se utilizarán exclusivamente para calificar el perfil comercial de tu empresa, emitir cotizaciones aduaneras y coordinar la logística física en nuestro depósito de Miami. SAREXP no venderá, alquilará ni distribuirá tus datos comerciales a terceros sin consentimiento explícito por escrito.",
        "privacy-btn-close": "Cerrar Documento",

        "toast-success": "✓ Solicitud recibida. Un oficial de cuentas se comunicará con tu empresa en las próximas 24 horas."
    },
    en: {
        "nav-features": "Our Service",
        "nav-why": "Why Choose Us",
        "nav-contact": "B2B Contact",
        "hero-badge": "USA Cargo Forwarding & Hub",
        "hero-title": "Your Warehouse and Cargo Manager in Miami for the World",
        "hero-desc": "We receive, classify, inspect, and ship your goods from Miami to any country in Latin America and the world. A transparent end-to-end corporate logistics service.",
        "btn-cta": "Contact an Advisor",
        "btn-secondary": "View Workflow",
        
        // Rate Estimator
        "calc-title": "B2B Channel Estimator",
        "calc-lbl-weight": "Cargo Weight (KG)",
        "calc-lbl-type": "Merchandise Type",
        "calc-opt-general": "General Merchandise (Electronics, Parts)",
        "calc-opt-special": "Hazmat / Special Cargo",
        "calc-btn": "Analyze Shipping Channel",
        "calc-res-title": "Recommended Channel",
        "calc-res-regime": "Loading analysis...",
        "calc-res-time": "Estimated transit: —",
        "calc-res-desc": "Input cargo weight to estimate the optimal shipping channel.",

        // Workflow Steps
        "workflow-title": "How We Manage Your Cargo in Miami",
        "workflow-subtitle": "A simple, rigorous, and transparent process designed for companies and couriers in Latin America.",
        
        "step1-title": "1. Reception and Classification",
        "step1-desc": "We receive your merchandise at our Miami warehouse and immediately classify it in our digital inventory.",
        
        "step2-title": "2. Damage Control & Returns",
        "step2-desc": "We inspect physical conditions. If your goods arrive damaged, broken, or incorrect, we manage the return to the US supplier for you. If it's perfect, it continues the process.",
        
        "step3-title": "3. Repacking & Special Inspection",
        "step3-desc": "At your request, we open boxes to check contents, remove unnecessary materials, or consolidate multiple packages into a single box to reduce volume and optimize freight rates.",
        
        "step4-title": "4. Cargo Pick-up Services",
        "step4-desc": "If your US supplier does not ship domestically, we coordinate the physical collection of the cargo and its secure transfer to our Miami warehouse.",
        
        "step5-title": "5. Global Air Dispatch",
        "step5-desc": "We transfer your consolidated cargo to Miami International Airport (MIA) and coordinate direct air dispatch to any country in Latin America or the world.",
        
        "step6-title": "6. Expert Import Guidance",
        "step6-desc": "We have import experts to assist you with commercial and customs documentation, ensuring smooth customs clearance in the destination country.",

        // Why choose us
        "why-title": "Hassle-Free Efficient Logistics",
        "why-subtitle": "We make exporting from the USA as simple as domestic shipping.",
        "why-item1-title": "24/7 Bilingual Support",
        "why-item1-desc": "Personalized corporate attention by account managers specialized in foreign trade.",
        "why-item2-title": "Import Specialists",
        "why-item2-desc": "We help you select the best import channel (Simplified Courier or General Cargo) based on your country and cargo type.",
        "why-item3-title": "Secure Dispatch & Inspection",
        "why-item3-desc": "We minimize the risk of receiving defective merchandise at destination through our strict warehouse checks in Miami.",

        // Stats
        "stat1-text": "M² Warehouse in Miami",
        "stat2-text": "International Shipments Dispatched",
        "stat3-text": "Active Destination Countries",
        "stat4-text": "Customs Clearance Rate",

        // Contact
        "contact-title": "Streamline Your Supply Chain",
        "contact-desc": "Provide your corporate details. A B2B account representative will contact you within 24 hours to design a customized pricing plan.",
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
        
        // Privacy Policy Modal
        "privacy-modal-title": "Privacy Policy & B2B Terms",
        "privacy-txt-1": "At SAREXP WORLD COURIER LLC we value the confidentiality of your corporate and shipping data. All information provided via our B2B Partnership form and related pricing inquiries is processed with bank-level encryption and in compliance with United States federal privacy guidelines.",
        "privacy-txt-2": "The details collected (names, phone numbers, estimated cargo volumes, and corporate emails) are utilized solely to evaluate your business profile, generate custom logistics quotes, and coordinate physical warehouse operations in Miami. SAREXP will never sell, rent, or distribute your corporate data to third parties without prior explicit written consent.",
        "privacy-btn-close": "Close Document",

        "toast-success": "✓ Inquiry received. An account representative will contact your company within 24 hours."
    }
};

let currentLang = 'es';

function changeLanguage(langVal) {
    currentLang = langVal;
    
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

    calculateB2BRate();
}

// B2B Lead Form Submit Handler
function handleContactSubmit(event) {
    event.preventDefault();
    
    // Honeypot bot protection
    const hp = document.getElementById('lead-hp');
    if (hp && hp.value) {
        console.warn('Bot submission blocked.');
        return;
    }

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
          .catch(err => console.warn('Could not sync lead online.', err));
    }

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

// B2B Rates / Channel Estimator Logic
function calculateB2BRate() {
    const weightInput = document.getElementById('calc-weight');
    const typeSelect = document.getElementById('calc-type');
    const resRegime = document.getElementById('calc-res-regime');
    const resTime = document.getElementById('calc-res-time');
    const resDesc = document.getElementById('calc-res-desc');

    if (!weightInput || !typeSelect || !resRegime || !resTime || !resDesc) return;

    const w = parseFloat(weightInput.value) || 0;
    const isSpecial = typeSelect.value === 'special';

    const resCard = resRegime.parentElement;

    if (w <= 0) {
        resRegime.textContent = currentLang === 'es' ? 'Tránsito Aéreo' : 'Air Transit';
        resTime.textContent = '—';
        resDesc.textContent = currentLang === 'es' ? 'Ingresá el peso de tu carga para estimar el canal de despacho óptimo.' : 'Input cargo weight to estimate the optimal shipping channel.';
        if (resCard) resCard.style.borderLeft = '4px solid #cbd5e1';
        return;
    }

    if (isSpecial) {
        resRegime.textContent = currentLang === 'es' ? 'Carga Aérea Especial (Hazmat)' : 'Special Air Cargo (Hazmat)';
        resTime.textContent = currentLang === 'es' ? 'Tránsito estimado: ~5-7 días' : 'Estimated transit: ~5-7 days';
        resDesc.textContent = currentLang === 'es' ? 
            'Requiere tratamiento de carga aérea reglamentada por MSDS. Documentación especial y empaque homologado incluidos.' : 
            'Requires regulated cargo treatment based on MSDS. Special documentation and certified packaging included.';
        if (resCard) resCard.style.borderLeft = '4px solid #f59e0b';
    } else if (w < 50) {
        resRegime.textContent = currentLang === 'es' ? 'Courier Simplificado Aéreo' : 'Simplified Courier Air';
        resTime.textContent = currentLang === 'es' ? 'Tránsito estimado: ~3-5 días' : 'Estimated transit: ~3-5 days';
        resDesc.textContent = currentLang === 'es' ? 
            'El método más ágil para volúmenes pequeños o muestras. Despacho directo con liberación inmediata en aeropuertos de destino.' : 
            'The fastest method for small volumes or samples. Direct dispatch with immediate release at destination airports.';
        if (resCard) resCard.style.borderLeft = '4px solid #10b981';
    } else {
        resRegime.textContent = currentLang === 'es' ? 'Carga Aérea General (Forwarding)' : 'General Air Cargo (Forwarding)';
        resTime.textContent = currentLang === 'es' ? 'Tránsito estimado: ~5-7 días' : 'Estimated transit: ~5-7 days';
        resDesc.textContent = currentLang === 'es' ? 
            'Óptimo para envíos comerciales de gran escala. Requiere destinación y clearance de despachante de aduanas.' : 
            'Optimal for large-scale commercial shipments. Requires formal declaration and customs broker clearance.';
        if (resCard) resCard.style.borderLeft = '4px solid #1e3a8a';
    }
}

// Modal open/close handlers
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Initial setup on page load
window.addEventListener('load', () => {
    changeLanguage(currentLang);
    
    // Close modal on backdrop click
    const modal = document.getElementById('privacy-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal('privacy-modal');
            }
        });
    }
});

