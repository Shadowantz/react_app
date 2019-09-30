import React from 'react';
// import * as R from 'ramda';
import { connect } from 'react-redux';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import { TableFooter } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import { setPage, setRowsPerView, filterBySearch } from '../../reducers';
import { debounceUtility } from '../../utils/utils.js';

function TableFooterComponent(props) {
	const { elementsCount, page, rowsPerView, setRowsPerViewAction, setPageAction, filterBySearchAction } = props;

	return (
		<TableFooter>
			<TableRow>
				<TableCell
					colSpan={3}
				>
					<InputBase
						className="inputClass"
						placeholder="Search..."
						onChange={(event) => debounceUtility(filterBySearchAction(event.target.value), 300)}
					/>
					<IconButton
						aria-label="search"
					>
						<SearchIcon />
					</IconButton>
				</TableCell>
				<TablePagination
					colSpan={6}
					rowsPerPageOptions={[5, 10]}
					count={elementsCount}
					rowsPerPage={rowsPerView}
					page={page}
					backIconButtonProps={{
						'aria-label': 'previous page',
					}}
					nextIconButtonProps={{
						'aria-label': 'next page',
					}}
					onChangePage={(event, newPage) => setPageAction(newPage)}
					onChangeRowsPerPage={(event) => setRowsPerViewAction(event.target.value)}
				/>
			</TableRow>
		</TableFooter>
	);
}

export default connect(
	(state) => {
		const { page, rowsPerView, tableElements } = state;

		return {
			page,
			rowsPerView,
			elementsCount: tableElements.length,
		};
	},
	{
		setPageAction: setPage,
		setRowsPerViewAction: setRowsPerView,
		filterBySearchAction: filterBySearch,
	},
)(TableFooterComponent);
