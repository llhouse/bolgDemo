let fetch = require('node-fetch');
let owner = 'llhouse';
let repo = 'bolgDemo';
let address = 'https://api.github.com';

function getContents() {
	let path = "/repos/" + owner + "/" + repo + "/contents";
	let url = address + path;
	fetch(url).then(res => {
		return res.json()
	}).then(res => {
		console.log(res)
	}).catch(err => {
		console.log(err)
	})
}

getContents();