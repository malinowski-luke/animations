let damaged = true
const clicked = () => {
  const button = document.getElementById('button'),
    body = document.body
  button.innerText = damaged ? 'damaged' : 'classic'
  button.style.background = damaged ? '#f22100' : '#ffffff'
  button.style.color = damaged ? '#fffffd' : '#000000'
  if (body) body.style.background = damaged ? '#ffffff' : '#f22100'
  damaged = !damaged
}
