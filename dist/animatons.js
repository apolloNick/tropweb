"use strict";

function animateCSS(element, animationName, callback) {
  var node = document.querySelector(element);
  node.style.display = 'block';
  node.classList.add('animated', animationName);

  function handleAnimationEnd() {
    node.classList.remove('animated', animationName);
    node.removeEventListener('animated', handleAnimationEnd);
    if (typeof callback === 'function') callback();
  }

  node.addEventListener('animationend', handleAnimationEnd);
}

setTimeout(function () {
  animateCSS('.intro-text', 'fadeIn');
}, 1500);