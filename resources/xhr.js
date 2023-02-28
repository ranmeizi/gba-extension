function loadRom(url, callback) {
	// var xhr = new XMLHttpRequest();
	// xhr.open('GET', url);
	// xhr.responseType = 'arraybuffer';

	// xhr.onload = function() { callback(xhr.response) };
	// xhr.send();

	fetch(url, {responseType:'arraybuffer'})
		.then(res => {
			return res.arrayBuffer()
		})
		.then(res => callback(res))
}
