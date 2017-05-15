import {
	expect
} from 'chai'
import {
	ArrayOrObject
} from '../src/libs/common.js'

describe('数组或对象判断检测', () => {

	let testObj = {
		"test": "test"
	};
	let testArray = ["test", "test"];

	it(JSON.stringify(testObj) + '应该返回Object', () => {
		expect(ArrayOrObject(testObj)).to.be.equal('Object');
	});

	it(JSON.stringify(testArray) + '应该返回Array', () => {
		expect(ArrayOrObject(testArray)).to.be.equal('Array');
	});

	it('String类型应该返回false', () => {
		expect(ArrayOrObject('other')).to.not.be.ok;
	});

	it('Integer类型应该返回false', () => {
		expect(ArrayOrObject(123)).to.not.be.ok;
	});

	it('Float类型应该返回false', () => {
		expect(ArrayOrObject(12.3)).to.not.be.ok;
	});

	it('Boolean类型应该返回false', () => {
		expect(ArrayOrObject(true)).to.not.be.ok;
	});

})