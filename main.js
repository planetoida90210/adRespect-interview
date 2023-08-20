document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.getElementById('searchIcon');
    const searchInput = document.getElementById('searchInput');
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    const slides = document.querySelectorAll('.my-slider-slide');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const nextButtons = document.querySelectorAll('.my-slider-next');
    const prevButtons = document.querySelectorAll('.my-slider-prev');

    nextButtons.forEach((button) =>
        button.addEventListener('click', nextSlide),
    );
    prevButtons.forEach((button) =>
        button.addEventListener('click', prevSlide),
    );
    let currentIndex = 0;

    function toggleSearch() {
        searchInput.classList.toggle('w-0');
        searchInput.classList.toggle('w-40');
        if (!searchInput.classList.contains('w-0')) {
            searchInput.focus();
        }
    }

    function showMobileMenu() {
        mobileMenu.classList.remove('opacity-0', 'invisible');
        mobileMenu.classList.add('opacity-100');
    }

    function hideMobileMenu() {
        mobileMenu.classList.remove('opacity-100');
        mobileMenu.classList.add('opacity-0', 'invisible');
    }

    function goToSlide(index) {
        const offset = -index * 100;
        sliderWrapper.style.transform = `translateX(${offset}%)`;
        currentIndex = index;
    }

    function nextSlide() {
        goToSlide((currentIndex + 1) % slides.length);
    }

    function prevSlide() {
        goToSlide((currentIndex - 1 + slides.length) % slides.length);
    }

    document
        .querySelector('.my-slider-next')
        .addEventListener('click', nextSlide);
    document
        .querySelector('.my-slider-prev')
        .addEventListener('click', prevSlide);
    searchIcon.addEventListener('click', toggleSearch);
    menuToggle.addEventListener('click', showMobileMenu);
    closeMenu.addEventListener('click', hideMobileMenu);
});
