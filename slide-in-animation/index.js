const debounce = (callback, wait = 30, immediate = true) => {
  var timeout
  // can't use arrow func beacuse arguments arr is undefined in ()=>{}
  return function () {
    var context = this,
      args = arguments
    var later = () => {
      timeout = null
      if (!immediate) callback.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) callback.apply(context, args)
  }
}

const checkSlide = () => {
  document.querySelectorAll('.slide-in').forEach((article) => {
    const slideInAt =
        window.scrollY + window.innerHeight - article.offsetHeight / 2,
      elmBottom = article.offsetTop + article.offsetHeight,
      isHalfShown = slideInAt > article.offsetTop,
      isNotScrolledPast = window.scrollY < elmBottom
    if (isHalfShown && isNotScrolledPast) {
      // console.log('hit slide in'')
      article.classList.add('active')
    } else {
      // console.log('hit slide out')
      article.classList.remove('active')
    }
  })
}

// debounce to reduce unecessary scroll event trigger
window.addEventListener('scroll', debounce(checkSlide, 50))
