import React from 'react';
import '../../App.css';

class Card extends React.Component {
    render() {
        // console.log('state in Card', this.props.hello);
        return(
            <div style={{
                backgroundColor: 'grey',
                width: '300px',
                borderRadius: '10%',
                margin: '5px'
                
            }}>
                <h1 style={{
                    textTransform: 'capitalize'
                }}>{this.props.user.firstName}</h1>
                <h2 style={{
                    textTransform: 'uppercase',
                    fontWeight: 'bold'
                }}>{this.props.user.secondName}</h2>
                <h3 style={{
                    fontStyle: 'italic',
                }}>{this.props.user.email}</h3>
                <h3><img className='tel' src='/img/tel.png' alt='icon-tel' /> {this.props.user.numero}</h3>
                <h3><img className='calendar' src='/img/calendar.png' alt='icon-calendar'/>disponibilités // {this.props.user.date}</h3>
            </div>
        )
    }
}

export default Card;