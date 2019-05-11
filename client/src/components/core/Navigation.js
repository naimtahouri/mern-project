import React from 'react';
import NavIco from './NavIco';
import styled from 'styled-components'
import { Button } from "react-bootstrap";
import API from '../../utils/API';



const Nav = styled.div`
  border: 1px solid grey;
  border-left: none;
  transition : all 0.4s;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  position: absolute;
  top: 18px;
`

const OpenNav = styled.div`
  width: 100%;
  cursor: pointer;
`

const OpenNavIco = styled.h1`
  margin-top: 10px;
  padding-right: 20px;
  text-align: right;
`

const NavItem = styled.p`
  padding-left: 20px;
  text-align: left;
  transition : all 0.4s;
  margin-top: 20px;
  text-align: center;
`

class Navigation extends React.Component {

  state= {
    isClicked: false,
  }

  constructor(props){
    super(props);
    this.disconnect.bind(this);
  }
  disconnect = event => {
      API.logout();
      window.location = "/";
  }

  showList = event => {
    window.location = '/List';
}

showDashboard = event => {
  window.location = '/Dashboard';
}
  render () {
    return(

      <Nav
        style = {{
          width:
          this.state.isClicked ?
          '180px' : '45px',
          opacity:
          this.state.isClicked ?
          '0.8' : '1',
          boxShadow:
          this.state.isClicked ?
          '0px 0px 10px lightgrey' : '0px 0px 0px white',
          height:
          this.state.isClicked ?
          '300px' : '55px',
          backgroundColor :
          this.state.isClicked ?
          'black' : 'rgba(0,0,0,0)'
      }}>

        <OpenNav>

          <OpenNavIco
          onClick={() => {
            this.setState({
              isClicked: !this.state.isClicked,
            })
        }}>
            <NavIco />
          </OpenNavIco>

          <NavItem
              style = {{
                opacity:
                this.state.isClicked ?
                '1' : '0',
                transition:
                this.state.isClicked ?
                'all 1.5s' : 'all 0.15s',
              }}>
              <Button
                  onClick={this.showDashboard}
                  type="submit"
                  >
                  Dashboard
                </Button>
            </NavItem>

            <NavItem
              style = {{
                opacity:
                this.state.isClicked ?
                '1' : '0',
                transition:
                this.state.isClicked ?
                'all 1.5s' : 'all 0.15s',
              }}>
              <Button
                  type="submit"
                  >
                  Editier Profil
                </Button>
            </NavItem>
          
          <NavItem
            style = {{
              opacity:
              this.state.isClicked ?
              '1' : '0',
              transition:
              this.state.isClicked ?
              'all 1.5s' : 'all 0.15s',
            }}>
             <Button 
             onClick={this.showList}
             type='submit'>
                Liste d'utilisateurs
              </Button>
          </NavItem>

          <NavItem
            style = {{
              opacity:
              this.state.isClicked ?
              '1' : '0',
              transition:
              this.state.isClicked ?
              'all 1.5s' : 'all 0.15s',
            }}>
             <Button
                onClick={this.disconnect}
                type="submit"
                >
                Se déconnecter
              </Button>
          </NavItem>
         
        </OpenNav>

      </Nav>
    );
  }
};

export default Navigation;