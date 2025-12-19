// Мобильное меню
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.querySelector('i').classList.toggle('fa-bars');
    hamburger.querySelector('i').classList.toggle('fa-times');
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.querySelector('i').classList.add('fa-bars');
        hamburger.querySelector('i').classList.remove('fa-times');
    });
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Обработка формы
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    
    alert(`Спасибо, ${name}! Ваше сообщение "${subject}" отправлено. Я свяжусь с вами по адресу ${email} в ближайшее время.`);
    
    contactForm.reset();
});

// Изменение стиля header при прокрутке
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Анимация появления элементов при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Наблюдаем за элементами для анимации
document.querySelectorAll('.skill-card, .project-card, .timeline-item').forEach(el => {
    observer.observe(el);
});

// Таймер для отображения опыта (опционально)
function updateExperience() {
    const startYear = 2021;
    const currentYear = new Date().getFullYear();
    const experience = currentYear - startYear;
    
    // Можно добавить отображение опыта где-нибудь на сайте
    // Например: document.getElementById('experience-years').textContent = experience;
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    updateExperience();
    
    // Добавление года в футер
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('.copyright p');
    if (yearElement && yearElement.textContent.includes('2023')) {
        yearElement.textContent = yearElement.textContent.replace('2023', currentYear);
    }
});