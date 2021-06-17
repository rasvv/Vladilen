const slides = document.querySelectorAll('.slide')

slides.forEach((slide) => {
	slide.addEventListener('mouseover', () => {
		clearActiveClasses()
		slide.classList.add('active')
	})
})

const clearActiveClasses = () => {
	slides.forEach((slide) => {
		slide.classList.remove('active')
	})
}