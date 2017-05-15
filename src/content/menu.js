/*
 *	author	:	yummyLcj
 *	Email	:	luchenjiemail@gmail.com
 *  Date	:	5/15/2017
 *  Params	:	{
 *  	owner,
 *  	repo,
 *  	branch,
 *  }
 *  func	:	return the menu of the posts
 *
 */
import {
	address,
	ArrayOrObject
} from '../libs/common.js';
import base64 from 'base-64';
import utf8 from 'utf8';
import fetch from 'node-fetch';

export default function(cb, params = {}) {
	let owner = params.owner;
	let repo = params.repo;
	let branch = params.branch;
	if (!owner || !repo) {
		return {}
	}
	let path = "/repos/" + owner + "/" + repo + "/contents/SUMMARY.md";
	let ref = branch || 'master';
	let url = address + path + '?ref=' + ref;
	return fetch(url).then(res => {
		return res.json()
	}).then(res => {
		if (ArrayOrObject(res) !== "Object") {
			cb({});
		} else {
			if (!!res.message) {
				cb({});
			} else {
				let contents = makeMenu(res);
				if (cb)
					cb(contents);
			}
		}

	})
}

function makeMenu(datas) {
	let content = utf8.decode(base64.decode(datas.content)).replace(/\*/g, '').split('\n').slice(1, -1);
	let menu = {};
	let temTitle = '';
	for (let i in content) {
		let data = content[i];
		//title
		if (data.indexOf('   ') === -1) {
			let [title, path] = spliceTitle(data);
			temTitle = title;
			menu[title] = {};
		} else {
			let [title, path] = spliceTitle(data);
			menu[temTitle][title] = {
				name: title,
				path: path
			}
		}
	}
	return datas;
}

function spliceTitle(data) {
	let title = data.match(/\[.*\]/)[0].slice(1, -1);
	let path = data.match(/\(.*\)/)[0].slice(1, -1);
	return [title, path];
}