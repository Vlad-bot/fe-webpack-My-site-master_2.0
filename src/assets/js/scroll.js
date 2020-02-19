'use strict';




const SCROLL_HEIGHT = 35;

const headerElem = document.getElementById('header');
window.onscroll = function() {
    if (window.scrollY > SCROLL_HEIGHT &&
        !headerElem.classList.contains('navFixed')) {
        headerElem.classList.add('navFixed');
    } else if (window.scrollY <= SCROLL_HEIGHT &&
        headerElem.classList.contains('navFixed')) {
        headerElem.classList.remove('navFixed');
    }
};




