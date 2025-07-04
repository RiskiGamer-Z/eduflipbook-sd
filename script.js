// Flipbook Pembelajaran SD - JavaScript
class FlipbookApp {
    constructor() {
        this.currentSubject = 'matematika';
        this.currentGrade = '1';
        this.currentPage = 1;
        this.totalPages = 10;
        this.zoomLevel = 1;
        this.isAudioEnabled = true;
        this.isFullscreen = false;
        
        this.initializeElements();
        this.bindEvents();
        this.loadContent();
    }

    initializeElements() {
        // Navigation elements
        this.menuBtn = document.getElementById('menuBtn');
        this.sidebar = document.getElementById('sidebar');
        this.closeMenu = document.getElementById('closeMenu');
        this.fullscreenBtn = document.getElementById('fullscreenBtn');
        
        // Content elements
        this.welcomeScreen = document.getElementById('welcomeScreen');
        this.flipbookContainer = document.getElementById('flipbookContainer');
        this.leftPage = document.getElementById('leftPage');
        this.rightPage = document.getElementById('rightPage');
        
        // Control elements
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.currentPageSpan = document.getElementById('currentPage');
        this.totalPagesSpan = document.getElementById('totalPages');
        this.zoomInBtn = document.getElementById('zoomInBtn');
        this.zoomOutBtn = document.getElementById('zoomOutBtn');
        this.audioBtn = document.getElementById('audioBtn');
        this.quizBtn = document.getElementById('quizBtn');
        
        // Progress elements
        this.progressFill = document.getElementById('progressFill');
        
        // Modal elements
        this.quizModal = document.getElementById('quizModal');
        this.closeQuiz = document.getElementById('closeQuiz');
        this.quizContent = document.getElementById('quizContent');
        
        // Navigation links
        this.subjectLinks = document.querySelectorAll('[data-subject]');
        this.gradeLinks = document.querySelectorAll('[data-grade]');
    }

    bindEvents() {
        // Menu controls
        this.menuBtn.addEventListener('click', () => this.toggleSidebar());
        this.closeMenu.addEventListener('click', () => this.toggleSidebar());
        
        // Fullscreen
        this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
        
        // Navigation
        this.prevBtn.addEventListener('click', () => this.previousPage());
        this.nextBtn.addEventListener('click', () => this.nextPage());
        
        // Zoom controls
        this.zoomInBtn.addEventListener('click', () => this.zoomIn());
        this.zoomOutBtn.addEventListener('click', () => this.zoomOut());
        
        // Audio toggle
        this.audioBtn.addEventListener('click', () => this.toggleAudio());
        
        // Quiz
        this.quizBtn.addEventListener('click', () => this.showQuiz());
        this.closeQuiz.addEventListener('click', () => this.hideQuiz());
        
        // Subject and grade selection
        this.subjectLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.selectSubject(link.dataset.subject);
            });
        });
        
        this.gradeLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.selectGrade(link.dataset.grade);
            });
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
        
        // Click outside modal to close
        this.quizModal.addEventListener('click', (e) => {
            if (e.target === this.quizModal) {
                this.hideQuiz();
            }
        });
    }

    toggleSidebar() {
        this.sidebar.classList.toggle('active');
    }

    toggleFullscreen() {
        if (!this.isFullscreen) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
        this.isFullscreen = !this.isFullscreen;
    }

    selectSubject(subject) {
        this.currentSubject = subject;
        this.currentPage = 1;
        this.updateActiveNav();
        this.loadContent();
        this.showFlipbook();
    }

    selectGrade(grade) {
        this.currentGrade = grade;
        this.currentPage = 1;
        this.updateActiveNav();
        this.loadContent();
        this.showFlipbook();
    }

    updateActiveNav() {
        // Update subject links
        this.subjectLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.subject === this.currentSubject) {
                link.classList.add('active');
            }
        });
        
        // Update grade links
        this.gradeLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.grade === this.currentGrade) {
                link.classList.add('active');
            }
        });
    }

    showFlipbook() {
        this.welcomeScreen.style.display = 'none';
        this.flipbookContainer.style.display = 'block';
        this.flipbookContainer.classList.add('fade-in');
    }

    loadContent() {
        const content = this.getContentForPage(this.currentSubject, this.currentGrade, this.currentPage);
        this.renderPage(content);
        this.updatePageInfo();
        this.updateProgress();
    }

    getContentForPage(subject, grade, page) {
        // Sample content - in a real app, this would come from a database or API
        const contentData = {
            matematika: {
                1: {
                    1: {
                        left: {
                            title: "Bilangan 1-10",
                            content: "Mari belajar menghitung dari 1 sampai 10!",
                            image: "🔢",
                            description: "Kita akan belajar mengenal angka dan cara menghitung benda."
                        },
                        right: {
                            title: "Latihan Menghitung",
                            content: "Berapa banyak apel yang ada di gambar?",
                            image: "🍎🍎🍎",
                            description: "Hitung dengan teliti ya!"
                        }
                    },
                    2: {
                        left: {
                            title: "Penjumlahan Sederhana",
                            content: "2 + 3 = ?",
                            image: "2️⃣ + 3️⃣",
                            description: "Mari belajar penjumlahan dengan gambar."
                        },
                        right: {
                            title: "Latihan Penjumlahan",
                            content: "Berapakah hasil dari 4 + 2?",
                            image: "4️⃣ + 2️⃣",
                            description: "Gunakan jari untuk membantu menghitung."
                        }
                    }
                }
            },
            'bahasa-indonesia': {
                1: {
                    1: {
                        left: {
                            title: "Huruf A-Z",
                            content: "Mari belajar mengenal huruf alfabet!",
                            image: "🔤",
                            description: "Kita akan belajar membaca dan menulis huruf."
                        },
                        right: {
                            title: "Latihan Membaca",
                            content: "Bacalah kata-kata berikut dengan lantang!",
                            image: "📖",
                            description: "Latihan membaca akan membuat kita lebih lancar."
                        }
                    }
                }
            },
            ipa: {
                1: {
                    1: {
                        left: {
                            title: "Bagian Tubuh",
                            content: "Mari mengenal bagian-bagian tubuh kita!",
                            image: "👤",
                            description: "Tubuh kita terdiri dari berbagai bagian yang penting."
                        },
                        right: {
                            title: "Latihan Mengenal Tubuh",
                            content: "Tunjuk bagian tubuh yang disebutkan!",
                            image: "👆",
                            description: "Latihan ini akan membantu kita mengenal tubuh."
                        }
                    }
                }
            }
        };

        return contentData[subject]?.[grade]?.[page] || {
            left: {
                title: "Halaman " + page,
                content: "Konten sedang dalam pengembangan",
                image: "📚",
                description: "Halaman ini akan segera tersedia."
            },
            right: {
                title: "Latihan",
                content: "Latihan akan segera tersedia",
                image: "✏️",
                description: "Latihan interaktif akan ditambahkan."
            }
        };
    }

    renderPage(content) {
        // Render left page
        this.leftPage.querySelector('.page-content').innerHTML = `
            <h3 style="color: #4f46e5; margin-bottom: 1rem; font-size: 1.5rem;">${content.left.title}</h3>
            <div style="font-size: 4rem; margin: 1rem 0;">${content.left.image}</div>
            <p style="color: #6b7280; margin-bottom: 1rem; line-height: 1.6;">${content.left.content}</p>
            <p style="color: #9ca3af; font-size: 0.9rem; font-style: italic;">${content.left.description}</p>
        `;

        // Render right page
        this.rightPage.querySelector('.page-content').innerHTML = `
            <h3 style="color: #f59e0b; margin-bottom: 1rem; font-size: 1.5rem;">${content.right.title}</h3>
            <div style="font-size: 4rem; margin: 1rem 0;">${content.right.image}</div>
            <p style="color: #6b7280; margin-bottom: 1rem; line-height: 1.6;">${content.right.content}</p>
            <p style="color: #9ca3af; font-size: 0.9rem; font-style: italic;">${content.right.description}</p>
        `;
    }

    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.loadContent();
        }
    }

    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.loadContent();
        }
    }

    updatePageInfo() {
        this.currentPageSpan.textContent = this.currentPage;
        this.totalPagesSpan.textContent = this.totalPages;
        
        // Update button states
        this.prevBtn.disabled = this.currentPage === 1;
        this.nextBtn.disabled = this.currentPage === this.totalPages;
    }

    updateProgress() {
        const progress = (this.currentPage / this.totalPages) * 100;
        this.progressFill.style.width = progress + '%';
    }

    zoomIn() {
        if (this.zoomLevel < 2) {
            this.zoomLevel += 0.2;
            this.applyZoom();
        }
    }

    zoomOut() {
        if (this.zoomLevel > 0.5) {
            this.zoomLevel -= 0.2;
            this.applyZoom();
        }
    }

    applyZoom() {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.style.transform = `scale(${this.zoomLevel})`;
        });
    }

    toggleAudio() {
        this.isAudioEnabled = !this.isAudioEnabled;
        const icon = this.audioBtn.querySelector('i');
        if (this.isAudioEnabled) {
            icon.className = 'fas fa-volume-up';
            this.playAudio();
        } else {
            icon.className = 'fas fa-volume-mute';
        }
    }

    playAudio() {
        if (this.isAudioEnabled) {
            // In a real app, you would play actual audio files
            console.log('Playing audio for page', this.currentPage);
        }
    }

    showQuiz() {
        const quiz = this.generateQuiz();
        this.quizContent.innerHTML = quiz;
        this.quizModal.classList.add('active');
        this.bindQuizEvents();
    }

    hideQuiz() {
        this.quizModal.classList.remove('active');
    }

    generateQuiz() {
        const quizzes = {
            matematika: {
                1: [
                    {
                        question: "Berapakah hasil dari 2 + 3?",
                        options: ["4", "5", "6", "7"],
                        correct: 1
                    },
                    {
                        question: "Berapa banyak jari di tangan kanan?",
                        options: ["4", "5", "6", "3"],
                        correct: 1
                    }
                ]
            },
            'bahasa-indonesia': {
                1: [
                    {
                        question: "Huruf apakah yang pertama dalam alfabet?",
                        options: ["B", "A", "C", "D"],
                        correct: 1
                    }
                ]
            }
        };

        const currentQuiz = quizzes[this.currentSubject]?.[this.currentGrade] || [
            {
                question: "Pertanyaan contoh",
                options: ["A", "B", "C", "D"],
                correct: 0
            }
        ];

        let quizHTML = '';
        currentQuiz.forEach((q, index) => {
            quizHTML += `
                <div class="quiz-question" data-question="${index}">
                    <h4>Pertanyaan ${index + 1}</h4>
                    <p>${q.question}</p>
                    <div class="quiz-options">
                        ${q.options.map((option, optIndex) => `
                            <div class="quiz-option" data-option="${optIndex}" data-correct="${q.correct}">
                                ${option}
                            </div>
                        `).join('')}
                    </div>
                    <div class="quiz-result" style="display: none;"></div>
                </div>
            `;
        });

        return quizHTML;
    }

    bindQuizEvents() {
        const quizOptions = document.querySelectorAll('.quiz-option');
        quizOptions.forEach(option => {
            option.addEventListener('click', () => {
                this.handleQuizAnswer(option);
            });
        });
    }

    handleQuizAnswer(selectedOption) {
        const questionDiv = selectedOption.closest('.quiz-question');
        const options = questionDiv.querySelectorAll('.quiz-option');
        const correctAnswer = parseInt(selectedOption.dataset.correct);
        const selectedAnswer = parseInt(selectedOption.dataset.option);
        const resultDiv = questionDiv.querySelector('.quiz-result');

        // Remove previous selections
        options.forEach(opt => {
            opt.classList.remove('selected', 'correct', 'incorrect');
        });

        // Mark selected answer
        selectedOption.classList.add('selected');

        // Check if correct
        if (selectedAnswer === correctAnswer) {
            selectedOption.classList.add('correct');
            resultDiv.innerHTML = '<strong>🎉 Benar! Jawaban kamu tepat!</strong>';
            resultDiv.className = 'quiz-result success';
        } else {
            selectedOption.classList.add('incorrect');
            options[correctAnswer].classList.add('correct');
            resultDiv.innerHTML = '<strong>❌ Salah. Coba lagi ya!</strong>';
            resultDiv.className = 'quiz-result error';
        }

        resultDiv.style.display = 'block';
    }

    handleKeyboard(e) {
        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                this.previousPage();
                break;
            case 'ArrowRight':
                e.preventDefault();
                this.nextPage();
                break;
            case 'Escape':
                this.hideQuiz();
                break;
            case 'f':
            case 'F':
                if (e.ctrlKey) {
                    e.preventDefault();
                    this.toggleFullscreen();
                }
                break;
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FlipbookApp();
});

// Add some sample content for demonstration
const sampleContent = {
    matematika: {
        title: "Matematika Kelas 1",
        description: "Belajar matematika dengan cara yang menyenangkan",
        topics: ["Bilangan 1-10", "Penjumlahan", "Pengurangan", "Bentuk Geometri"]
    },
    'bahasa-indonesia': {
        title: "Bahasa Indonesia Kelas 1",
        description: "Mengenal huruf dan kata-kata sederhana",
        topics: ["Huruf A-Z", "Membaca Kata", "Menulis", "Mendengarkan"]
    },
    ipa: {
        title: "IPA Kelas 1",
        description: "Mengenal alam sekitar dan tubuh kita",
        topics: ["Bagian Tubuh", "Hewan dan Tumbuhan", "Lingkungan", "Kesehatan"]
    }
};

// Export for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FlipbookApp;
} 