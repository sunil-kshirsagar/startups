import React from "react";
import { withRouter } from "react-router-dom";
import "./index.css";

const List = props => {

	function navigateToForm() {
		props.history.push('/createStartup');
	}

	return (
		<div>
			<p className="listHeading">List of Startups</p>
			<div className="card-actions">
				{props.startups.map((startup) => {
					return (
						<div className="companiesList"
							key={startup.id}
						>{`${startup.name}, ${startup.country}`}</div>
					);
				})}
			</div>
			<button type="button" onClick={navigateToForm} className="btnCss">Create New</button>
		</div>
	);
}

export default withRouter(List);
