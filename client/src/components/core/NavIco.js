import React from 'react';
import styled from 'styled-components';

const IcoGeneral = styled.div`
  padding: 2px 0 0 7px;
  width: 20px;
  height: 29px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const IcoDashed = styled.div`
  background-color: grey;
  width: 25px;
  height: 2px;
  border-radius: 10px;
`

class NavIco extends React.Component {
  render () {
    return (
      <IcoGeneral>
        <IcoDashed />
        <IcoDashed />
        <IcoDashed />
      </IcoGeneral>
    );
  }
};

export default NavIco;