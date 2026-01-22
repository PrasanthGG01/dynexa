// Elements
const header = document.getElementById("header");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");
const backTop = document.getElementById("backTop");
const scrollProgress = document.getElementById("scrollProgress");
const yearEl = document.getElementById("year");

// Footer year
yearEl.textContent = new Date().getFullYear();

// Header scroll effect + back to top + progress
window.addEventListener("scroll", () => {
  const y = window.scrollY;

  if (y > 50) header.classList.add("scrolled");
  else header.classList.remove("scrolled");

  if (y > 400) backTop.classList.add("show");
  else backTop.classList.remove("show");

  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (y / docHeight) * 100 : 0;
  scrollProgress.style.width = `${progress}%`;
});

// Back to top
backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mobile menu open/close
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("show");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
});

mobileMenu.addEventListener("click", (e) => {
  if (e.target === mobileMenu) mobileMenu.classList.remove("show");
});

// Close mobile menu on link click
document.querySelectorAll(".m-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  });
});

// Smooth scroll for desktop nav links
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (!href || href === "#") return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => obs.observe(el));

// WhatsApp contact form
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const text =
`Hello Dynexa Agency!

Name: ${name}
Email: ${email}
Message: ${message}

I would like to know more about your services.`;

  window.open(`https://wa.me/918220851828?text=${encodeURIComponent(text)}`, "_blank");
  contactForm.reset();
});

// Pricing buttons WhatsApp
document.querySelectorAll(".price-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const plan = btn.getAttribute("data-plan") || "Pricing Plan";
    const text = `Hello Dynexa Agency! I'm interested in ${plan}. Can you share details & pricing?`;
    window.open(`https://wa.me/918220851828?text=${encodeURIComponent(text)}`, "_blank");
  });
});
