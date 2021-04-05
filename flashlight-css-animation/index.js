let lightStatus = false

const glow = () => {
  const light = document.getElementById('light')
  const button = document.getElementById('button')
  light.style.animation = !lightStatus
    ? 'fadeIn 0.5s ease-in forwards'
    : 'fadeOut 0.5s ease-in forwards'
  button.style.top = !lightStatus ? '85px' : '80px'
  button.style.boxShadow = !lightStatus ? 'none' : '0px 5px #666666'
  lightStatus = !lightStatus ? true : false
}
