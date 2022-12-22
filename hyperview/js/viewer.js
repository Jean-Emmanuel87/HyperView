function registerParams() {
	let zoom = document.getElementById('card-zoom');
	zoom.style.setProperty('--xtot', nx_pixels);
	zoom.style.setProperty('--ytot', ny_pixels);
	document.getElementById('sys-name').textContent = name;
	document.getElementById('date').textContent = date;
	document.getElementById('author').textContent = author;
}

function createBlocks() {
	let blocks = document.getElementById('blocks');
	let block, radio, x1, x2, y1, y2;
	let rows_template = '';
	let columns_template = '';
	for (let y=0;y < ny_blocks;y++) {
		y1 = Math.round(ny_pixels * y/ny_blocks);
		y2 = Math.round(ny_pixels * (y+1)/ny_blocks);
		for (let x=0;x < nx_blocks;x++) {
			x1 = Math.round(nx_pixels * x/nx_blocks);
			x2 = Math.round(nx_pixels * (x+1)/nx_blocks);
			block = document.createElement('div');
			block.classList.add('area');
			block.classList.add('block');
			block.dataset.x1 = x1;
			block.dataset.x2 = x2;
			block.dataset.y1 = y1;
			block.dataset.y2 = y2;
			block.dataset.for = "block_x"+x+"y"+y;
			block.addEventListener('click', updateZoom);
			radio = document.createElement('input');
			radio.type = "radio";
			radio.name = "block";
			radio.id = block.dataset.for;
			blocks.appendChild(radio);
			blocks.appendChild(block);
			if (y == 0) { rows_template += (x2-x1) + "fr "; }
		}
		columns_template += (y2-y1) + "fr ";
	}
	blocks.style.gridTemplateRows = rows_template;
	blocks.style.gridTemplateColumns = columns_template;
}

function createPixels(x1, x2, y1, y2) {
	let pixels = document.getElementById('pixels');
	pixels.innerHTML = '';
	let spectra = document.getElementById('spectra');
	spectra.innerHTML = '';
	let radio;
	for (let y=y1;y < y2;y++) {
		for (let x=x1;x < x2;x++) {
			pixel = document.createElement('div');
			pixel.classList.add('area');
			pixel.classList.add('pixel');
			pixel.dataset.x = x;
			pixel.dataset.y = y;
			pixel.dataset.for = "spectrum_x"+x+"y"+y;
			pixel.addEventListener('mouseover', updateSpectrum);
			pixels.appendChild(pixel);
			radio = document.createElement('input');
			radio.type = "radio";
			radio.name = "spectrum";
			radio.id = pixel.dataset.for;
			spectra.appendChild(radio);
			spectrum = document.createElement('img');
			spectrum.src = "data/spectrum_x"+x+"y"+y+".png";
			spectra.appendChild(spectrum);
		}
	}
}

function updateZoom(event) {
	let block = event.currentTarget;
	let x1 = block.dataset.x1;
	let x2 = block.dataset.x2;
	let y1 = block.dataset.y1;
	let y2 = block.dataset.y2;
	let zoom = document.getElementById('card-zoom');
	zoom.style.setProperty('--x1', x1);
	zoom.style.setProperty('--x2', x2);
	zoom.style.setProperty('--y1', y1);
	zoom.style.setProperty('--y2', y2);
	document.getElementById(block.dataset.for).checked = true;
	createPixels(
		parseInt(x1),
		parseInt(x2),
		parseInt(y1),
		parseInt(y2)
	);
}

function updateSpectrum(event) {
	let pixel = event.currentTarget;
	let radio = document.getElementById(pixel.dataset.for);
	radio.checked = true;
}

function setup() {
	registerParams();
	createBlocks();
}

document.addEventListener('DOMContentLoaded', setup);
