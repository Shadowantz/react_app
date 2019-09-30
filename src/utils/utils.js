import * as R from 'ramda';

export function debounceUtility(func, wait, immediate) {
	let timeout;

	return function () {
		const context = this;
		const args = arguments; // eslint-disable-line
		const callNow = immediate && !timeout;

		clearTimeout(timeout);

		timeout = setTimeout(() => {
			timeout = null;

			if (!immediate) {
				func.apply(context, args);
			}
		}, wait);

		if (callNow) func.apply(context, args);
	};
}

const toStringToLower = (el) => R.toLower(R.toString(el));

export function findInObj(obj, elemToFind) {
	return R.map((elem) => {
		const toFind = toStringToLower(elemToFind);
		const findIn = toStringToLower(obj[elem]);

		return R.includes(toFind, findIn);
	}, R.keys(obj));
}

export const orderFunctions = {
	desc: (propName) => R.descend(R.prop(propName)),
	asc: (propName) => R.ascend(R.prop(propName)),
};
