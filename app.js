const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const  container = document.querySelector('.container')
const slidesCount = mainSlide.children.length

const heightScreen = container.clientHeight 
let activeSlide = 0
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

const changeSlide = (direction) => {
	if (direction === 'up') {
		activeSlide++
		if (activeSlide === slidesCount) {
			activeSlide = 0
		}
	}
	if (direction === 'down') {
		activeSlide--
		if (activeSlide < 0) {
			activeSlide = slidesCount - 1
		}
	}

	mainSlide.style.transform = `translateY(-${heightScreen * activeSlide}px)`
	sidebar.style.transform = `translateY(${heightScreen * activeSlide}px)`

}

upBtn.addEventListener('click', () => {
	changeSlide('up')
})

downBtn.addEventListener('click', () => {
	changeSlide('down')
})