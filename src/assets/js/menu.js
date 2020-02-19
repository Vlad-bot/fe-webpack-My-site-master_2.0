'use strict';

const mobileMenu = document.getElementById('mobileMenu');
const btnNavToggle = document.getElementById('btnNavToggle');
let menuIsOpen = false;

btnNavToggle.onclick = function() {
    toggleMenu();
};

mobileMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        toggleMenu();
    }
});

function toggleMenu() {
    if (!menuIsOpen) {
        menuIsOpen = true;
        mobileMenu.classList.add('mobileNavigationContainerOpen');
        btnNavToggle.classList.add('navToggleRotate');
    } else {
        menuIsOpen = false;
        mobileMenu.classList.remove('mobileNavigationContainerOpen');
        btnNavToggle.classList.remove('navToggleRotate');
    }
}