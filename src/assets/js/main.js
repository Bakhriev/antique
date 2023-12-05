const burgerMenu = () => {
	const burger = document.querySelector('.burger')
	const mobileMenu = document.querySelector('.mobile-menu')
	const overlay = document.querySelector('.overlay')
	const body = document.querySelector('body')

	const toggleActiveClass = () => {
		burger.classList.toggle('active')
		overlay.classList.toggle('active')
		mobileMenu.classList.toggle('active')
		body.classList.toggle('disable-scroll')
	}

	burger.addEventListener('click', toggleActiveClass)

	overlay.addEventListener('click', toggleActiveClass)

	window.addEventListener('resize', () => {
		const {innerWidth} = window
		if (innerWidth > 991.98) {
			burger.classList.remove('active')
			overlay.classList.remove('active')
			mobileMenu.classList.remove('active')
			body.classList.remove('disable-scroll')
		}
	})
}
burgerMenu()

const saleBlock = document.querySelector('.sale-blocks')
const forSales = [...saleBlock.querySelectorAll('.for-sale')]
const saleBtn = document.querySelector('.buying__btn')

// Сколько элементов в начале будут видны, остальное будет скрыто
const visibleCount = 10
if (window.innerWidth <= 500) {
	forSales.slice(visibleCount).forEach(elem => elem.classList.add('hide'))
}

saleBtn.addEventListener('click', () => {
	forSales.slice(visibleCount).forEach(elem => elem.classList.toggle('hide'))
})

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

const tableItems = document.querySelectorAll('.mobile-table__item')

tableItems.forEach(item => {
	const toggle = item.querySelector('.mobile-table__toggle')
	const content = item.querySelector('.mobile-table__content')
	toggle.addEventListener('click', () => {
		item.classList.toggle('active')
		content.style.maxHeight
			? (content.style.maxHeight = '')
			: (content.style.maxHeight = content.scrollHeight + 'px')
	})
})

const fileInput = document.querySelector('.custom-file__input')
const fileInputRes = document.querySelector('.custom-file__name')

fileInput.addEventListener('input', e => {
	fileInputRes.textContent = e.target.files[0].name
})
const video = document.querySelector('.determine-video video')
const videoPlay = document.querySelector('.determine-video__play')

let isPlaying = false

const playVideo = async () => {
	if (!isPlaying) {
		try {
			await video.play()
			isPlaying = true
			videoPlay.classList.add('active')
		} catch {
			console.log('Ошибка при start')
		}
	} else {
		try {
			await video.pause()
			isPlaying = false
			videoPlay.classList.remove('active')
		} catch {
			console.log('Ошибка при stop')
		}
	}
}

video.addEventListener('play', playVideo)
video.addEventListener('pause', playVideo)
videoPlay.addEventListener('click', playVideo)

//

// Coins Anim
const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="coin">
    <rect width="24" height="24" fill="none"></rect>
    <ellipse
      cx="128"
      cy="104"
      fill="none"
      stroke="#8c755e"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="12"
      rx="104"
      ry="48"
    ></ellipse>
    <line
      x1="128"
      x2="128"
      y1="152"
      y2="200"
      fill="none"
      stroke="#8c755e"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="12"
    ></line>
    <path
      fill="none"
      stroke="#8c755e"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="12"
      d="M24,104v48c0,24,40,48,104,48s104-24,104-48V104"
    ></path>
    <line
      x1="192"
      x2="192"
      y1="142.107"
      y2="190.107"
      fill="none"
      stroke="#8c755e"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="12"
    ></line>
    <line
      x1="64"
      x2="64"
      y1="142.107"
      y2="190.107"
      fill="none"
      stroke="#8c755e"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="12"
    ></line>
  </svg>
`

const svg1 = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="coin">
    <rect width="24" height="24" fill="none"></rect>
    <ellipse
      cx="128"
      cy="104"
      fill="none"
      stroke="#BE3144"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="12"
      rx="104"
      ry="48"
    ></ellipse>
    <line
      x1="128"
      x2="128"
      y1="152"
      y2="200"
      fill="none"
      stroke="#BE3144"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="12"
    ></line>
    <path
      fill="none"
      stroke="#BE3144"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="12"
      d="M24,104v48c0,24,40,48,104,48s104-24,104-48V104"
    ></path>
    <line
      x1="192"
      x2="192"
      y1="142.107"
      y2="190.107"
      fill="none"
      stroke="#BE3144"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="12"
    ></line>
    <line
      x1="64"
      x2="64"
      y1="142.107"
      y2="190.107"
      fill="none"
      stroke="#BE3144"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="12"
    ></line>
  </svg>
`
const svg2 = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="coin">
    <rect width="24" height="24" fill="none"></rect>
    <ellipse
      cx="128"
      cy="104"
      fill="none"
      stroke="#7ED7C1"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="12"
      rx="104"
      ry="48"
    ></ellipse>
    <line
      x1="128"
      x2="128"
      y1="152"
      y2="200"
      fill="none"
      stroke="#7ED7C1"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="12"
    ></line>
    <path
      fill="none"
      stroke="#7ED7C1"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="12"
      d="M24,104v48c0,24,40,48,104,48s104-24,104-48V104"
    ></path>
    <line
      x1="192"
      x2="192"
      y1="142.107"
      y2="190.107"
      fill="none"
      stroke="#7ED7C1"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="12"
    ></line>
    <line
      x1="64"
      x2="64"
      y1="142.107"
      y2="190.107"
      fill="none"
      stroke="#7ED7C1"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="12"
    ></line>
  </svg>
`

//

const icons = [svg, svg1, svg2]

const wrapper = document.querySelector('.wrapper')

let start = new Date().getTime()

const originPosition = {x: 0, y: 0}

const last = {
	starTimestamp: start,
	starPosition: originPosition,
	mousePosition: originPosition,
}

const config = {
	starAnimationDuration: 1500,
	minimumTimeBetweenStars: 250,
	minimumDistanceBetweenStars: 75,
	glowDuration: 75,
	maximumGlowPointSpacing: 10,
	colors: ['249 146 253', '252 254 255'],
	sizes: ['1.4rem', '1rem', '0.6rem'],
	animations: ['fall-1', 'fall-2', 'fall-3'],
}

let count = 0

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
	selectRandom = items => items[rand(0, items.length - 1)]

const withUnit = (value, unit) => `${value}${unit}`,
	px = value => withUnit(value, 'px'),
	ms = value => withUnit(value, 'ms')

const calcDistance = (a, b) => {
	const diffX = b.x - a.x,
		diffY = b.y - a.y

	return Math.sqrt(Math.pow(diffX, 1) + Math.pow(diffY, 1))
}

const calcElapsedTime = (start, end) => end - start

const appendElement = element => wrapper.appendChild(element),
	removeElement = (element, delay) =>
		setTimeout(() => wrapper.removeChild(element), delay)

const createStar = position => {
	const star = document.createElement('div'),
		color = selectRandom(config.colors)
	star.innerHTML = icons[Math.floor(Math.random() * 3)]

	star.className = 'star fa-solid fa-sparkle'

	star.style.left = px(position.x)
	star.style.top = px(position.y)
	star.style.animationName = config.animations[count++ % 3]
	star.style.starAnimationDuration = ms(config.starAnimationDuration)

	appendElement(star)

	removeElement(star, config.starAnimationDuration)
}

const createGlowPoint = position => {
	const glow = document.createElement('div')

	glow.className = 'glow-point'

	glow.style.left = px(position.x)
	glow.style.top = px(position.y)

	appendElement(glow)

	removeElement(glow, config.glowDuration)
}

const determinePointQuantity = distance =>
	Math.max(Math.floor(distance / config.maximumGlowPointSpacing), 1)

const updateLastStar = position => {
	last.starTimestamp = new Date().getTime()

	last.starPosition = position
}

const updateLastMousePosition = position => (last.mousePosition = position)

const adjustLastMousePosition = position => {
	if (last.mousePosition.x === 0 && last.mousePosition.y === 0) {
		last.mousePosition = position
	}
}

const handleOnMove = e => {
	const mousePosition = {x: e.clientX, y: e.pageY}

	adjustLastMousePosition(mousePosition)

	const now = new Date().getTime(),
		hasMovedFarEnough =
			calcDistance(last.starPosition, mousePosition) >=
			config.minimumDistanceBetweenStars,
		hasBeenLongEnough =
			calcElapsedTime(last.starTimestamp, now) > config.minimumTimeBetweenStars

	if (hasMovedFarEnough || hasBeenLongEnough) {
		createStar(mousePosition)

		updateLastStar(mousePosition)
	}

	updateLastMousePosition(mousePosition)
}

window.onmousemove = e => handleOnMove(e)

window.ontouchmove = e => handleOnMove(e.touches[0])

wrapper.onmouseleave = () => updateLastMousePosition(originPosition)
