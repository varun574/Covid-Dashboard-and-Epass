import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import WorldMap1 from './WorldMap1';
class Links extends Component {
    render() {
        return (
            <div>
                 <Router>
                <Link to="/Components/TableView">Data Table</Link>
                <switch>
                <Route path="/Components/TableView">
                <TableView></TableView>
                  </Route>
                  <Route path="/">
                      <WorldMap1></WorldMap1>
                  </Route>
                </switch>
            </Router>
            </div>
        )
    }
}

export default Links
