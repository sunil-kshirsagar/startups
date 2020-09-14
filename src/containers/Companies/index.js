import React, { Component } from 'react';
import Axios from 'axios';
import List from '../../components/List';
import { url } from '../../urlConfig/urls';

const title = 'Welcome To Startup World';

class Companies extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startups: []
		}
	}
	render() {
		const {startups} = this.state;
		if (!startups.length) {
			return <div>Loading....</div>;
		}
		
		return (
			<div>
				<nav className="app-header layout-row align-items-center justify-content-center">
					<div className="layout-row align-items-center">
						<h4 id="app-title" data-testid="app-title" className="app-title">{title}</h4>
					</div>
				</nav>
				<List startups={this.state.startups} />
			</div>
		);
	}

	componentDidMount() {
		Axios.get(`${url}/startup`).then(res => {
			console.log(res.data);
			this.setState({startups: res.data.startups.startups
			
			});
		}).catch(err => {
			console.log(err);
		});
	}
}

export default Companies;
