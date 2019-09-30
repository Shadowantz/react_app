import React from 'react';
import * as R from 'ramda';
import { connect } from 'react-redux';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import { sortElements } from '../../reducers';
import HEADER from '../../constants/HEADER';

function MainTableHead(props) {
	const { sortElementsAction, orderBy, orderDirection } = props;

	return (
		<TableHead>
			<TableRow>
				{R.map((headerKey) => (
					<TableCell
						key={headerKey}
						padding="default"
						sortDirection={orderDirection}
						size="small"
					>
						<TableSortLabel
							active={orderBy === headerKey}
							direction={orderDirection}
							onClick={() => sortElementsAction(headerKey)}
						>
							{HEADER[headerKey]}
						</TableSortLabel>
					</TableCell>
				), R.keys(HEADER))}
			</TableRow>
		</TableHead>
	);
}

export default connect(
	(state) => {
		const { orderBy, orderDirection } = state;

		return {
			orderBy,
			orderDirection,
		};
	},
	{
		sortElementsAction: sortElements,
	},
)(MainTableHead);
