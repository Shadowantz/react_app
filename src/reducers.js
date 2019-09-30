import reduceReducers from 'reduce-reducers';
import * as R from 'ramda';

import { defaultRowsPerView, defaultPage } from './constants/constants';
import { findInObj, orderFunctions } from './utils/utils';
import { TABLE_DATA } from './constants/TABLE_DATA.js';

const initialState = {
	orderBy: 'name',
	orderDirection: 'desc',
	page: defaultPage,
	rowsPerView: defaultRowsPerView,
	tableElements: TABLE_DATA,
	displayElements: R.splitAt(defaultRowsPerView, TABLE_DATA)[defaultPage],
	splitElements: R.splitAt(defaultRowsPerView, TABLE_DATA),
};

// Actions
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

export const filterBySearch = (filterCriteria) => ({
	type: 'filterBySearch',
	payload: filterCriteria,
});

// --- END OF ACTIONS ---

const mainTableReducer = (state, action) => {
	switch (action.type) {
		case 'sortElements': {
			const { orderDirection, tableElements, rowsPerView, page } = state;
			const newOrderDirection = orderDirection === 'desc' ? 'asc' : 'desc';
			const setOrderType = orderFunctions[orderDirection];
			const newOrderedTableElements = R.sort(setOrderType(action.payload), tableElements);

			const splitElements = R.splitEvery(rowsPerView, newOrderedTableElements);

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

			return {
				...state,
				rowsPerView: action.payload,
				displayElements: splitElements[page],
			};
		}

		case 'filterBySearch': {
			const { splitElements, page } = state;
			const displayAndFilteredElements = R.filter((elem) => R.includes(
				true, findInObj(elem, action.payload),
			), splitElements[page]);

			return {
				...state,
				displayElements: displayAndFilteredElements,
			};
		}

		default:
			return state;
	}
};

const reducer = reduceReducers(initialState, mainTableReducer);

export default reducer;
