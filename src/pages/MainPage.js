import React from 'react';

import Table from '@material-ui/core/Table';

import TableBodyComponent from '../components/tableBodyComponent/TableBodyComponent';
import MainTableHead from '../components/MainTableHead/MainTableHead';
import TableFooterComponent from '../components/tableFooterComponent/TableFooterComponent';

function MainPage() {
	return (
		<div>
			<div className="tableWrapper">
				<Table className="table" size="small">
					<MainTableHead />
					<TableBodyComponent />
					<TableFooterComponent />
				</Table>
			</div>
		</div>
	);
}

export default MainPage;
