const init = {
	grayscale: 0,
	contrast: 100,
	brightness: 100,
	sepia: 0,
	saturate: 100
}

const image = document.querySelector('#color-correction-photo-image')
const reset = document.querySelector('#color-correction-photo-reset')
const imgUrl = document.querySelector('#color-correction-photo-img-url')

const grayscale = document.querySelector('#color-correction-photo-grayscale')
const contrast = document.querySelector('#color-correction-photo-contrast')
const brightness = document.querySelector('#color-correction-photo-brightness')
const sepia = document.querySelector('#color-correction-photo-sepia')
const saturate = document.querySelector('#color-correction-photo-saturate')

window.onload = resetFilterValue
reset.onclick = resetFilterValue
imgUrl.oninput = changeImg

grayscale.oninput = updateFilterValue
contrast.oninput = updateFilterValue
brightness.oninput = updateFilterValue
sepia.oninput = updateFilterValue
saturate.oninput = updateFilterValue


function updateFilterValue(){
	reset.disabled = false
	image.style.filter = `
		grayscale(${grayscale.value}%) 
		contrast(${contrast.value}%) 
		brightness(${brightness.value}%) 
		sepia(${sepia.value}%) 
		saturate(${saturate.value}%) 
	`
}

function resetFilterValue(){
	reset.disabled = true
	image.style.filter = `
		grayscale(${init.grayscale}%) 
		contrast(${init.contrast}%) 
		brightness(${init.brightness}%) 
		sepia(${init.sepia}%) 
		saturate(${init.saturate}%) 
	`
	grayscale.value = init.grayscale
	contrast.value = init.contrast
	brightness.value = init.brightness
	sepia.value = init.sepia
	saturate.value = init.saturate
}

function changeImg(){
	image.src = imgUrl.value
}