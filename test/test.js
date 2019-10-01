import React from 'react';
import { TableHeadComponent } from '../src/components/tableHeadComponent/TableHeadComponent';
import { TableBodyComponent } from '../src/components/tableBodyComponent/TableBodyComponent';
import { TableFooterComponent } from '../src/components/tableFooterComponent/TableFooterComponent';
import renderer from 'react-test-renderer';

test('Expect to render the table head component', () => {
	const component = renderer.create(
		<TableHeadComponent />,
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Expect to render the table body component', () => {
	const component = renderer.create(
		<TableBodyComponent />,
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Expect to render the table footer component', () => {
	const component = renderer.create(
		<TableFooterComponent
			props={{
				rowsPerPageOptions: [5, 10],
				count: 10,
				rowsPerPage: 5,
				page: 0
			}}
		/>,
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
