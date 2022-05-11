const themeSelectionButton = document.getElementById('theme-selection')


themeSelectionButton.addEventListener('click', () => {
	if (checkProperty('--background-color', '#0f1108')) {
		changeProperty('--background-color', '#fff3b0')
		changeProperty('--text-color', '#0f1108')
	} else {
		changeProperty('--background-color', '#0f1108')
		changeProperty('--text-color', '#fff3b0')
	}
})

const checkProperty = (property, value) => {
	return getComputedStyle(document.documentElement).getPropertyValue(property) === value
}

const changeProperty = (property, value) => {
	document.documentElement.style.setProperty(property, value)
}