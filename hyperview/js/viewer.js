var nx_pixels = 100;
var ny_pixels = 200;
var nx_blocks = 10;
var ny_blocks = 10;

function createBlocks() {
	let blocks = document.getElementById('blocks');
	let block;
	for (let x=0;x < nx_blocks;x++) {
		for (let y=0;y < ny_blocks;y++) {
			block = document.createElement('div');
			block.classList.add('area');
			block.classList.add('block');
			block.dataset.x = x;
			block.dataset.y = y;
			block.addEventListener('click', updateZoom);
			blocks.appendChild(block);
		}
	}
}

function updateZoom(event) {
	block = event.currentTarget;
	block_x = block.dataset.x;
	block_y = block.dataset.y;

}
