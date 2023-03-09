import { ArrowDownward } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 60px;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 4;
`;

const Wrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  text-align: start;
`;

const Right = styled.div`
  height: 100%;
  flex: 1;
`;

const MenuBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MenuItem = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 500ms;
  &:hover {
    background-color: #09f1c4;
  }
`

const Logo = styled.h2`
  margin-left: 20px;
`;

const Para = styled.span``;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Care Home</Logo>
        </Left>
        <Right>
          <MenuBox>
            <MenuItem>
              <Para>Home</Para>
              <ArrowDownward />
            </MenuItem>
            <MenuItem>
              <Para>Home</Para>
              <ArrowDownward />
            </MenuItem>
            <MenuItem>
              <Para>Home</Para>
              <ArrowDownward />
            </MenuItem>
            <MenuItem>
              <Para>Home</Para>
              <ArrowDownward />
            </MenuItem>
          </MenuBox>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar