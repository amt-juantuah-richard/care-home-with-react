import { KeyboardArrowDownOutlined } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 60px;
  background-color: #eaeaea;
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
  flex: 1.3;
  text-align: start;
`;

const Right = styled.div`
  height: 100%;
  flex: 0.7;
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
  margin: 0 10px;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  gap: 5px;
  transition: all 500ms;
  &:hover {
    background-color: #09f1c4;
  }
`

const Logo = styled.h2`
  margin-left: 20px;
  cursor: pointer;
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
            </MenuItem>
            <MenuItem>
              <Para>About</Para>
              <KeyboardArrowDownOutlined />
            </MenuItem>
            <MenuItem>
              <Para>Services</Para>
              <KeyboardArrowDownOutlined />
            </MenuItem>
            <MenuItem>
              <Para>More</Para>
              <KeyboardArrowDownOutlined />
            </MenuItem>
          </MenuBox>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar