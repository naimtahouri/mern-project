import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from '../List/List.js';

import ParametresContainer from '../core/ParametresContainer';
import Navigation from '../core/Navigation';
import API from '../../utils/API';

export class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users : [],
            email : '',
            firstName : '',
            user: JSON.parse(localStorage.getItem('user')) || {},
        }
        this.disconnect.bind(this);
        this.showList.bind(this);
    }

    componentDidMount() {
        console.log('#1 ComponentDidMount');
        const url = 'http://localhost:8000/user/list';
        fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log('data', data);
            this.setState({
                users : data.result
            })
        })
    }

    disconnect = event => {
        API.logout();
        window.location = "/";
    }

    showList = event => {
        window.location = '/List';
    }

    render() {
        console.log(this.state.user)
        
        return(
            <div className="Dashboard">
                {this.state.user.hasOwnProperty('firstName') ? 
                <h1 style={{
                    fontSize:'45px',
                    fontWeight:'bold'
                }}>Bonjour <em style={{
                    textTransform: 'capitalize'
                }}>{this.state.user.firstName}</em> !</h1> : null } 
                <Navigation></Navigation>
                <Router>
                    <Switch>
                        <Route path="/" components={ParametresContainer} />
                        <Route path='/List' components={List} />
                    </Switch>
                </Router>
            </div>
        )
    }
}