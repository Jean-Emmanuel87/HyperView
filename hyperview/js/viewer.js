var nx_pixels = 100;
var ny_pixels = 200;
var nx_blocks = 10;
var ny_blocks = 10;

function createBlocks() {
	let blocks = document.getElementById('blocks');
	let block;
	for (let i=0;i < nx_blocks*ny_blocks;i++) {
		block = document.createElement('div');
		img_main.appendChild(block);
	}
}
