import {
	expect
} from 'chai'
import getMenu from '../src/content/menu.js'
describe('获取菜单的测试', () => {

	let params1 = {
		"owner": "llhouse",
		"repo": "testBook",
		"branc": "master",
	}

	let params2 = {
		"owner": "",
		"repo": "testBook",
		"branc": "master",
	}

	let params3 = {
		"owner": "llhoust",
		"repo": "",
		"branc": "master",
	}

	let params4 = {
		"owner": "llhoust",
		"repo": "testBooks",
		"branc": "master",
	}

	it('Correct params should return a object', () => {
		return getMenu((res) => {
			expect(res).to.be.an('object')
		}, params1);
	})

	it('Incorrect params(owner) should return a empty object', () => {
		return getMenu((res) => expect(res).to.be.equal({}), params2);
	})

	it('Incorrect params(repo) should return a empty object', () => {
		return getMenu((res) => expect(res).to.be.equal({}), params3);
	})

	it('Incorrect url should return a empty object', () => {
		return getMenu((res) => expect(JSON.stringify(res)).to.be.equal("{}"), params4);
	})

})