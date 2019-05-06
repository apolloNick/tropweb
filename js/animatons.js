function animateCSS (element, animationName, callback) {
  var node = document.querySelector(element)
  node.style.display = 'block'
  node.classList.add('animated', animationName)

  function handleAnimationEnd () {
    node.classList.remove('animated', animationName)
    node.removeEventListener('animated', handleAnimationEnd)

    if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
}

setTimeout(function () {
  animateCSS('.intro-text', 'fadeIn')
}, 1500)

// const animateCSS = ( element, animationName, callback) => {
//   const node = document.querySelector(element)
//   node.style.display = 'block'
//   node.classList.add('animated', animationName)

//   const handleAnimationEnd() => {
//       node.classList.remove('animated', animationName)
//       node.removeEventListener('animated', handleAnimationEnd)

//       if( typeof callback === 'function') callback()
//   }

//   node.addEventListener('aimationend', handleAnimationEnd)
// }

// setTimeout(function () {
//   var element = document.querySelector('.intro-text')
//   element.style.display = 'block'
//   element.classList.add('animated', 'fadeIn')
// }, 1500)
