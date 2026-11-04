# 🌐 Personal Portfolio - Petra Aldevand Hosyo

Selamat datang di repositori portofolio web interaktif pribadi saya! Website ini dibangun untuk menampilkan profil profesional, fondasi analitis, rekam jejak karier, serta proyek-proyek di bidang **Data Analytics**, **Machine Learning**, **Computer Vision**, dan **Network Engineering**.

🔗 **Live Website**: [https://aldevand.github.io/portofolio-website/](https://aldevand.github.io/portofolio-website/)

---

## ✨ Fitur Utama Website

* **🌍 3D Interactive Data Globe (Hero Section)**:  
  Visualisasi bola dunia 3D interaktif yang ditenagai oleh pustaka `globe.gl` dan `Three.js`, dapat diputar dan diarahkan secara bebas menggunakan mouse.
* **🌑 Modern Dark Theme (Outer Space Palette)**:  
  Desain bertema luar angkasa gelap yang bersih, elegan, dan kontras tinggi untuk kenyamanan membaca.
* **👤 A Little About Me**:  
  Bagian perkenalan personal, latar belakang akademis Sistem Informasi, minat teknologi, serta ketertarikan di dunia sepak bola & Cristiano Ronaldo.
* **💼 Professional Experience**:  
  Rekam jejak kerja riil di **Badan Pusat Statistik (BPS)** untuk Sensus Ekonomi dan audit keamanan web **OWASP Top 10** di **Kementerian PUPR**.
* **🚀 Selected Engineering Projects**:  
  Pameran proyek data tingkat lanjut, termasuk pencapaian **Global Rank #91 Kaggle LMSYS Chatbot Arena**, pipeline prediksi deret waktu (*Time-Series Forecasting*), dan *Custom Face Recognition Engine*.
* **🤖 Automated CI/CD Deployment**:  
  Terintegrasi penuh dengan **GitHub Actions** yang secara otomatis meng-compile proyek menggunakan Vite dan mempublikasikannya ke **GitHub Pages**.

---

## 🛠️ Teknologi yang Digunakan

* **Core Frontend**: HTML5 Semantik, Modern CSS3 (Flexbox & CSS Grid), Vanilla JavaScript (ES6+ Modules)
* **3D Visuals & Graphics**: `globe.gl`, `three.js`
* **Build Tooling & Dev Server**: [Vite](https://vitejs.dev/)
* **Version Control & Deployment**: Git, GitHub Actions, GitHub Pages

---

## 📁 Struktur Folder Proyek

```text
portofolio-website/
│
├── .github/
│   └── workflows/
│       └── deploy.yml      # Alur otomatisasi build & deploy ke GitHub Pages
│
├── index.html              # Kerangka utama HTML (Slide 1, Slide 2, Projects)
├── style.css               # Seluruh tata letak visual, styling kartu kaca, dan tema gelap
├── main.js                 # Logika JavaScript untuk inisialisasi & kontrol Globe 3D
│
├── vite.config.js          # Konfigurasi base path untuk routing GitHub Pages
├── package.json            # Daftar dependensi dan script build Vite
├── .gitignore              # Mengabaikan node_modules dan dist
└── README.md               # Dokumentasi proyek
```

---

## 💻 Cara Menjalankan Secara Lokal

Jika Anda ingin mengkloning dan menjalankan proyek ini di komputer lokal:

1. **Clone repositori**:
   ```bash
   git clone https://github.com/Aldevand/portofolio-website.git
   cd portofolio-website
   ```

2. **Instal dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan local development server**:
   ```bash
   npm run dev
   ```
   Buka `http://localhost:5173/` di browser Anda.

4. **Build untuk produksi**:
   ```bash
   npm run build
   ```

---

## 📬 Kontak & Profil

* **Nama**: Petra Aldevand Hosyo
* **Email**: [aldevandhosyo15@gmail.com](mailto:aldevandhosyo15@gmail.com)
* **GitHub**: [@Aldevand](https://github.com/Aldevand)
* **LinkedIn**: [Petra Aldevand Hosyo](https://www.linkedin.com)
* **Lokasi**: Manokwari, Papua Barat, Indonesia
