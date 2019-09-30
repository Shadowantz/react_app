import React from 'react';
// import * as R from 'ramda';
import { connect } from 'react-redux';

import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import { TableFooter } from '@material-ui/core';

import { setPage, setRowsPerView } from '../../reducers';

function TableFooterComponent(props) {
	const { elementsCount, page, rowsPerView, setRowsPerViewAction, setPageAction } = props;

	return (
		<TableFooter>
			<TableRow>
				<TablePagination
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
	},
)(TableFooterComponent);
