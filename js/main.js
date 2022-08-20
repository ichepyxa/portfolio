const checkTheme = rootElement => {
	if (localStorage.getItem('theme') === 'dark') {
		rootElement.classList.add('dark-theme')
	}
}

const swapTheme = rootElement => {
	const theme = localStorage.getItem('theme')

	if (theme === 'dark') {
		localStorage.removeItem('theme')
		return rootElement.classList.remove('dark-theme')
	}

	localStorage.setItem('theme', 'dark')
	rootElement.classList.add('dark-theme')
}

const typedText = element => {
	return new Typed(element, {
		strings: [
			'I am Full Stack Developer',
			'I am 18 years old',
			'I am from Belarus',
		],
		typeSpeed: 100,
		loop: true,
	})
}

document.addEventListener('DOMContentLoaded', () => {
	typedText(document.getElementById('typed-text'))
	checkTheme(document.getElementById('page'))
})

document.getElementById('btn-theme').addEventListener('click', () => {
	swapTheme(document.getElementById('page'))
})
