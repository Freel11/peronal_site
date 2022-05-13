const introPills = document.querySelectorAll('.pill-slide')
const preloader = document.getElementById('preloader')
let moon = document.getElementById('moon')
const tumbleweed = document.getElementById('tumbleweed')

window.addEventListener('load', () => {
	preloader.style.display = 'none'
	moon.classList.add('initial-rise')
	setTimeout(() => {
		tumbleweed.classList.add('roll')
	}, 1500)
})
