const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
let time = 0
let score = 0
const timeL = document.querySelector('#time')
const board = document.querySelector('#board')


startBtn.addEventListener('click', (event) => {
event.preventDefault()
screens[0].classList.add('up')
})

timeList.addEventListener('click',event => {
  if (event.target.classList.contains('time-btn')) {
  time = parseInt(event.target.getAttribute('data-time'))
  screens[1].classList.add('up')
   startGame()
 }
})

board.addEventListener('click', event => {
if (event.target.classList.contains('circle')) {
 score++
 event.target.remove()
 createC()
 }
})

function startGame() {
setInterval(decreaseTime,1000)
createC()
setTime(time)
}

function decreaseTime() {
if (time === 0) {
finishGame()
}else {
let current = --time
 if (current < 10) {
  current = 0${current}
  }
 setTime(current)
 }

}

function setTime(value) {
timeL.innerHTML = 00:${value}
}

function finishGame() {
timeL.parentNode.classList.add('hide')
 board.innerHTML = <h1>Your score:<span class = "primary"> ${score}</span>
}

function createC() {
const circle = document.createElement('div')
circle.classList.add('circle')
const size = sizes(10,60)
const {width,height} = board.getBoundingClientRect()
const x = sizes(0,width - size)
const y = sizes(0,height - size)
circle.style.width = ${size}px
circle.style.height = ${size}px
circle.style.top = ${y}px
circle.style.left = ${x}px

board.append(circle)
}

function sizes(min,max) {
 return Math.round(Math.random()*(max-min)+min)
}
