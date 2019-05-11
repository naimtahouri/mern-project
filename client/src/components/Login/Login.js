import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import API from '../../utils/API';
import styled from 'styled-components';
import LoginTitle from '../core/LoginTitle.js';
// import styled from 'styled-components';


const BottomButtons = styled.div`
    width: 50%;
    margin: auto;
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
`

const BottomButtonItem = styled.button`
    background-color: rgba(255,255,255,0);
    border: none;
    font-size: 2rem;
    letter-spacing: 4px;
`

const BottomButtonsDashed = styled.div`
    width: 1px;
    background-color: white; 
    height: 25px;
`


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password: "",
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
        this.goSignup.bind(this);
        this.send.bind(this);
    }

    send = event => {
        if(this.state.email.length === 0){
            return;
        }
        if(this.state.password.length === 0){
            return;
        }
        API.login(this.state.email, this.state.password).then(function(data){
            console.log('data :', data);
            localStorage.setItem('token', data.data.token);
            localStorage.setItem('user', JSON.stringify(data.data.users));
            window.location = "/dashboard"
            console.log('data :', data);
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

    goSignup = event => {
        window.location = "/signup";
    }

    render() {
        return(
            <div className="Login">

                <LoginTitle></LoginTitle>

                <FormGroup 
                    controlId="email" 
                    bsSize="large"
                    style={{
                        position:'relative',
                        marginBottom: '30px',
                        marginTop: '50px',
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
                    <FormControl style={this.state.styleInput} type="email" value={this.state.email} onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup 
                    controlId="password" 
                    bsSize="large"
                    style={{
                        position:'relative',
                    }}
                >
                    <ControlLabel
                        style={{
                            position: 'absolute',
                            right: 'calc(17.2%)',
                            top: '10px',
                            transform: 'scale(5.2) rotate(22deg)',
                        }}
                    >*</ControlLabel>
                    <FormControl style={this.state.styleInput} value={this.state.password} onChange={this.handleChange} type="password"/>
                </FormGroup>

                <Button
                    className="big"
                    onClick={this.send}
                    block
                    type="submit"
                    style={this.state.styleButton}
                >
                Login
                </Button>

                <BottomButtons>
                    <BottomButtonItem
                        className="big"
                        onClick={this.goSignup}
                        type="submit"
                    >
                    Password
                    </BottomButtonItem>

                    <BottomButtonsDashed />

                    <BottomButtonItem
                        className="big"
                        onClick={this.goSignup}
                        type="submit"
                    >
                    Signup
                    </BottomButtonItem>
                </BottomButtons>

            </div>
        )
    }
}