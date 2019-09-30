import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import MainPage from './pages/MainPage.js';
import store from './store.js';

import './styles/main.scss';

ReactDom.render(
	<Provider store={store}>
		<MainPage />
	</Provider>,
	document.querySelector('#app'),
);
