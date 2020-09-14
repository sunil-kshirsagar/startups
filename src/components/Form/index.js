import React, { useState } from "react";
import Axios from 'axios';
import { withRouter } from "react-router-dom";
import { url } from '../../urlConfig/urls';
import "./index.css";

const StartupForm = props => {

	const [name, setName] = useState();
	const [country, setCountry] = useState();

	const submitForm = (e) => {
		e.preventDefault();
		if (name && country) {
			Axios.post(`${url}/startup`, {
				name,
				country
			}).then(res => {
				props.history.push('/');
			}).catch(err => {
				console.log(err);
			});
		}
	};

	return (
		<div className="layout-row">
			<div className="card-actions">
				<form method="post">
					<label for="name" className="labels">Name</label>
					<input value={name} type="text" name="name" onChange={(e) => { setName(e.target.value) }} className="inputField1"/>
					<br/><br/>
					<label for="country" className="labels">Country</label>
					<input value={country} type="text" name="country" onChange={(e) => { setCountry(e.target.value) }} className="inputField2"/>
					<br/>
					<button onClick={(e) => { submitForm(e) }} className="btnColor">Save</button>
				</form>
			</div>
		</div>
	);
}

export default withRouter(StartupForm);
