import React from 'react';
import styled from 'styled-components';
import logo from '../../logoLogin.svg';

const Logo = styled.div`
  height: 120px;
  width: 120px;
  margin: auto;
  background-image: url(${logo});
  background-repeat: no-repeat;
  margin-top: 50px;
`

const LoginTitle = () => (
  <div>
    <Logo></Logo>
  </div>
);

export default LoginTitle; 