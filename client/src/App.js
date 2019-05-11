import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/Dashboard.js';
import { Login } from './components/Login/Login.js';
import { Signup } from './components/Signup/Signup.js';
import { Error } from './components/Error/Error.js';
import { PrivateRoute } from './components/PrivateRoute.js';
import List from './components/List/List';
import styled from 'styled-components';
import './App.css';

const GlobalApp = styled.div`
    text-align: center;
`

class App extends Component {
        render() {
        return (
        <GlobalApp>
            <div className="App-content">
            <Router>
                <Switch>  
                    <Route exact path="/" component={Login}/>
                    <Route exact path ="/signup" component={Signup}/>

                    <PrivateRoute path='/dashboard' component={Dashboard} />
                    <PrivateRoute path='/List' component={List}/>
                    <Route component={Error} />
                </Switch>
              </Router>
            </div>
        </GlobalApp>
        );
    }
}

export default App;
