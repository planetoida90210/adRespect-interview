document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.getElementById('searchIcon');
    const searchInput = document.getElementById('searchInput');
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');

    searchIcon.addEventListener('click', function () {
        if (searchInput.classList.contains('w-0')) {
            searchInput.classList.remove('w-0');
            searchInput.classList.add('w-40');
            searchInput.focus();
        } else {
            searchInput.classList.remove('w-40');
            searchInput.classList.add('w-0');
        }
    });

    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.remove('opacity-0', 'invisible');
        mobileMenu.classList.add('opacity-100');
    });

    closeMenu.addEventListener('click', function () {
        mobileMenu.classList.remove('opacity-100');
        mobileMenu.classList.add('opacity-0');
        setTimeout(() => {
            mobileMenu.classList.add('invisible');
        }, 300);
    });
});
