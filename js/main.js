/**
 * main.js - Logika Interaktif Frontend
 * Mempelajari: DOM Selection, Event Handling, Modular JS, LocalStorage, dan Dynamic Rendering
 */
import { skillsData, projectsData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderSkills();
  renderProjects(projectsData);
  initProjectFilters();
  initMobileMenu();
  initContactForm();
  initScrollEffects();
});

/* ==========================================================================
   1. Theme Switcher (Dark / Light Mode dengan LocalStorage)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(themeToggle, currentTheme);

  themeToggle.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(themeToggle, newTheme);
  });
}

function updateThemeIcon(button, theme) {
  button.innerHTML = theme === 'dark' ? '☀️' : '🌙';
  button.setAttribute('aria-label', theme === 'dark' ? 'Ganti ke Light Mode' : 'Ganti ke Dark Mode');
}

/* ==========================================================================
   2. Render Skills Secara Dinamis
   ========================================================================== */
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = skillsData.map(skill => `
    <article class="skill-card">
      <div class="skill-header">
        <div class="skill-icon">${skill.icon}</div>
        <h3 class="skill-title">${skill.name}</h3>
      </div>
      <p class="skill-desc">${skill.desc}</p>
      <div class="skill-progress-bar">
        <div class="skill-progress-fill" style="width: ${skill.level}"></div>
      </div>
    </article>
  `).join('');
}

/* ==========================================================================
   3. Render & Filter Projects
   ========================================================================== */
function renderProjects(projects) {
  const container = document.getElementById('projects-container');
  if (!container) return;

  if (projects.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">Tidak ada project dalam kategori ini.</p>`;
    return;
  }

  container.innerHTML = projects.map(proj => `
    <article class="project-card">
      <div class="project-preview">
        <span>💻</span>
        <span class="project-tag">${proj.badge}</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.desc}</p>
        <div class="project-tech">
          ${proj.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${proj.demoUrl}" class="project-link" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
          <a href="${proj.githubUrl}" class="project-link" target="_blank" rel="noopener noreferrer">Source Code ↗</a>
        </div>
      </div>
    </article>
  `).join('');
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      if (filterValue === 'all') {
        renderProjects(projectsData);
      } else {
        const filtered = projectsData.filter(item => item.category === filterValue);
        renderProjects(filtered);
      }
    });
  });
}

/* ==========================================================================
   4. Mobile Menu (Hamburger)
   ========================================================================== */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Tutup menu saat salah satu link diklik di HP
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

/* ==========================================================================
   5. Interactive Contact Form
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const message = form.elements['message'].value.trim();

    if (!name || !email || !message) {
      alert('Harap isi semua kolom formulir.');
      return;
    }

    // Tampilkan notifikasi berhasil
    feedback.textContent = `Terima kasih, ${name}! Pesan Anda berhasil dikirim (simulasi frontend).`;
    feedback.className = 'form-feedback success';
    form.reset();

    setTimeout(() => {
      feedback.style.display = 'none';
      feedback.className = 'form-feedback';
    }, 5000);
  });
}

/* ==========================================================================
   6. Scroll Effects (Back to Top & Active Nav Highlighting)
   ========================================================================== */
function initScrollEffects() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}
