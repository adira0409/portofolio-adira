// ANIMASI SAAT SCROLL

const elements = document.querySelectorAll(
    '.section-title, .about-card, .project-card, .contact'
);

elements.forEach(element => {
    element.classList.add('reveal');
});


function revealOnScroll() {

    const windowHeight = window.innerHeight;

    elements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }

    });

}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();


// NAVBAR SAAT SCROLL

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {
        navbar.style.boxShadow =
            '0 5px 25px rgba(231, 84, 145, 0.10)';
    } else {
        navbar.style.boxShadow = 'none';
    }

});


// ANIMASI KLIK NAVIGASI

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function () {

        document.querySelectorAll('nav a').forEach(item => {
            item.style.color = '#4b3340';
        });

        this.style.color = '#e75491';

    });

});