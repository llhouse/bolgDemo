export const address = 'https://api.github.com';

export const ArrayOrObject = function(target) {
	let dam = typeof target === 'object';
	if (!dam) {
		console.warn('The target you want to validate isn\'t legal!');
		return false;
	}
	let _target = JSON.stringify(target);
	return _target[0] === '[' ? "Array" : "Object";
}