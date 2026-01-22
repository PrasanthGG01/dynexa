// Data for dynamic content
const services = [
    { title: "Website Creation", description: "Custom, responsive websites that convert visitors into customers", icon: "fas fa-laptop-code" },
    { title: "SEO Optimization", description: "Boost your search rankings and organic traffic", icon: "fas fa-search" },
    { title: "Meta & Google Ads", description: "High-ROI advertising campaigns on major platforms", icon: "fas fa-bullhorn" },
    { title: "Social Media Marketing", description: "Strategic campaigns to grow your social presence", icon: "fas fa-share-alt" },
    { title: "Social Media Handling", description: "Complete management of your social media accounts", icon: "fas fa-thumbs-up" },
    { title: "Lead Generation", description: "Qualified leads that drive business growth", icon: "fas fa-users" },
    { title: "Video Editing / Reels", description: "Engaging video content that captures attention", icon: "fas fa-video" },
    { title: "Poster Making", description: "Eye-catching graphics and promotional materials", icon: "fas fa-paint-brush" },
    { title: "Email Marketing", description: "Targeted email campaigns that convert", icon: "fas fa-envelope" },
    { title: "Influencer Marketing", description: "Connect with influencers to amplify your brand", icon: "fas fa-star" },
    { title: "Ad Shoot", description: "Professional photography and videography for ads", icon: "fas fa-camera" },
    { title: "Content Creation", description: "Compelling content that tells your brand story", icon: "fas fa-pen-nib" }
];

const teamMembers = [
    { name: "Mukesh", role: "CEO & Founder", color: "#00f7ff" },
    { name: "Prasanth", role: "Marketing Director", color: "#9d00ff" },
    { name: "Sanjana", role: "Creative Head", color: "#00f7ff" },
    { name: "Preena", role: "SEO Specialist", color: "#9d00ff" },
    { name: "Kabilan", role: "Ads Manager", color: "#00f7ff" },
    { name: "Sanjay", role: "Content Strategist", color: "#9d00ff" }
];

const pricingPlans = [
    {
        name: "BASIC PLAN",
        planName: "Starter Boost",
        description: "Best for small startups & local businesses",
        features: [
            "Social Media Handling (2 platforms)",
            "12 Posts / month (Poster making)",
            "8 Stories / month",
            "Basic Hashtag + Caption",
            "Basic SEO Suggestions",
            "Monthly Report"
        ],
        bonus: {
            title: "FREE BONUS",
            text: "Profile Optimization (Instagram + Facebook)"
        },
        cta: "DM on WhatsApp for pricing",
        popular: false
    },
    {
        name: "STANDARD PLAN",
        planName: "Growth Plan",
        description: "Best for brands who want leads + growth",
        features: [
            "Social Media Handling (2–3 platforms)",
            "16 Posts / month",
            "12 Stories / month",
            "4 Reels / month (Video editing included)",
            "SEO Optimization (On-page basic)",
            "Lead Generation Setup (Meta)",
            "Meta Ads Campaign (Setup + Monitoring)",
            "Monthly Performance Report"
        ],
        bonus: {
            title: "FREE BONUS",
            text: "1 Poster Design + 1 Ad Creative Bonus"
        },
        cta: "DM on WhatsApp for pricing",
        popular: true
    },
    {
        name: "PREMIUM PLAN",
        planName: "Scale Pro",
        description: "Best for serious growth + ads + content",
        features: [
            "Website Creation (Basic 1-page / Landing page)",
            "Full SEO Optimization (On-page + Technical basic)",
            "Social Media Handling (3 platforms)",
            "20 Posts / month",
            "20 Stories / month",
            "8 Reels / month (Editing + Subtitles)",
            "Meta + Google Ads Campaign (Setup + Optimization)",
            "Lead Generation + Funnel Setup",
            "Email Marketing (2 campaigns / month)",
            "Influencer Marketing (1 collaboration support)",
            "Monthly Strategy Call + Report"
        ],
        bonus: {
            title: "FREE BONUS",
            text: "1 Ad Shoot Planning Support + Content Calendar"
        },
        cta: "DM on WhatsApp for pricing",
        popular: false
    }
];

// DOM Elements
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const servicesGrid = document.querySelector('.services-grid');
const teamGrid = document.querySelector('.team-grid');
const pricingGrid = document.querySelector('.pricing-grid');
const whatsappBtn = document.getElementById('whatsapp-btn');
const navGetStartedBtn = document.getElementById('nav-get-started');
const viewServicesBtn = document.getElementById('view-services-btn');
const contactForm = document.getElementById('contactForm');

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    // Render dynamic content
    renderServices();
    renderTeam();
    renderPricing();
    
    // Initialize event listeners
    initEventListeners();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize intersection observer for reveal animations
    initRevealAnimations();
});

// Render Services
function renderServices() {
    servicesGrid.innerHTML = '';
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card hidden';
        serviceCard.innerHTML = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
        `;
        servicesGrid.appendChild(serviceCard);
    });
}

// Render Team
function renderTeam() {
    teamGrid.innerHTML = '';
    teamMembers.forEach(member => {
        const teamCard = document.createElement('div');
        teamCard.className = 'team-card hidden';
        teamCard.innerHTML = `
            <div class="team-avatar" style="background: linear-gradient(135deg, ${member.color}, ${member.color === '#00f7ff' ? '#9d00ff' : '#00f7ff'})">
                ${member.name.charAt(0)}
            </div>
            <h3 class="team-name">${member.name}</h3>
            <p class="team-role">${member.role}</p>
        `;
        teamGrid.appendChild(teamCard);
    });
}

// Render Pricing
function renderPricing() {
    pricingGrid.innerHTML = '';
    pricingPlans.forEach(plan => {
        const pricingCard = document.createElement('div');
        pricingCard.className = `pricing-card hidden ${plan.popular ? 'popular' : ''}`;
        
        let featuresHTML = '';
        plan.features.forEach(feature => {
            featuresHTML += `<li><i class="fas fa-check"></i> ${feature}</li>`;
        });
        
        pricingCard.innerHTML = `
            ${plan.popular ? '<div class="popular-badge">Most Popular</div>' : ''}
            <h3 class="plan-name">${plan.name}</h3>
            <h4 class="plan-type">"${plan.planName}"</h4>
            <p class="plan-description">${plan.description}</p>
            <ul class="plan-features">
                ${featuresHTML}
            </ul>
            <div class="plan-bonus">
                <div class="bonus-title">${plan.bonus.title}</div>
                <div class="bonus-text">${plan.bonus.text}</div>
            </div>
            <button class="btn-primary whatsapp-pricing-btn" style="width: 100%;">
                <i class="fab fa-whatsapp"></i> ${plan.cta}
            </button>
        `;
        pricingGrid.appendChild(pricingCard);
    });
}

// Initialize Event Listeners
function initEventListeners() {
    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // WhatsApp button click
    whatsappBtn.addEventListener('click', () => {
        openWhatsApp();
    });

    // Get Started button in navbar
    navGetStartedBtn.addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });

    // View Services button
    viewServicesBtn.addEventListener('click', () => {
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    });

    // Contact form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        const whatsappMessage = `Hello Dynexa Agency!%0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
        window.open(`https://wa.me/918220851828?text=${whatsappMessage}`, '_blank');
        
        // Reset form
        contactForm.reset();
    });

    // Pricing WhatsApp buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('whatsapp-pricing-btn') || 
            e.target.closest('.whatsapp-pricing-btn')) {
            const planName = e.target.closest('.pricing-card').querySelector('.plan-name').textContent;
            const whatsappMessage = `Hello Dynexa Agency! I'm interested in the ${planName}. Can you provide more details?`;
            window.open(`https://wa.me/918220851828?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        }
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// Open WhatsApp function
function openWhatsApp(message = '') {
    const defaultMessage = 'Hello Dynexa Agency! I would like to know more about your digital marketing services.';
    const finalMessage = message || defaultMessage;
    window.open(`https://wa.me/918220851828?text=${encodeURIComponent(finalMessage)}`, '_blank');
}

// Initialize Scroll Animations
function initScrollAnimations() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize Reveal Animations with Intersection Observer
function initRevealAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all hidden elements
    document.querySelectorAll('.hidden').forEach(element => {
        observer.observe(element);
    });
}

// Add hover lift animations to cards
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes after a delay for staggered effect
    setTimeout(() => {
        const cards = document.querySelectorAll('.service-card, .team-card, .pricing-card, .feature-card, .stat-card');
        cards.forEach((card, index) => {
            card.classList.add('hidden');
            setTimeout(() => {
                card.classList.add('show');
            }, index * 100);
        });
    }, 500);
});

// Add loading animation
window.addEventListener('load', () => {
    // Add a subtle fade-in effect to the body
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.backgroundPosition = `0 ${rate}px`;
    }
});

// Add active state to nav links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: var(--accent-cyan) !important;
    }
    
    .nav-links a.active::after {
        width: 100% !important;
    }
    
    /* Additional hover effects */
    .service-card:hover .service-icon {
        transform: scale(1.1);
        transition: transform 0.3s ease;
    }
    
    .team-card:hover .team-avatar {
        transform: rotate(5deg) scale(1.05);
        transition: transform 0.3s ease;
    }
    
    .pricing-card:hover .plan-name {
        background: linear-gradient(to right, #00f7ff, #00f7ff) !important;
        -webkit-background-clip: text !important;
        background-clip: text !important;
    }
    
    /* Form focus effects */
    .form-control:focus {
        box-shadow: 0 0 0 2px rgba(0, 247, 255, 0.2);
    }
`;
document.head.appendChild(style);