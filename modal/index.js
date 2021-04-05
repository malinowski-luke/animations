const showModal = () => {
  const modal = document.getElementsByClassName('modal')[0],
    modalHidden = modal.classList.contains('hidden')
  if (modalHidden) {
    modal.classList.remove('hidden')
    modal.style.animation = 'fade-in 1s forwards'
  }
  document.addEventListener('click', (event) => {
    if (event.target.closest('.modal-content')) {
      modal.style.animation = 'fade-out .2s forwards'
      setTimeout(() => {
        modal.classList.add('hidden')
      }, 200)
    }
  })
}
