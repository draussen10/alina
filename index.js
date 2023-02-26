const $el1 = document.querySelector('.el')
let el1_ph_idx = 0

const EL1_PHOTOS = ['https://static.tildacdn.com/tild3838-3565-4738-a236-346264346361/SNI_9130.jpg', 'https://static.tildacdn.com/tild6530-3762-4434-b031-393836363166/SNI_8961.jpg', 'https://static.tildacdn.com/tild3839-6564-4765-b631-376363356231/SNI_8914.jpg', 'https://static.tildacdn.com/tild3662-3665-4933-b835-396239663030/1.png']

$el1.querySelector('.arrow-btn-left').addEventListener('click', () => {
	if (el1_ph_idx === 0) {
		el1_ph_idx = 3
	} else {
		el1_ph_idx--
	}
	$el1.querySelector('.bgimg').style = `background-image: url(${EL1_PHOTOS[el1_ph_idx]});`
})
$el1.querySelector('.arrow-btn-right').addEventListener('click', () => {
	if (el1_ph_idx === 3) {
		el1_ph_idx = 0
	} else {
		el1_ph_idx++
	}
	$el1.querySelector('.bgimg').style = `background-image: url(${EL1_PHOTOS[el1_ph_idx]});`
})