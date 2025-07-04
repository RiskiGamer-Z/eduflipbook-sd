# 📋 Panduan Instalasi Flipbook Pembelajaran SD

Panduan lengkap untuk menginstal, mengatur, dan mengkustomisasi sistem flipbook pembelajaran SD.

## 🚀 Instalasi Cepat

### Langkah 1: Download dan Extract
```bash
# Download file zip dari Gumroad
# Extract ke folder yang diinginkan
unzip flipbook-pembelajaran-sd.zip
cd flipbook-pembelajaran-sd
```

### Langkah 2: Buka di Browser
```bash
# Cara 1: Buka langsung
# Double click file index.html

# Cara 2: Menggunakan server lokal (direkomendasikan)
python -m http.server 8000
# Buka http://localhost:8000 di browser
```

### Langkah 3: Verifikasi Instalasi
- ✅ Halaman welcome muncul
- ✅ Menu sidebar berfungsi
- ✅ Navigasi halaman bekerja
- ✅ Quiz interaktif berjalan

## 🔧 Setup Lanjutan

### Menggunakan Live Server (VS Code)
1. Install extension "Live Server" di VS Code
2. Buka folder project
3. Klik kanan pada `index.html`
4. Pilih "Open with Live Server"

### Menggunakan XAMPP/WAMP
1. Copy folder project ke `htdocs` (XAMPP) atau `www` (WAMP)
2. Start Apache server
3. Buka `http://localhost/flipbook-pembelajaran-sd`

### Menggunakan Node.js
```bash
# Install live-server globally
npm install -g live-server

# Jalankan server
live-server --port=8000
```

## 🎨 Kustomisasi Konten

### 1. Menambah Mata Pelajaran Baru

Edit file `script.js`, tambahkan di bagian `getContentForPage()`:

```javascript
const contentData = {
    // ... existing content ...
    'sejarah': {
        1: {
            1: {
                left: {
                    title: "Sejarah Indonesia",
                    content: "Mari belajar sejarah bangsa Indonesia",
                    image: "🏛️",
                    description: "Mengenal tokoh dan peristiwa penting"
                },
                right: {
                    title: "Latihan Sejarah",
                    content: "Siapa presiden pertama Indonesia?",
                    image: "👨‍💼",
                    description: "Latihan mengenal tokoh sejarah"
                }
            }
        }
    }
};
```

### 2. Menambah Quiz Baru

Edit bagian `generateQuiz()`:

```javascript
const quizzes = {
    // ... existing quizzes ...
    'sejarah': {
        1: [
            {
                question: "Siapa presiden pertama Indonesia?",
                options: ["Soekarno", "Soeharto", "Habibie", "Megawati"],
                correct: 0
            },
            {
                question: "Kapan Indonesia merdeka?",
                options: ["16 Agustus 1945", "17 Agustus 1945", "18 Agustus 1945", "19 Agustus 1945"],
                correct: 1
            }
        ]
    }
};
```

### 3. Mengubah Warna Tema

Edit file `styles.css`, cari dan ubah variabel warna:

```css
/* Primary colors */
--primary-color: #4f46e5;        /* Biru utama */
--secondary-color: #f59e0b;      /* Orange */
--accent-color: #7c3aed;         /* Ungu */

/* Background gradients */
--background-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--card-gradient: linear-gradient(135deg, #fef3c7, #fde68a);
```

### 4. Menambah Gambar dan Media

1. Buat folder `assets/` di root project
2. Subfolder yang disarankan:
   ```
   assets/
   ├── images/          # Gambar dan ilustrasi
   ├── audio/           # File audio narasi
   ├── videos/          # Video pembelajaran
   └── icons/           # Ikon kustom
   ```

3. Update referensi gambar di JavaScript:
   ```javascript
   left: {
       title: "Judul Baru",
       content: "Konten dengan gambar",
       image: "<img src='assets/images/contoh.jpg' alt='Deskripsi'>",
       description: "Deskripsi"
   }
   ```

## 📱 Optimasi Mobile

### Responsive Images
```html
<!-- Tambahkan di head section -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Touch Gestures
```javascript
// Tambahkan di script.js untuk gesture mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next page
            this.nextPage();
        } else {
            // Swipe right - previous page
            this.previousPage();
        }
    }
}
```

## 🔒 Keamanan dan Performance

### Minifikasi File
```bash
# Install tools minifikasi
npm install -g uglify-js clean-css-cli

# Minifikasi JavaScript
uglifyjs script.js -o script.min.js

# Minifikasi CSS
cleancss -o styles.min.css styles.css
```

### Optimasi Gambar
```bash
# Install ImageOptim atau similar tool
# Compress semua gambar di folder assets/
# Format yang disarankan: WebP, PNG, JPG
```

### Caching
```html
<!-- Tambahkan di head untuk caching -->
<meta http-equiv="Cache-Control" content="max-age=31536000">
```

## 🌐 Deployment

### Upload ke Web Server
1. Upload semua file ke web server
2. Pastikan struktur folder tetap sama
3. Test semua fitur berfungsi

### CDN Integration
```html
<!-- Ganti CDN jika diperlukan -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Analytics Integration
```html
<!-- Tambahkan Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Troubleshooting

### Masalah Umum

#### 1. File tidak terbuka di browser
**Solusi:**
- Pastikan menggunakan server lokal (bukan file://)
- Cek console browser untuk error
- Pastikan semua file ada di folder yang sama

#### 2. Gambar tidak muncul
**Solusi:**
- Cek path file gambar
- Pastikan format file didukung
- Cek permission file

#### 3. Quiz tidak berfungsi
**Solusi:**
- Cek console untuk error JavaScript
- Pastikan struktur data quiz benar
- Verifikasi event listener terpasang

#### 4. Responsive design bermasalah
**Solusi:**
- Cek meta viewport tag
- Test di berbagai ukuran layar
- Verifikasi CSS media queries

### Debug Mode
```javascript
// Tambahkan di script.js untuk debug
const DEBUG = true;

if (DEBUG) {
    console.log('Flipbook loaded');
    console.log('Current subject:', this.currentSubject);
    console.log('Current grade:', this.currentGrade);
}
```

## 📞 Support

### Log Error
```javascript
// Tambahkan error logging
window.addEventListener('error', function(e) {
    console.error('Error:', e.error);
    // Kirim ke analytics atau logging service
});
```

### Contact Information
- Email: [your-email@domain.com]
- WhatsApp: [your-whatsapp-number]
- Website: [your-website.com]

## 📚 Referensi

### Dokumentasi Teknologi
- [HTML5 Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS3 Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript ES6+](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Tools yang Disarankan
- [VS Code](https://code.visualstudio.com/) - Editor kode
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - Development server
- [ImageOptim](https://imageoptim.com/) - Optimasi gambar
- [TinyPNG](https://tinypng.com/) - Compress gambar online

---

**Catatan:** Pastikan untuk selalu backup file sebelum melakukan kustomisasi besar. Test semua fitur setelah melakukan perubahan. 