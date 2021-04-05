const strCode =
  'const wakeUp = () => {\n\tif ( tired() ) {\n\t\tdrinkCoffee();\n\t} else {\n\t\tkeepCoding();\n\t}\n});\n\nwindow.onload = wakeup; '

const typewriter = (text, id, speed) => {
  // count var
  let index = 0
  // closure function
  const displayText = () => {
    const code = document.getElementById(id)

    if (index < text.length) {
      code.innerText += text.charAt(index++)
      setTimeout(displayText, speed)
    }
  }
  displayText()
}
window.onload = typewriter(strCode, 'code', 50)
