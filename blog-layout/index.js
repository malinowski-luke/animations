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

const updateProgressBar = () => {
  const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop,
    height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight,
    scrolled = (winScroll / height) * 100
  document.documentElement.style.setProperty(
    '--article-read-size',
    `${scrolled}%`
  )
}

const handleScroll = () => debounce(updateProgressBar(), 1000)
