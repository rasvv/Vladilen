const startBtn = document.querySelector('.start')
const screens = document.querySelectorAll('.screen')
const timelist = document.querySelector('.time-list')
const timestr = document.querySelector('#time')
const board = document.querySelector('#board')
const maxDiameter = 40
const minDiameter = 10
const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

let diameter = 0
let time = 12
let score = 0

startBtn.addEventListener('click', (event) => {
  event.preventDefault()
  screens[0].classList.add('up') 
})

timelist.addEventListener('click', (event) => {
  if(event.target.classList.contains('time-btn')) {
    time = +event.target.dataset.time
    screens[1].classList.add('up') 
    startGame()
  }
})

board.addEventListener('click', (event) => {
  if (event.target.className === 'circle') {
    score++
    event.target.remove()
    createRandomCircle()    
  }
})

const startGame = () => {
  setInterval(decreaseTime, 1000)
  setTime(time)
  createRandomCircle()
}

const decreaseTime = () => {
  if (time === 0) {
    finishGame()
  } else {
    let current = --time
    if (current < 10) {current = `0${current}`}
    setTime(current)
  }
}

const setTime = (value) => {
  timestr.innerHTML = `00:${value}`
}

const finishGame = () => {
  timestr.parentNode.classList.add('hide')
  board.innerHTML = `<h1>Cчет: <span class="primary"> ${score}</span></h1>`

}

const createRandomCircle = () => {
  const circle = document.createElement('div')
  circle.classList.add('circle')
  diameter = randomSize(minDiameter, maxDiameter)
  const {height, width} = board.getBoundingClientRect()

  const x = randomSize(2, width - maxDiameter - 2)
  const y = randomSize(2, height - maxDiameter - 2)

  circle.style.width = `${diameter}px`
  circle.style.height = `${diameter}px`
  circle.style.position = 'absolute'
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  circle.style.background = `#${getRandomColor()}`

  board.append(circle)
}

const randomSize = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
} 

const getRandomColor = () => {
  let color = ''
  for (let i = 0; i<6; i++) {
    color += chars[Math.floor(Math.random() * chars.length)]
  }
  return color
}