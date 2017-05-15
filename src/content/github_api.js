let fetch = require('node-fetch');
let owner = 'llhouse';
let repo = 'bolgDemo';
let address = 'https://api.github.com';

function ArrayOrObject(target) {
	let _target = typeof target === 'object' ? JSON.stringify(target) : target;
	return _target[0] === '[' ? "Array" : "Object";
}

function getContents(cb) {
	let path = "/repos/" + owner + "/" + repo + "/contents";
	let url = address + path + '?ref=develop';
	fetch(url).then(res => {
		return res.json()
	}).then(res => {
		if (ArrayOrObject(res) !== "array") {
			cb({
				err: 'use error!'
			});
		} else {
			let contents = res.map((file) => ({
				"name": file.name,
				"url": file.url,
				"type": file.type
			}));
			cb(contents);
		}

	}).catch(err => {
		console.log('err:', err)
	})
}

function getFile(cb, filePath) {
	let path = "/repos/" + owner + "/" + repo + "/contents/" + filePath;
	let url = address + path + '?ref=develop';
	fetch(url).then(res => {
		return res.json()
	}).then(res => {
		if (ArrayOrObject(res) !== "object") {
			cb({
				err: 'use error!'
			});
		} else {
			let contents = {
				"name": res.name,
				"content": res.content,
				"url": res.url
			}
			console.log(contents)
		}
	}).catch(err => {
		console.log('err:', err)
	})
}

// getContents(() => false);
getFile(() => false, "package.json")