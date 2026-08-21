// ==========================================================================
// SAREXP - PONYTAIL MINIMALIST APP CONTROLLER
// ==========================================================================

// Handle Form Submission
function handleContactSubmit(event) {
    event.preventDefault();
    
    // Anti-Spam Honeypot
    const hp = document.getElementById('lead-hp');
    if (hp && hp.value) return;

    const name = document.getElementById('lead-name').value.trim();
    const company = document.getElementById('lead-company').value.trim();
    const email = document.getElementById('lead-email').value.trim();
    const phone = document.getElementById('lead-phone').value.trim();
    const country = document.getElementById('lead-country').value.trim();
    const message = document.getElementById('lead-message').value.trim();

    if (!name || !company || !email || !phone || !country) {
        showToast('Por favor completá los campos obligatorios.', 'warning');
        return;
    }

    showToast('✓ Consulta enviada. Te responderemos a la brevedad.', 'success');

    if (navigator.onLine) {
        fetch("https://auto.macgowanmaigan.site/webhook/sarexp-b2b-leads", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                source: "SAREXP Website Inquiry",
                name,
                company,
                email,
                phone,
                country,
                message,
                timestamp: new Date().toISOString()
            })
        }).then(res => console.log('Synced.'))
          .catch(err => console.warn('Sync error.', err));
    }

    document.getElementById('lead-form').reset();
}

// Simple Estimator Calculator
function calculateB2BRate() {
    const weightInput = document.getElementById('calc-weight');
    const resRegime = document.getElementById('calc-res-regime');
    const resTime = document.getElementById('calc-res-time');
    const resDesc = document.getElementById('calc-res-desc');

    if (!weightInput || !resRegime || !resTime || !resDesc) return;

    const w = parseFloat(weightInput.value) || 0;

    if (w <= 0) {
        resRegime.textContent = 'Ingresá un peso válido';
        resTime.textContent = 'Tránsito estimado: —';
        resDesc.textContent = 'Por favor ingresá los kilos de tu carga.';
        return;
    }

    if (w < 100) {
        resRegime.textContent = 'Courier / Muestras Aéreas';
        resTime.textContent = 'Tránsito estimado: ~3-5 días';
        resDesc.textContent = 'Opción ágil recomendada para paquetes pequeños o muestras.';
    } else {
        resRegime.textContent = 'Carga General Aérea / Forwarding';
        resTime.textContent = 'Tránsito estimado: ~5-7 días';
        resDesc.textContent = 'Recomendado para volúmenes comerciales o pallets consolidados.';
    }
}

// Mobile Menu Toggle
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

// Scroll To Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Cookie Consent
function acceptCookies() {
    localStorage.setItem('sarexp_cookie_consent', 'true');
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.classList.add('hidden');
}

// Toast Notifications
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
    toast.style.padding = '12px 20px';
    toast.style.borderRadius = '8px';
    toast.style.fontSize = '14px';
    toast.style.fontWeight = '700';
    toast.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => toast.remove(), 4000);
}

// Page Load Setup
window.addEventListener('load', () => {
    calculateB2BRate();

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
