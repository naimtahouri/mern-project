import React from 'react';
import '../../App.css';

class Card extends React.Component {
    render() {
        // console.log('state in Card', this.props.hello);
        return(
            <div style={{
                backgroundColor: 'grey',
                width: '300px',
                
            }}>
                <h1>{this.props.hello.firstName}</h1>
                <h2>{this.props.hello.secondName}</h2>
                <h3>{this.props.hello.email}</h3>
                <h3>tel // {this.props.hello.numero}</h3>
                <h3>date de disponiblité // {this.props.hello.date}</h3>
            </div>
        )
    }
}

export default Card;