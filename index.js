const $el1 = document.querySelector('.el:nth-of-type(1)')
const $el2 = document.querySelector('.el:nth-of-type(2)')
const $el3 = document.querySelector('.el:nth-of-type(3)')
const $el4 = document.querySelector('.el:nth-of-type(4)')
let el1_ph_idx = 0
let el2_ph_idx = 0
let el3_ph_idx = 0
let el4_ph_idx = 0

const EL1_PHOTOS = ['https://static.tildacdn.com/tild3566-6131-4461-b233-643664663135/1.jpg', 'https://static.tildacdn.com/tild6438-6539-4334-b731-363639653037/2.jpg', 'https://static.tildacdn.com/tild3262-3364-4438-b836-326464643533/3.jpg', 'https://static.tildacdn.com/tild3763-3063-4131-a665-383631653038/4.jpg']
const EL2_PHOTOS = ['', '', '', '']
const EL3_PHOTOS = ['', '', '', '']
const EL4_PHOTOS = ['https://static.tildacdn.com/tild3366-6631-4737-b633-626334356636/4_1-min.JPG', 'https://static.tildacdn.com/tild6534-6430-4565-a236-363766326632/4_2-min.JPG', 'https://static.tildacdn.com/tild3735-3766-4539-a138-306234626166/4_3-min.JPG']

$el1.querySelector('.arrow-btn-left').addEventListener('click', () => {
	if (el1_ph_idx === 0) {
		el1_ph_idx = EL1_PHOTOS.length - 1
	} else {
		el1_ph_idx--
	}
	$el1.querySelector('.bgimg').style = `background-image: url(${EL1_PHOTOS[el1_ph_idx]});`
	checkLastOfMobile($el1, el1_ph_idx, EL1_PHOTOS)
})
$el1.querySelector('.arrow-btn-right').addEventListener('click', () => {
	if (el1_ph_idx === EL1_PHOTOS.length - 1) {
		el1_ph_idx = 0
	} else {
		el1_ph_idx++
	}
	$el1.querySelector('.bgimg').style = `background-image: url(${EL1_PHOTOS[el1_ph_idx]});`
	checkLastOfMobile($el1, el1_ph_idx, EL1_PHOTOS)
})

$el2.querySelector('.arrow-btn-left').addEventListener('click', () => {
	if (el2_ph_idx === 0) {
		el2_ph_idx = EL2_PHOTOS.length - 1
	} else {
		el2_ph_idx--
	}
	$el2.querySelector('.bgimg').style = `background-image: url(${EL2_PHOTOS[el2_ph_idx]});`
	checkLastOfMobile($el2, el2_ph_idx, EL2_PHOTOS)
})
$el2.querySelector('.arrow-btn-right').addEventListener('click', () => {
	if (el2_ph_idx === EL2_PHOTOS.length - 1) {
		el2_ph_idx = 0
	} else {
		el2_ph_idx++
	}
	$el2.querySelector('.bgimg').style = `background-image: url(${EL2_PHOTOS[el2_ph_idx]});`
	checkLastOfMobile($el2, el2_ph_idx, EL2_PHOTOS)
})

$el3.querySelector('.arrow-btn-left').addEventListener('click', () => {
	if (el3_ph_idx === 0) {
		el3_ph_idx = EL3_PHOTOS.length - 1
	} else {
		el3_ph_idx--
	}
	$el3.querySelector('.bgimg').style = `background-image: url(${EL3_PHOTOS[el3_ph_idx]});`
	checkLastOfMobile($el3, el3_ph_idx, EL3_PHOTOS)
})
$el3.querySelector('.arrow-btn-right').addEventListener('click', () => {
	if (el3_ph_idx === EL3_PHOTOS.length - 1) {
		el3_ph_idx = 0
	} else {
		el3_ph_idx++
	}
	$el3.querySelector('.bgimg').style = `background-image: url(${EL3_PHOTOS[el3_ph_idx]});`
	checkLastOfMobile($el3, el3_ph_idx, EL3_PHOTOS)
})

$el4.querySelector('.arrow-btn-left').addEventListener('click', () => {
	if (el4_ph_idx === 0) {
		el4_ph_idx = EL4_PHOTOS.length - 1
	} else {
		el4_ph_idx--
	}
	$el4.querySelector('.bgimg').style = `background-image: url(${EL4_PHOTOS[el4_ph_idx]});`
	checkLastOfMobile($el4, el4_ph_idx, EL4_PHOTOS)
})
$el4.querySelector('.arrow-btn-right').addEventListener('click', () => {
	if (el4_ph_idx === EL4_PHOTOS.length - 1) {
		el4_ph_idx = 0
	} else {
		el4_ph_idx++
	}
	$el4.querySelector('.bgimg').style = `background-image: url(${EL4_PHOTOS[el4_ph_idx]});`
	checkLastOfMobile($el4, el4_ph_idx, EL4_PHOTOS)
})

function checkLastOfMobile(el, idx, array) {
	if (document.documentElement.clientWidth < 768) {
		if (idx === array.length - 1) {
			el.querySelector('.bgimg').classList.add('last')
			el.querySelector('.el-pre_title').style = 'top: 20%;'
			el.querySelector('.el-title').style = 'top: 28%;'
			el.querySelector('.el-body').style = 'top: 38%;'
		} else {
			el.querySelector('.el-pre_title').style = el.querySelector('.el-title').style = el.querySelector('.el-body').style = ''
			el.querySelector('.bgimg').classList.remove('last')
		}
	}
}