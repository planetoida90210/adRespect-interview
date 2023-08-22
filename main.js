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
    const masonryItems = document.querySelectorAll('.masonry-item');
    const fadeEffect = document.querySelector('#fadeEffect');
    const expandBtn = document.getElementById('expandButton');
    const masonryContainer = document.querySelector('.masonry');

    lightGallery(masonryContainer, {
        selector: '.masonry-item a',
    });

    let currentIndex = 0;

    const msnry = new Masonry(masonryContainer, {
        itemSelector: '.masonry-item',
        columnWidth: 100,
        percentPosition: true,
        gutter: 12,
    });

    masonryItems.forEach((item, index) => {
        if (index >= 6) {
            item.style.display = 'none';
        }
    });
    msnry.layout();

    expandBtn.addEventListener('click', function () {
        let countShown = 0;
        masonryItems.forEach((item, index) => {
            if (item.style.display === 'none' && countShown < 6) {
                item.style.display = 'block';
                countShown++;
            }
        });
        msnry.layout();

        if (
            Array.from(masonryItems).every(
                (item) => item.style.display !== 'none',
            )
        ) {
            expandBtn.style.display = 'none';
            fadeEffect.style.display = 'none';
        }
    });

    expandBtn.addEventListener('click', function () {
        let countShown = 0;
        masonryItems.forEach((item, index) => {
            if (item.style.display === 'none' && countShown < 6) {
                item.style.display = 'block';
                countShown++;
            }
        });
        msnry.layout();

        if (
            Array.from(masonryItems).every(
                (item) => item.style.display !== 'none',
            )
        ) {
            expandBtn.style.display = 'none';
            fadeEffect.style.display = 'none';
        }
    });

    const toggleSearch = () => {
        searchInput.classList.toggle('w-0');
        searchInput.classList.toggle('w-40');
        if (!searchInput.classList.contains('w-0')) {
            searchInput.focus();
        }
    };

    const showMobileMenu = () => {
        mobileMenu.classList.remove('opacity-0', 'invisible');
        mobileMenu.classList.add('opacity-100');
    };

    const hideMobileMenu = () => {
        mobileMenu.classList.remove('opacity-100');
        mobileMenu.classList.add('opacity-0', 'invisible');
    };

    const goToSlide = (index) => {
        const offset = -index * 100;
        sliderWrapper.style.transform = `translateX(${offset}%)`;
        currentIndex = index;
    };

    const nextSlide = () => {
        goToSlide((currentIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        goToSlide((currentIndex - 1 + slides.length) % slides.length);
    };

    searchIcon.addEventListener('click', toggleSearch);
    menuToggle.addEventListener('click', showMobileMenu);
    closeMenu.addEventListener('click', hideMobileMenu);
    nextButtons.forEach((button) =>
        button.addEventListener('click', nextSlide),
    );
    prevButtons.forEach((button) =>
        button.addEventListener('click', prevSlide),
    );
});
