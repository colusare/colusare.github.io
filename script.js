document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const body = document.querySelector('body');

    menuToggle.addEventListener('click', function () {
        mobileNav.classList.toggle('active');
    });

    // Ocultar el menú si se hace clic fuera de él
    body.addEventListener('click', function (e) {
        if (!mobileNav.contains(e.target) && !menuToggle.contains(e.target)) {
            mobileNav.classList.remove('active');
        }
    });
});
