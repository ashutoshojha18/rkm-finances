// RKM Finances - Dynamic Website JavaScript (Fixed)
// Modern, animated, and interactive functionality

class RKMFinances {
    constructor() {
        this.currentTestimonial = 0;
        this.testimonialInterval = null;
        this.isAnimating = false;
        this.typingComplete = false;
        this.init();
    }

    init() {
        // Wait for DOM to be fully ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupApplication();
            });
        } else {
            this.setupApplication();
        }
    }

    setupApplication() {
        this.setupEventListeners();
        this.initializeAnimations();
        this.setupIntersectionObserver();
        this.initializeComponents();
        
        // Remove loading overlay after page loads
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.hideLoadingOverlay();
            }, 1500);
        });
    }

    hideLoadingOverlay() {
        const overlay = document.getElementById('loading-overlay');
        if (overlay) {
            overlay.classList.add('hidden');
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 500);
        }
    }

    setupEventListeners() {
        // Mobile menu toggle
        const mobileToggle = document.getElementById('mobile-menu-toggle');
        const nav = document.getElementById('nav');
        
        if (mobileToggle && nav) {
            mobileToggle.addEventListener('click', (e) => {
                e.preventDefault();
                mobileToggle.classList.toggle('active');
                nav.classList.toggle('active');
            });
        }

        // Header scroll effect
        window.addEventListener('scroll', () => {
            this.handleHeaderScroll();
            this.handleScrollToTop();
        });

        // Navigation smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                if (targetId) {
                    this.smoothScrollTo(targetId);
                    
                    // Close mobile menu if open
                    if (nav && nav.classList.contains('active')) {
                        nav.classList.remove('active');
                        mobileToggle.classList.remove('active');
                    }
                }
            });
        });

        // Button animations
        document.querySelectorAll('.btn-animate').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.createRippleEffect(e, btn);
                
                // Handle button actions
                const target = btn.dataset.target;
                if (target) {
                    setTimeout(() => {
                        this.smoothScrollTo(target);
                    }, 300);
                }
            });
        });

        // Service card expansion - Fixed selector and logic
        document.querySelectorAll('.expandable-card .service-header').forEach(header => {
            header.addEventListener('click', (e) => {
                e.preventDefault();
                const card = header.closest('.expandable-card');
                this.toggleServiceCard(card);
            });
        });

        // FAQ functionality - Fixed event delegation
        this.initializeFAQs();

        // Contact form
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                this.handleContactForm(e);
            });
        }

        // FAQ search
        const faqSearch = document.getElementById('faq-search');
        if (faqSearch) {
            faqSearch.addEventListener('input', (e) => {
                this.searchFAQs(e.target.value);
            });
        }

        // Testimonial navigation
        const prevBtn = document.getElementById('prev-testimonial');
        const nextBtn = document.getElementById('next-testimonial');
        
        if (prevBtn) prevBtn.addEventListener('click', () => this.previousTestimonial());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextTestimonial());

        // Testimonial dots
        document.querySelectorAll('.dot').forEach(dot => {
            dot.addEventListener('click', () => {
                this.goToTestimonial(parseInt(dot.dataset.slide));
            });
        });

        // Scroll to top button
        const scrollTopBtn = document.getElementById('scroll-top');
        if (scrollTopBtn) {
            scrollTopBtn.addEventListener('click', () => {
                this.smoothScrollTo('home');
            });
        }
    }

    // Fixed FAQ initialization
    initializeFAQs() {
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const faqItem = question.closest('.faq-item');
                this.toggleFAQ(faqItem);
            });
        });
    }

    initializeAnimations() {
        // Start typing animation after a delay
        setTimeout(() => {
            this.startTypingAnimation();
        }, 2500); // Increased delay to ensure page is fully loaded
        
        // Initialize counter animations when hero comes into view
        const hero = document.querySelector('.hero');
        if (hero) {
            this.observeElement(hero, () => {
                setTimeout(() => {
                    this.animateCounters();
                }, 1000); // Delay counter animation
            });
        }

        // Start testimonial carousel
        this.startTestimonialCarousel();

        // Initialize progress bars when about section comes into view
        const about = document.querySelector('.about');
        if (about) {
            this.observeElement(about, () => {
                this.animateProgressBars();
            });
        }
    }

    // Fixed typing animation
    startTypingAnimation() {
        const typingText = document.getElementById('typing-text');
        if (!typingText || this.typingComplete) return;

        const fullText = "Your Trusted Financial Partner with 18 Years of Expertise";
        let index = 0;
        
        // Clear any existing content
        typingText.textContent = '';
        
        const typeChar = () => {
            if (index < fullText.length) {
                typingText.textContent = fullText.substring(0, index + 1);
                index++;
                setTimeout(typeChar, 60); // Slightly faster typing
            } else {
                this.typingComplete = true;
                // Ensure cursor keeps blinking
                const cursor = document.querySelector('.cursor');
                if (cursor) {
                    cursor.style.animation = 'blink 1s infinite';
                }
            }
        };
        
        typeChar();
    }

    animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach((counter, index) => {
            setTimeout(() => {
                const target = parseInt(counter.dataset.count);
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current >= target) {
                        counter.textContent = target + (target > 100 ? '+' : '');
                    } else {
                        counter.textContent = Math.floor(current) + (target > 100 ? '+' : '');
                        requestAnimationFrame(updateCounter);
                    }
                };
                
                updateCounter();
            }, index * 200); // Stagger the counter animations
        });
    }

    animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-fill');
        
        progressBars.forEach((bar, index) => {
            setTimeout(() => {
                const width = bar.dataset.width;
                bar.style.width = width;
            }, index * 300);
        });
    }

    createRippleEffect(event, button) {
        const ripple = button.querySelector('.btn-ripple');
        if (!ripple) return;

        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        ripple.style.transform = 'scale(0)';
        ripple.style.opacity = '1';
        
        // Trigger animation
        requestAnimationFrame(() => {
            ripple.style.transform = 'scale(4)';
            ripple.style.opacity = '0';
        });
    }

    // Fixed service card toggle
    toggleServiceCard(card) {
        if (!card) return;
        
        const isExpanded = card.classList.contains('expanded');
        const indicator = card.querySelector('.expand-indicator');
        
        // Close all other cards first
        document.querySelectorAll('.expandable-card.expanded').forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('expanded');
                const otherIndicator = otherCard.querySelector('.expand-indicator');
                if (otherIndicator) {
                    otherIndicator.textContent = '+';
                }
            }
        });
        
        // Toggle current card
        if (isExpanded) {
            card.classList.remove('expanded');
            if (indicator) indicator.textContent = '+';
        } else {
            card.classList.add('expanded');
            if (indicator) indicator.textContent = '−';
        }
    }

    // Fixed FAQ toggle
    toggleFAQ(faqItem) {
        if (!faqItem) return;
        
        const isActive = faqItem.classList.contains('active');
        const toggle = faqItem.querySelector('.faq-toggle');
        
        // Close all other FAQs first
        document.querySelectorAll('.faq-item.active').forEach(otherItem => {
            if (otherItem !== faqItem) {
                otherItem.classList.remove('active');
                const otherToggle = otherItem.querySelector('.faq-toggle');
                if (otherToggle) {
                    otherToggle.textContent = '+';
                }
            }
        });
        
        // Toggle current FAQ
        if (isActive) {
            faqItem.classList.remove('active');
            if (toggle) toggle.textContent = '+';
        } else {
            faqItem.classList.add('active');
            if (toggle) toggle.textContent = '−';
        }
    }

    searchFAQs(query) {
        const faqItems = document.querySelectorAll('.faq-item');
        const searchTerm = query.toLowerCase().trim();
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question h3').textContent.toLowerCase();
            const answer = item.querySelector('.faq-answer p').textContent.toLowerCase();
            
            if (question.includes(searchTerm) || answer.includes(searchTerm) || searchTerm === '') {
                item.style.display = 'block';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    if (!question.includes(searchTerm) && !answer.includes(searchTerm) && searchTerm !== '') {
                        item.style.display = 'none';
                    }
                }, 300);
            }
        });
    }

    startTestimonialCarousel() {
        const slides = document.querySelectorAll('.testimonial-slide');
        if (slides.length === 0) return;

        // Auto-rotate testimonials
        this.testimonialInterval = setInterval(() => {
            this.nextTestimonial();
        }, 5000);

        // Pause on hover
        const carousel = document.querySelector('.testimonials-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => {
                clearInterval(this.testimonialInterval);
            });
            
            carousel.addEventListener('mouseleave', () => {
                this.testimonialInterval = setInterval(() => {
                    this.nextTestimonial();
                }, 5000);
            });
        }
    }

    nextTestimonial() {
        const slides = document.querySelectorAll('.testimonial-slide');
        const dots = document.querySelectorAll('.dot');
        
        if (slides.length === 0) return;
        
        slides[this.currentTestimonial].classList.remove('active');
        if (dots[this.currentTestimonial]) {
            dots[this.currentTestimonial].classList.remove('active');
        }
        
        this.currentTestimonial = (this.currentTestimonial + 1) % slides.length;
        
        slides[this.currentTestimonial].classList.add('active');
        if (dots[this.currentTestimonial]) {
            dots[this.currentTestimonial].classList.add('active');
        }
    }

    previousTestimonial() {
        const slides = document.querySelectorAll('.testimonial-slide');
        const dots = document.querySelectorAll('.dot');
        
        if (slides.length === 0) return;
        
        slides[this.currentTestimonial].classList.remove('active');
        if (dots[this.currentTestimonial]) {
            dots[this.currentTestimonial].classList.remove('active');
        }
        
        this.currentTestimonial = this.currentTestimonial === 0 ? slides.length - 1 : this.currentTestimonial - 1;
        
        slides[this.currentTestimonial].classList.add('active');
        if (dots[this.currentTestimonial]) {
            dots[this.currentTestimonial].classList.add('active');
        }
    }

    goToTestimonial(index) {
        const slides = document.querySelectorAll('.testimonial-slide');
        const dots = document.querySelectorAll('.dot');
        
        if (index >= slides.length || index < 0) return;
        
        slides[this.currentTestimonial].classList.remove('active');
        if (dots[this.currentTestimonial]) {
            dots[this.currentTestimonial].classList.remove('active');
        }
        
        this.currentTestimonial = index;
        
        slides[this.currentTestimonial].classList.add('active');
        if (dots[this.currentTestimonial]) {
            dots[this.currentTestimonial].classList.add('active');
        }
    }

    handleContactForm(event) {
        event.preventDefault();
        
        const form = event.target;
        const formData = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Validate form
        if (!this.validateForm(form)) {
            return;
        }
        
        // Show loading state
        submitBtn.innerHTML = '<span>Sending...</span>';
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        
        // Simulate form submission
        setTimeout(() => {
            this.showNotification('Thank you! Your message has been sent successfully. We will contact you soon.', 'success');
            form.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
            
            // Reset form animations
            form.querySelectorAll('.form-line').forEach(line => {
                line.style.width = '0';
            });
            
        }, 2000);
    }

    validateForm(form) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        // Clear previous errors
        form.querySelectorAll('.field-error').forEach(error => error.remove());
        form.querySelectorAll('.form-group.error').forEach(group => {
            group.classList.remove('error');
        });
        
        requiredFields.forEach(field => {
            const value = field.value.trim();
            const fieldGroup = field.closest('.form-group');
            
            if (!value) {
                isValid = false;
                fieldGroup.classList.add('error');
                this.showFieldError(field, 'This field is required');
            } else if (field.type === 'email' && !this.isValidEmail(value)) {
                isValid = false;
                fieldGroup.classList.add('error');
                this.showFieldError(field, 'Please enter a valid email address');
            } else if (field.type === 'tel' && !this.isValidPhone(value)) {
                isValid = false;
                fieldGroup.classList.add('error');
                this.showFieldError(field, 'Please enter a valid phone number');
            }
        });
        
        if (!isValid) {
            this.showNotification('Please fill in all required fields correctly.', 'error');
        }
        
        return isValid;
    }

    showFieldError(field, message) {
        // Remove existing error message
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        
        // Add error message
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.style.cssText = `
            color: #ff4444;
            font-size: 0.8rem;
            margin-top: 0.5rem;
            animation: fadeInUp 0.3s ease;
        `;
        
        field.parentNode.appendChild(errorElement);
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    isValidPhone(phone) {
        const phoneDigits = phone.replace(/\D/g, '');
        return phoneDigits.length >= 10;
    }

    showNotification(message, type = 'info') {
        // Remove existing notification
        const existing = document.querySelector('.notification');
        if (existing) {
            existing.remove();
        }
        
        // Create notification
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        let bgColor, textColor;
        switch(type) {
            case 'success':
                bgColor = '#4A90E2';
                textColor = 'white';
                break;
            case 'error':
                bgColor = '#ff4444';
                textColor = 'white';
                break;
            default:
                bgColor = '#87CEEB';
                textColor = '#1976D2';
        }
        
        notification.innerHTML = `
            <div class="notification-content">
                <span>${message}</span>
                <button class="notification-close">×</button>
            </div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${bgColor};
            color: ${textColor};
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(74, 144, 226, 0.3);
            z-index: 10000;
            max-width: 400px;
            animation: slideInRight 0.3s ease;
            font-weight: 500;
        `;
        
        // Add notification styles if not already present
        if (!document.getElementById('notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                .notification-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 1rem;
                }
                .notification-close {
                    background: none;
                    border: none;
                    color: inherit;
                    font-size: 1.2rem;
                    cursor: pointer;
                    padding: 0;
                    opacity: 0.8;
                    transition: opacity 0.2s ease;
                }
                .notification-close:hover { opacity: 1; }
                .form-group.error .form-control {
                    border-color: #ff4444 !important;
                    box-shadow: 0 0 0 3px rgba(255, 68, 68, 0.1) !important;
                }
            `;
            document.head.appendChild(style);
        }
        
        // Add close functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.remove();
        });
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    handleHeaderScroll() {
        const header = document.getElementById('header');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    }

    handleScrollToTop() {
        const scrollTopBtn = document.getElementById('scroll-top');
        if (scrollTopBtn) {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }
    }

    smoothScrollTo(targetId) {
        const target = document.getElementById(targetId);
        if (!target) return;
        
        const header = document.getElementById('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    
                    // Animate children with stagger effect
                    const children = entry.target.querySelectorAll('.service-card, .team-member, .faq-item, .contact-detail');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.style.animation = `fadeInUp 0.6s ease forwards`;
                        }, index * 100);
                    });
                }
            });
        }, observerOptions);
        
        // Observe all sections
        document.querySelectorAll('.section-animate').forEach(section => {
            observer.observe(section);
        });
    }

    observeElement(element, callback) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    callback();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(element);
    }

    initializeComponents() {
        // Add hover effects to team members
        document.querySelectorAll('.team-member').forEach(member => {
            member.addEventListener('mouseenter', () => {
                member.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            member.addEventListener('mouseleave', () => {
                member.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Add form field focus animations
        document.querySelectorAll('.form-control').forEach(field => {
            field.addEventListener('focus', () => {
                const line = field.nextElementSibling;
                if (line && line.classList.contains('form-line')) {
                    line.style.width = '100%';
                }
            });
            
            field.addEventListener('blur', () => {
                if (!field.value) {
                    const line = field.nextElementSibling;
                    if (line && line.classList.contains('form-line')) {
                        line.style.width = '0';
                    }
                }
            });
        });

        // Add parallax effect to hero background
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroImage = document.querySelector('.hero-image');
            if (heroImage) {
                heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });

        // Initialize image loading with fade effect
        document.querySelectorAll('img').forEach(img => {
            if (img.complete) {
                img.style.opacity = '1';
            } else {
                img.style.opacity = '0';
                img.addEventListener('load', () => {
                    img.style.transition = 'opacity 0.5s ease';
                    img.style.opacity = '1';
                });
            }
        });

        // Add keyboard navigation for accessibility
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Close mobile menu
                const nav = document.getElementById('nav');
                const mobileToggle = document.getElementById('mobile-menu-toggle');
                if (nav && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    mobileToggle.classList.remove('active');
                }
                
                // Close expanded service cards
                document.querySelectorAll('.expandable-card.expanded').forEach(card => {
                    card.classList.remove('expanded');
                    const indicator = card.querySelector('.expand-indicator');
                    if (indicator) indicator.textContent = '+';
                });
                
                // Close active FAQs
                document.querySelectorAll('.faq-item.active').forEach(item => {
                    item.classList.remove('active');
                    const toggle = item.querySelector('.faq-toggle');
                    if (toggle) toggle.textContent = '+';
                });
            }
        });
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new RKMFinances();
});

// Fallback initialization for different loading states
if (document.readyState === 'interactive' || document.readyState === 'complete') {
    new RKMFinances();
}

// Performance optimization: Preload critical resources
const preloadResources = () => {
    const criticalImages = [
        'https://pplx-res.cloudinary.com/image/upload/v1755887245/pplx_project_search_images/7a7b8629c9339ef7238578b67b4cce93e3ee8968.png',
        'https://pplx-res.cloudinary.com/image/upload/v1754994731/pplx_project_search_images/c96c88751322e41a0a6cd24c1b286c93cfd5c3ba.png'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
};

// Initialize preloading
preloadResources();

// Export for potential external use
window.RKMFinances = RKMFinances;