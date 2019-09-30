import reduceReducers from 'reduce-reducers';
import * as R from 'ramda';

import { TABLE_DATA, defaultRowsPerView, defaultPage } from './constants/constants';

const initialState = {
	orderBy: 'name',
	orderDirection: 'desc',
	page: defaultPage,
	rowsPerView: defaultRowsPerView,
	tableElements: TABLE_DATA,
	displayElements: R.splitAt(defaultRowsPerView, TABLE_DATA)[defaultPage],
	splitElements: R.splitAt(defaultRowsPerView, TABLE_DATA),
};

export const sortElements = (columnName) => ({
	type: 'sortElements',
	payload: columnName,
});

export const setPage = (page) => ({
	type: 'setPage',
	payload: page,
});

export const setRowsPerView = (numberOfPages) => ({
	type: 'setRowsPerView',
	payload: numberOfPages,
});

const orderFunctions = {
	desc: (propName) => R.descend(R.prop(propName)),
	asc: (propName) => R.ascend(R.prop(propName)),
};

const mainTableReducer = (state, action) => {
	switch (action.type) {
		case 'sortElements': {
			const { orderDirection, tableElements, rowsPerView, page } = state;
			const newOrderDirection = orderDirection === 'desc' ? 'asc' : 'desc';
			const setOrderType = orderFunctions[orderDirection];
			const newOrderedTableElements = R.sort(setOrderType(action.payload), tableElements);

			const splitElements = R.splitEvery(rowsPerView, newOrderedTableElements);

			console.log(splitElements[page], 'qqqq');

			return {
				...state,
				orderBy: action.payload,
				orderDirection: newOrderDirection,
				tableElements: newOrderedTableElements,
				displayElements: splitElements[page],
				splitElements,
			};
		}

		case 'setPage': {
			console.log('setPage', action.payload);
			const page = action.payload;
			const { splitElements } = state;

			return {
				...state,
				page,
				displayElements: splitElements[page],
			};
		}

		case 'setRowsPerView': {
			const rowsPerView = action.payload;
			const { tableElements, page } = state;
			const splitElements = R.splitEvery(rowsPerView, tableElements);
			console.log('setRowsPerView', action.payload);

			return {
				...state,
				rowsPerView: action.payload,
				displayElements: splitElements[page],
			};
		}

		default:
			return state;
	}
};

const reducer = reduceReducers(initialState, mainTableReducer);

export default reducer;
