const introPills = document.querySelectorAll('.pill-slide')
const preloader = document.getElementById('preloader')

window.addEventListener('load', () => {
	preloader.style.display = 'none'
})

document.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => {
		introPills.forEach((pill, index) => {
			setTimeout(() => {
				pill.classList.add('slide')
			}, index * 200)
		})
	}, 800)
})