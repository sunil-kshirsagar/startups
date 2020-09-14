import React, { Component } from 'react';
import Form from '../../components/Form';

const title = 'Create New Startup';

class AddCompany extends Component {
  render() {
    return (
      <div>
        <nav className="app-header layout-row align-items-center justify-content-center">
          <div className="layout-row align-items-center">
            <h4 id="app-title" data-testid="app-title" className="app-title">{title}</h4>
          </div>
        </nav>
        <Form />
      </div>
    );
  }
}

export default AddCompany;
