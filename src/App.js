import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Companies from './containers/Companies';
import AddCompany from './containers/AddCompany';
import './App.css';

export default props => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Companies} />
				<Route path="/createStartup" component={AddCompany} />
			</Switch>
		</BrowserRouter>
	);
};
