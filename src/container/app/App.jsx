import React, { Component } from 'react';
import './App.css';

import DataDashboard from '../data-dashboard/DataDashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
      <DataDashboard />
      </div>
    );
  }
}

export default App;
