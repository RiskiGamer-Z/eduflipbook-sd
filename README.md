# 📚 Flipbook Pembelajaran SD - Sistem Pembelajaran Interaktif

Sistem flipbook pembelajaran digital yang dirancang khusus untuk siswa Sekolah Dasar dengan konten interaktif, latihan soal, dan antarmuka yang menarik.

## 🌟 Fitur Utama

### 📖 Konten Pembelajaran
- **5 Mata Pelajaran**: Matematika, Bahasa Indonesia, IPA, IPS, PKN
- **6 Tingkat Kelas**: Kelas 1-6 SD
- **Konten Interaktif**: Gambar, animasi, dan narasi suara
- **Navigasi Mudah**: Menu sidebar yang intuitif

### 🎮 Fitur Interaktif
- **Latihan Soal**: Quiz interaktif dengan feedback langsung
- **Zoom In/Out**: Kontrol pembesaran untuk detail konten
- **Mode Fullscreen**: Pengalaman belajar yang imersif
- **Progress Tracking**: Bar progress untuk melacak kemajuan
- **Keyboard Navigation**: Navigasi dengan tombol panah

### 📱 Responsive Design
- **Mobile Friendly**: Optimal di smartphone dan tablet
- **Desktop Optimized**: Tampilan terbaik di komputer
- **Touch Support**: Gesture untuk perangkat sentuh

## 🚀 Cara Menggunakan

### 1. Instalasi
```bash
# Clone atau download project
git clone [https://github.com/RiskiGamer-Z/eduflipbook-sd]
cd flipbook

# Buka file index.html di browser
# Atau gunakan server lokal
python -m http.server 8000
# Kemudian buka http://localhost:8000
```

### 2. Navigasi Dasar
- **Menu**: Klik tombol menu (☰) untuk membuka sidebar
- **Pilih Mata Pelajaran**: Klik mata pelajaran yang diinginkan
- **Pilih Kelas**: Pilih tingkat kelas (1-6)
- **Navigasi Halaman**: Gunakan tombol panah atau keyboard

### 3. Kontrol Flipbook
- **Previous/Next**: Tombol panah untuk berpindah halaman
- **Zoom**: Tombol + dan - untuk memperbesar/memperkecil
- **Audio**: Toggle suara narasi
- **Quiz**: Latihan soal interaktif
- **Fullscreen**: Mode layar penuh

### 4. Keyboard Shortcuts
- `←` / `→`: Navigasi halaman
- `Esc`: Tutup modal/quiz
- `Ctrl + F`: Toggle fullscreen
- `Space`: Play/pause audio

## 📁 Struktur File

```
flipbook/
├── index.html          # File utama HTML
├── styles.css          # Styling CSS
├── script.js           # JavaScript functionality
├── README.md           # Dokumentasi
└── assets/             # Folder untuk gambar/audio (opsional)
    ├── images/
    ├── audio/
    └── content/
```

## 🎨 Kustomisasi

### Menambah Konten Baru
Edit file `script.js` pada bagian `getContentForPage()`:

```javascript
const contentData = {
    'mata-pelajaran-baru': {
        'kelas': {
            'halaman': {
                left: {
                    title: "Judul Halaman Kiri",
                    content: "Konten pembelajaran",
                    image: "🎨",
                    description: "Deskripsi singkat"
                },
                right: {
                    title: "Judul Halaman Kanan",
                    content: "Latihan atau aktivitas",
                    image: "✏️",
                    description: "Instruksi latihan"
                }
            }
        }
    }
};
```

### Menambah Quiz Baru
Edit bagian `generateQuiz()`:

```javascript
const quizzes = {
    'mata-pelajaran': {
        'kelas': [
            {
                question: "Pertanyaan quiz?",
                options: ["A", "B", "C", "D"],
                correct: 1  // Index jawaban benar (0-3)
            }
        ]
    }
};
```

### Mengubah Warna Tema
Edit file `styles.css` pada variabel warna:

```css
:root {
    --primary-color: #4f46e5;
    --secondary-color: #f59e0b;
    --background-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## 📊 Konten yang Tersedia

### Matematika
- **Kelas 1**: Bilangan 1-10, Penjumlahan Sederhana
- **Kelas 2**: Penjumlahan dan Pengurangan
- **Kelas 3**: Perkalian dan Pembagian
- **Kelas 4**: Pecahan dan Desimal
- **Kelas 5**: Geometri dan Pengukuran
- **Kelas 6**: Aljabar Sederhana

### Bahasa Indonesia
- **Kelas 1**: Huruf A-Z, Membaca Kata
- **Kelas 2**: Kalimat Sederhana
- **Kelas 3**: Paragraf Pendek
- **Kelas 4**: Cerita Pendek
- **Kelas 5**: Puisi dan Drama
- **Kelas 6**: Karya Sastra

### IPA (Ilmu Pengetahuan Alam)
- **Kelas 1**: Bagian Tubuh, Hewan dan Tumbuhan
- **Kelas 2**: Lingkungan Sekitar
- **Kelas 3**: Materi dan Perubahannya
- **Kelas 4**: Energi dan Perubahannya
- **Kelas 5**: Bumi dan Antariksa
- **Kelas 6**: Teknologi Ramah Lingkungan

## 🔧 Teknologi yang Digunakan

- **HTML5**: Struktur konten
- **CSS3**: Styling dan animasi
- **JavaScript (ES6+)**: Interaktivitas
- **Font Awesome**: Ikon
- **Google Fonts**: Tipografi

## 📱 Kompatibilitas Browser

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

## 🚀 Deployment untuk Gumroad

### 1. Persiapan File
```bash
# Kompres semua file
zip -r flipbook-sd.zip . -x "*.git*" "README.md"
```

### 2. Upload ke Gumroad
1. Login ke akun Gumroad
2. Buat produk baru
3. Upload file zip
4. Set harga dan deskripsi
5. Publish

### 3. Deskripsi Produk (Saran)
```
📚 FLIPBOOK PEMBELAJARAN SD - Sistem Pembelajaran Digital Interaktif

✨ FITUR UTAMA:
• 5 Mata Pelajaran (Matematika, Bahasa Indonesia, IPA, IPS, PKN)
• 6 Tingkat Kelas (Kelas 1-6 SD)
• Konten Interaktif dengan Gambar dan Animasi
• Latihan Soal dengan Feedback Langsung
• Navigasi Mudah dan Responsive Design
• Mode Fullscreen untuk Pengalaman Optimal

🎯 COCOK UNTUK:
• Siswa SD Kelas 1-6
• Guru dan Orang Tua
• Pembelajaran Jarak Jauh
• Belajar Mandiri di Rumah

💻 CARA PENGGUNAAN:
1. Download dan extract file
2. Buka index.html di browser
3. Pilih mata pelajaran dan kelas
4. Mulai belajar dengan cara yang menyenangkan!

📱 KOMPATIBILITAS:
• Desktop (Windows, Mac, Linux)
• Mobile (Android, iOS)
• Semua browser modern

🎁 BONUS:
• File source code lengkap
• Panduan kustomisasi
• Support teknis
```

## 🤝 Kontribusi

Untuk menambah konten atau memperbaiki bug:

1. Fork repository
2. Buat branch fitur baru
3. Commit perubahan
4. Push ke branch
5. Buat Pull Request

## 📞 Support

Untuk pertanyaan atau bantuan teknis:
- Email: [your-email@domain.com]
- WhatsApp: [your-whatsapp-number]
- Website: [your-website.com]

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---

**Dibuat dengan ❤️ untuk pendidikan Indonesia yang lebih baik**

*Sistem ini dirancang untuk memudahkan pembelajaran jarak jauh dan memberikan pengalaman belajar yang menyenangkan bagi siswa SD.* 
