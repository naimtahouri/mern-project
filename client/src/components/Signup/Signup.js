import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import API from '../../utils/API';
import SignupTitle from '../core/SignupTitle';
import styled from 'styled-components';

const SignupContainer = styled.div`
    position: relative;
`

const BackButton = styled.button`
    height: 50px;
    width: 50px;
    border-radius: 50px;
    border: none;
    background-color: white;
    position: absolute;
    left: 80px;
    top: -20px;
    box-shadow: 2px 2px 80px grey;
    opacity: 0.8;
    color: #333;
`

const Password = styled.div`
    display: flex;
    width: 65%;
    margin: auto;
    justify-content: space-between;
`

export class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            firstName: "",
            secondName: "",
            password: "",
            cpassword: "",
            date: "",
            numero: Number,
            styleInput: {
                backgroundColor: 'rgba(255,255,255,0.05)',
                width: '65%',
                height: '60px',
                margin: 'auto',
                borderRadius: '30px',
                border: '1px solid white',
                boxShadow: 'none',
                textAlign: 'center',
                fontSize: '2.3rem',
                color: 'white',
                letterSpacing: '2px',
            },
            styleInputPassword: {
                backgroundColor: 'rgba(255,255,255,0.05)',
                width: '95%',
                height: '60px',
                // margin: 'auto',
                borderRadius: '30px',
                border: '1px solid white',
                boxShadow: 'none',
                textAlign: 'center',
                fontSize: '2.3rem',
                color: 'white',
                letterSpacing: '2px',
            },
            styleButton: {
                backgroundColor: 'rgba(255,255,255,1)',
                width: '65%',
                height: '60px',
                margin: 'auto',
                borderRadius: '30px',
                boxShadow: 'none',
                marginTop: '30px', 
                fontSize: '2.3rem',
                letterSpacing: '2px'
            },
        }
        this.handleChange.bind(this);
        this.goBack.bind(this);
        this.send.bind(this);
    }


    componentDidMount() {
        console.log('Parent did mount.');
    }

    goBack = event => {
        window.location = "/"
    }

    send = event => {
        if(this.state.email.length === 0) {
            return;
        }
        if(this.state.password.length === 0 || this.state.password !== this.state.cpassword){
            return;
        }
        if(this.state.firstName.length === 0) {
            return;
        }
        if(this.state.numero < 10) {
            return;
        }
        if(this.state.numero === 0) {
            return;
        }
        if(this.state.password === 0) {
            return;
        }
        if(this.state.cpassword !== this.state.password) {
            return;
        }
        if(this.state.password < 6) {
            return;
        }
        if(this.state.status !== this.state.statusdefine) {
            return;
        }
        var _send = {
            email: this.state.email,
            firstName: this.state.firstName,
            secondName: this.state.secondName,
            password: this.state.password,
            date: this.state.date,
            numero: this.state.numero,
        }
        API.signup(_send).then(function(data){
            localStorage.setItem('token', data.data.token);
            window.location = "/dashboard"
        },function(error){
            console.log(error);
            return;
        })
    }    
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    render() {
        return(
            <SignupContainer className="Login">
                <BackButton
                    className="big"
                    onClick={this.goBack}
                    block
                    type="submit"
                    >
                    <i style={{ padding: '2px 4px 0 0' }} className="fas fa-angle-left fa-3x"></i>
                </BackButton>

                <SignupTitle></SignupTitle>

                <FormGroup 
                    controlId="firstName" 
                    bsSize="large"
                    style={{
                        position:'relative',
                        marginTop: '50px',
                        marginBottom: '30px',

                    }}
                >
                    <ControlLabel
                        style={{
                            position: 'absolute',
                            right: 'calc(16.3%)',
                            top: '-2px',
                            transform: 'scale(2.5) rotate(15deg)',
                        }}
                    >prénom
                    </ControlLabel>
                    <FormControl style={this.state.styleInput}  type="text" value={this.state.firstName} onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup 
                    controlId="secondName" 
                    bsSize="large"
                    style={{
                        position:'relative',
                        marginBottom: '30px',
                    }}
                >
                    <ControlLabel
                        style={{
                            position: 'absolute',
                            right: 'calc(16.3%)',
                            top: '-2px',
                            transform: 'scale(2.5) rotate(15deg)',
                        }}
                    >Nom
                    </ControlLabel>
                    <FormControl style={this.state.styleInput}  type="text" value={this.state.secondName} onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup
                    controlId="email"
                    bsSize="large"
                    style={{
                        position:'relative',
                        marginBottom: '30px',
                    }}
                >
                    <ControlLabel
                        style={{
                            position: 'absolute',
                            right: 'calc(16.3%)',
                            top: '-2px',
                            transform: 'scale(3) rotate(15deg)',
                        }}
                    >@</ControlLabel>
                    <FormControl style={this.state.styleInput}  type="email" value={this.state.email} onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup 
                    controlId="date" 
                    bsSize="large"
                    style={{
                        position:'relative',
                        marginTop: '50px',
                        marginBottom: '30px',

                    }}
                >
                    <ControlLabel
                        style={{
                            position: 'absolute',
                            // right: 'calc(16.3%)',
                            top: '-35px',
                            // transform: 'scale(2.5) rotate(15deg)',
                            fontSize : '18px',
                            // left : '55px'
                        }}
                    >date de disponibilité<em style={{color:'red'}}> *</em>
                    </ControlLabel>
                    <FormControl style={this.state.styleInput}  type="text"  onChange={this.handleChange}/>
                </FormGroup>

                <Password>
                    <FormGroup 
                        controlId="password" 
                        bsSize="large"
                        style={{
                            position:'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                        }}
                    >
                        <ControlLabel
                            style={{
                                position: 'absolute',
                                right: 'calc(4%)',
                                top: '12px',
                                transform: 'scale(5.2) rotate(24deg)',
                            }}
                        >*
                        </ControlLabel>
                        <FormControl style={this.state.styleInputPassword}  value={this.state.password} onChange={this.handleChange} type="password"/>
                    </FormGroup>

                    <FormGroup 
                        controlId="cpassword" 
                        bsSize="large"
                        style={{
                            position:'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                        }}
                    >
                        <ControlLabel
                            style={{
                                position: 'absolute',
                                right: 'calc(7.2%)',
                                top: '10px',
                                transform: 'scale(4.5) rotate(22deg)',
                            }}
                        >*²
                        </ControlLabel>
                        <FormControl style={this.state.styleInputPassword}  value={this.state.cpassword} onChange={this.handleChange} type="password"/>
                    </FormGroup>

                </Password>

                <FormGroup 
                    controlId="numero" 
                    bsSize="large"
                    style={{
                        position:'relative',
                        marginBottom: '30px',
                    }}
                >
                    <ControlLabel
                        style={{
                            position: 'absolute',
                            right: 'calc(16.3%)',
                            top: '-2px',
                            transform: 'scale(2.5) rotate(15deg)',
                        }}
                    >Numéro
                    </ControlLabel>
                    <FormControl style={this.state.styleInput}  type="tel" onChange={this.handleChange}/>
                </FormGroup>

                <Button
                className="big"
                onClick={this.send}
                block
                type="submit"
                style={this.state.styleButton}
                >
                Inscription
                </Button>

                <p style={{
                    marginTop : '20px',
                    marginBottom : '20px'
                    }}><em>* Date de disponbilité : format // JJ/MM/AAAA  </em></p>
            </SignupContainer>
        )
    }
}