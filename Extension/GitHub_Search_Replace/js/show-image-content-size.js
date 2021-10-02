
fetch(location.href).then(resp => resp.blob()).then(blob => {
	var size = blob.size;
	size = (size / 1024).toFixed(2) + ' kb';
	document.title = '(' + size + ')' + document.title;
	console.log(size);
});
