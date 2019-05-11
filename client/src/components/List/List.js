import React from 'react';
import Navigation from '../core/Navigation';
import Card from '../Card/Card';

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users : [],
            usersSort: []
        };
    }

    componentDidMount() {
        console.log('#1 ComponentDidMount');
        const url = 'http://localhost:8000/user/list';
        fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log('data', data);
            this.setState({
                users : data.result,
                usersSort: data.result
            })
        })
    }

    render() {
        // console.log('after fetch', this.state.users);
        console.log('userssort', this.state.usersSort);
        
        return(
            <div>
            <div>
            <Navigation></Navigation>
            <h1 style={{
                fontWeight: 'bold',
                fontSize: '45px',
                marginBottom: '20px',
            }}>Liste d'utilisateurs</h1>
            </div>
            <div style={{
                display: 'flex'
            }}>
            {this.state.users.map((user,index) => {
                return(
                    <Card key={index} hello={user}/>
                )
            })}
            </div>
            </div>
        )
    }
}

export default List;