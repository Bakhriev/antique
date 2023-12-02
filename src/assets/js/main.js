import {burgerMenu} from './functions/burger'

burgerMenu()

const accordions = document.querySelectorAll('.accordion')

accordions.forEach(ac => {
	const wrap = ac.querySelector('.accordion__wrapper')
	const btn = ac.querySelector('.accordion__toggle')
	btn.addEventListener('click', () => {
		ac.classList.toggle('active')
		wrap.style.maxHeight
			? (wrap.style.maxHeight = '')
			: (wrap.style.maxHeight = wrap.scrollHeight + 'px')
	})
})
