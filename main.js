import { fetchImages } from './fetchImages.js';

let imagesArray = [];
let currentDisplayCount = 8;

async function loadImages(count = 8) {
    const newImages = await fetchImages('japanese modern garden design', count);
    imagesArray = [...imagesArray, ...newImages];
    console.log('Zawartość imagesArray:', imagesArray);
    displayImages();
}

function displayImages() {
    const container = document.querySelector('#imageContainer');

    if (!container) {
        console.error('Nie znaleziono kontenera #imageContainer');
        return;
    }

    // Czyszczenie obrazów
    container
        .querySelectorAll('img.gallery-img')
        .forEach((img) => img.remove());

    for (let i = 0; i < currentDisplayCount && i < imagesArray.length; i++) {
        const img = document.createElement('img');
        img.src = imagesArray[i];
        img.alt = 'Modern Japanese Garden Design';
        container.appendChild(img);
        img.classList.add('gallery-img');
        img.style.width = '200px';
    }

    new Masonry(container, {
        itemSelector: 'img',
        columnWidth: 200,
        fitWidth: true,
    });
}

document.addEventListener('DOMContentLoaded', function () {
    loadImages(8);

    document.querySelector('#expandBtn').addEventListener('click', function () {
        currentDisplayCount += 8;
        displayImages();
    });

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

    searchIcon.addEventListener('click', toggleSearch);
    menuToggle.addEventListener('click', showMobileMenu);
    closeMenu.addEventListener('click', hideMobileMenu);
});
