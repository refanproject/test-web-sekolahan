// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active')) {
        if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    }
});

// Dropdown menu for mobile
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdown = toggle.parentElement;
            dropdown.classList.toggle('active');
        }
    });
});

// Sticky Navbar
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        // Smooth scroll with custom duration (1 second)
        const startPosition = window.pageYOffset;
        const duration = 1000; // 1 second
        const startTime = performance.now();

        function smoothScroll(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeInOutCubic = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            
            window.scrollTo(0, startPosition * (1 - easeInOutCubic));
            
            if (progress < 1) {
                requestAnimationFrame(smoothScroll);
            }
        }
        
        requestAnimationFrame(smoothScroll);
    });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#!') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Hero Slider (if multiple slides exist)
const heroSlides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function showSlide(n) {
    heroSlides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + heroSlides.length) % heroSlides.length;
    heroSlides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// Auto-advance slides every 5 seconds
if (heroSlides.length > 1) {
    setInterval(nextSlide, 5000);
}

// Lazy Loading Images
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.news-card, .program-card, .quick-link-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(el => observer.observe(el));
};

// Initialize animations when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateOnScroll);
} else {
    animateOnScroll();
}

// Search Functionality (if search box exists)
const searchForm = document.getElementById('searchForm');
if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            window.location.href = `search.html?q=${encodeURIComponent(searchTerm)}`;
        }
    });
}

// Calendar Widget (if exists)
const updateCalendar = () => {
    const calendarEl = document.getElementById('calendar');
    if (calendarEl) {
        const now = new Date();
        const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];
        const dayNames = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
        
        const currentMonth = monthNames[now.getMonth()];
        const currentYear = now.getFullYear();
        
        // Update calendar header
        const calendarHeader = calendarEl.querySelector('.calendar-header');
        if (calendarHeader) {
            calendarHeader.textContent = `${currentMonth} ${currentYear}`;
        }
    }
};

updateCalendar();

// Form Validation
const forms = document.querySelectorAll('form[data-validate]');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
                
                // Remove error class on input
                input.addEventListener('input', () => {
                    input.classList.remove('error');
                }, { once: true });
            }
        });
        
        if (!isValid) {
            e.preventDefault();
            alert('Mohon lengkapi semua field yang wajib diisi.');
        }
    });
});

// News Filter (if on news page)
const newsFilters = document.querySelectorAll('.news-filter');
if (newsFilters.length > 0) {
    newsFilters.forEach(filter => {
        filter.addEventListener('click', (e) => {
            e.preventDefault();
            const category = filter.dataset.category;
            
            // Update active filter
            newsFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            
            // Filter news cards
            const newsCards = document.querySelectorAll('.news-card');
            newsCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Print Page Function
const printButtons = document.querySelectorAll('.print-page');
printButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        window.print();
    });
});

// Share Functionality
const shareButtons = document.querySelectorAll('.share-btn');
shareButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const url = window.location.href;
        const title = document.title;
        
        if (navigator.share) {
            navigator.share({
                title: title,
                url: url
            }).catch(err => console.log('Error sharing:', err));
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(url).then(() => {
                alert('Link berhasil disalin ke clipboard!');
            });
        }
    });
});

// Back to Previous Page
const backButtons = document.querySelectorAll('.back-btn');
backButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.history.back();
    });
});

// Update current date and time in top bar (WIB - Indonesia West Java Time)
const updateDateTime = () => {
    const dateEl = document.querySelector('.top-bar .date');
    if (dateEl) {
        const now = new Date();
        
        // Get time in WIB timezone (UTC+7)
        const options = { 
            timeZone: 'Asia/Jakarta',
            hour12: true
        };
        
        // Format date
        const dateOptions = { 
            weekday: 'short', 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric',
            timeZone: 'Asia/Jakarta'
        };
        
        const formattedDate = now.toLocaleDateString('en-US', dateOptions);
        
        // Format time with AM/PM
        const timeOptions = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
            timeZone: 'Asia/Jakarta'
        };
        
        const formattedTime = now.toLocaleTimeString('en-US', timeOptions);
        
        // Combine date and time
        dateEl.textContent = `${formattedDate} | ${formattedTime}`;
    }
};

// Update immediately
updateDateTime();

// Update every second for real-time clock
setInterval(updateDateTime, 1000);

// Console log for debugging
console.log('SMK Negeri 1 Maja Website - Loaded Successfully');
