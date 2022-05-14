// const preloader = document.getElementById('preloader')
const themeSelectionButton = document.getElementById('theme-selection')
let moon = document.getElementById('moon')
const sun = document.getElementById('sun')
const tumbleweed = document.getElementById('tumbleweed')

window.addEventListener('load', () => {
	preloader.style.display = 'none'
	moon.classList.add('initial-rise')
	setTimeout(() => {
		tumbleweed.classList.add('roll')
	}, 6500)
	gsap.from('.left-side h5', {duration: 2, opacity: 0, delay: 1})
	gsap.from('.left-side h1', {duration: 0.5, x: -1000, delay: 1.8, ease: "expo.out"})
	gsap.from('.left-side h3 .cover', {duration: 4, left: 0, delay: 2.5, ease: "steps(32)"})
	gsap.to('.left-side h3 .cover', {duration: 1, opacity: 0, delay: 6.5})
	setTimeout(() => {
		shakeCactus();
	}, 7500)

})


themeSelectionButton.addEventListener('click', () => {
	if (checkProperty('--background-color', '#0f1108')) {
		changeProperty('--background-color', '#fff3b0')
		changeProperty('--text-color', '#0f1108')
		gsap.to('#moon', {duration: 2, y: -500})
		gsap.to('#sun', {duration: 2, y: 0})
		gsap.to('#sun', {duration: 1, opacity: 1, delay: 1})
	} else {
		changeProperty('--background-color', '#0f1108')
		changeProperty('--text-color', '#fff3b0')
		gsap.to('#moon', {duration: 2, y: 0, ease: "bounce.out"})
		gsap.to('#sun', {duration: 3, y: 500})
		gsap.to('#sun', {duration: 0.3, opacity: 0, delay: 0.1})
		setTimeout(() => {
			shakeCactus();
		}, 1000)
	}
})

const checkProperty = (property, value) => {
	return getComputedStyle(document.documentElement).getPropertyValue(property) === value
}

const changeProperty = (property, value) => {
	document.documentElement.style.setProperty(property, value)
}

const shakeCactus = () => {
	let shiver = 3;

	const tl = gsap.timeline({repeat:2, onRepeat:shiverMe })

	tl.to("#cactus", {
	 	duration: 0.05,
     	x: function(){return shiver},
     	yoyo:true,
     	repeat:1,
     	ease:Power1.easeOut,
	})

	function shiverMe(){
		shiver = 20 * getRandomArbitrary(.15,.35);
        tl.invalidate();
	}

	function getRandomArbitrary(min, max) {
	  return Math.random() * (max - min) + min;
	}
}


