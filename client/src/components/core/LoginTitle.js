import React from 'react';
import Typing from 'react-typing-animation';
import styled from 'styled-components';
import logo from '../../logoLogin.svg';

const Title = styled.h1`
  font-size: 6rem;
  letter-spacing: 10px;
  margin-top: 50px;
`
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
    <Typing hideCursor="true" speed={100}>
      <Title>Welcome.</Title>
      {/* <Typing.Reset count={1} delay={500} /> */}
    </Typing>
  </div>
);

export default LoginTitle; 