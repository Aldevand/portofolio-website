# 🚀 Personal Portfolio & Lab Belajar Web Developer

Selamat datang di project dan lingkungan belajar **Frontend Web Development** Anda! 
Project ini dirancang untuk mempelajari konsep fundamental web development secara bertahap menggunakan **HTML5 semantik**, **CSS3 modern**, dan **Vanilla JavaScript (ES6+)**.

---

## 📁 Struktur Folder Project

```text
d:\web developer\
│
├── index.html            # Kerangka semantik utama (Header, Hero, About, Skills, Projects, Contact)
├── css/
│   ├── style.css         # Styling modern, variabel CSS (Light/Dark mode), Flexbox, CSS Grid
│   └── responsive.css    # Media queries untuk tampilan HP, tablet, dan desktop
├── js/
│   ├── data.js           # Sumber data skills dan project (Clean Architecture: memisahkan data dari UI)
│   └── main.js           # Logika interaktif: Dark Mode, Filter Kategori, Form Validation, DOM manipulation
├── package.json          # Konfigurasi project & tool live-reload (Vite)
├── .gitignore            # Berkas yang diabaikan oleh Git
└── README.md             # Panduan dan materi pembelajaran ini
```

---

## ⚡ Cara Menjalankan Project (Local Development Server)

1. Buka terminal di folder project (`d:\web developer`).
2. Jalankan perintah:
   ```bash
   npm run dev
   ```
3. Terminal akan menampilkan URL lokal, biasanya:
   ```text
   http://localhost:5173/
   ```
4. Buka URL tersebut di browser (Chrome / Edge / Firefox). Setiap kali Anda mengedit file HTML, CSS, atau JS dan menyimpannya, browser akan langsung ter-update secara otomatis!

---

## 🗺️ Roadmap Belajar Frontend Kita

### Tahap 1: Fondasi HTML5 Semantik
- [x] Struktur dokumen (`<!DOCTYPE html>`, `<head>`, `<body>`)
- [x] Tag semantik modern: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- [x] Aksesibilitas (`aria-label`, atribut form `required`, `alt`)

### Tahap 2: Styling Modern dengan CSS3
- [x] CSS Variables / Custom Properties (`--bg-primary`, `--accent-primary`)
- [x] Implementasi Dark / Light Mode via CSS
- [x] Layouting modern dengan **Flexbox** (navbar, hero, tombol) dan **CSS Grid** (kartu project & skill)
- [x] Responsive Web Design (Media Queries) untuk kenyamanan di layar HP dan laptop

### Tahap 3: Interaktivitas dengan Vanilla JavaScript (ES6+)
- [x] Memilih elemen DOM (`document.getElementById`, `document.querySelectorAll`)
- [x] Event Handling (`addEventListener` untuk click, submit, scroll)
- [x] ES6 Modules (`import` dan `export` antara `data.js` dan `main.js`)
- [x] Menyimpan preferensi pengguna di browser dengan `localStorage` (Dark Mode)
- [x] Manipulasi DOM dinamis (Merender kartu project dan filter kategori tanpa refresh halaman)
- [x] Validasi input form interaktif

---

## 🛠️ Perintah Tambahan
- `npm run build` : Mengkompilasi dan memaketkan file untuk siap di-hosting (GitHub Pages / Vercel / Netlify).
- `npm run preview` : Menguji hasil build produksi secara lokal.
