import React from 'react';

import Table from '@material-ui/core/Table';

import TableBodyComponent from '../components/tableBodyComponent/TableBodyComponent';
import TableHeadComponent from '../components/tableHeadComponent/TableHeadComponent';
import TableFooterComponent from '../components/tableFooterComponent/TableFooterComponent';

function MainPage() {
	return (
		<div>
			<div className="tableWrapper">
				<Table className="table" size="small">
					<TableHeadComponent />
					<TableBodyComponent />
					<TableFooterComponent />
				</Table>
			</div>
		</div>
	);
}

export default MainPage;
