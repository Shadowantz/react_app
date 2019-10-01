import React from 'react';
import * as R from 'ramda';
import { connect } from 'react-redux';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';

function generateTableRow(elem) {
	const { ticketType, ticketNumber, ticketSummary, assignee, reporter, priority, status, estimate } = elem;

	return (
		<TableRow
			tabIndex={-1}
			key={ticketNumber}
		>
			<TableCell
				id={ticketNumber}
				size="small"
			>
				{ticketType}
			</TableCell>
			<TableCell align="center" size="small">{ticketNumber}</TableCell>
			<TableCell size="small">{ticketSummary}</TableCell>
			<TableCell size="small">{assignee}</TableCell>
			<TableCell size="small">{reporter}</TableCell>
			<TableCell size="small">{priority}</TableCell>
			<TableCell size="small">{status}</TableCell>
			<TableCell align="center" size="small">{estimate}</TableCell>
		</TableRow>
	);
}

export function TableBodyComponent(props) {
	const { displayElements } = props;

	if (!displayElements) return null;

	return (
		<TableBody>
			{R.map((tableElement) => generateTableRow(tableElement), displayElements)}
		</TableBody>
	);
}

const TableBodyComponentConnected = connect(
	(state) => {
		const { displayElements } = state;

		return {
			displayElements,
		};
	},
)(TableBodyComponent);

export default TableBodyComponentConnected;
