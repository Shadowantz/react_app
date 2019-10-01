import React from 'react';

import Table from '@material-ui/core/Table';

import TableHeadComponentConnected from '../components/tableHeadComponent/TableHeadComponent';
import TableBodyComponentConnected from '../components/tableBodyComponent/TableBodyComponent';
import TableFooterComponentConnected from '../components/tableFooterComponent/TableFooterComponent';

function MainPage() {
	return (
		<div>
			<div className="tableWrapper">
				<Table className="table" size="small">
					<TableHeadComponentConnected />
					<TableBodyComponentConnected />
					<TableFooterComponentConnected />
				</Table>
			</div>
		</div>
	);
}

export default MainPage;
