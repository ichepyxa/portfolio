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

const tabsToggle = (tabsBtns, tabsContents) => {
	const removeActiveClass = element => {
		element.classList.remove('active')
	}

	const addActiveClass = element => {
		element.classList.add('active')
	}

	const clearActiveTabs = (btns, contents) => {
		btns.forEach(btn => removeActiveClass(btn))
		contents.forEach(content => removeActiveClass(content))
	}

	tabsBtns.forEach((btn, index) => {
		btn.addEventListener('click', e => {
			if (!e.target.classList.contains('active')) {
				clearActiveTabs(tabsBtns, tabsContents)
				addActiveClass(tabsContents[index])
				addActiveClass(e.target)
			}
		})
	})
}

const initSkills = skills => {
	skills.forEach(skill => {
		const progress = skill.querySelector('.skills-item__progress')
		const percent = `${progress.dataset.percent}%`

		skill.querySelector('.skills-item__percent').innerText = percent
		progress.querySelector('span').style.width = percent
	})
}

document.addEventListener('DOMContentLoaded', () => {
	typedText(document.getElementById('typed-text'))
	checkTheme(document.getElementById('page'))
	initSkills(document.querySelectorAll('.skills-items .skills-item'))
	tabsToggle(
		document.querySelectorAll('#tabs button'),
		document.querySelectorAll('#tabs .tabs-content')
	)
})

document.getElementById('btn-theme').addEventListener('click', () => {
	swapTheme(document.getElementById('page'))
})
