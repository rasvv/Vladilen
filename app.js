const boadrd = document.querySelector('#board')
const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
const SQUARE_NUMBER = 500

for (let i = 0; i < SQUARE_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => {
    setColor(square)
  })

  square.addEventListener('mouseleave', () => {
    revoveColor(square)
  })

  boadrd.append(square)
}

const setColor = (element) => {
  const color = `#${getRandomColor()}`
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` 
}

const revoveColor = (element) => {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = '0 0 2px #000'
}

const getRandomColor = () => {
  let color = ''
  for (let i = 0; i<6; i++) {
    color += chars[Math.floor(Math.random() * chars.length)]
  }
  return color
}