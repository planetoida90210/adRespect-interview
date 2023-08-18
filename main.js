document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.getElementById('searchIcon');
    const searchInput = document.getElementById('searchInput');
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');

    //togle search input

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

    //togle mobile menu

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

    // close mobile menu and href to link

    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach((link) => {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('opacity-100');
            mobileMenu.classList.add('opacity-0');
            setTimeout(() => {
                mobileMenu.classList.add('invisible');
            }, 300);
        });
    });
});
