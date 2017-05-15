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
import fetch from 'node-fetch'

export default function(cb, params = {}) {
	let path = "/repos/" + params.owner + "/" + params.repo + "/contents";
	let ref = params.branch || 'master';
	let url = address + path + '?ref=' + ref;
	fetch(url).then(res => {
		return res.json()
	}).then(res => {
		if (ArrayOrObject(res) !== "Object") {
			cb({});
		} else {
			let contents = res.map((file) => ({
				"name": file.name,
				"url": file.url,
				"type": file.type
			}));
			if (cb)
				cb(contents);
		}

	}).catch(err => {
		console.log('err:', err)
	})
}