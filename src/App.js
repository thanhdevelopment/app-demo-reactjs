import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" name="Home" component={Layout}></Route>
                </Switch>
            </Router>
        )
    }
}

export default App;