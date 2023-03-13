import { KeyboardArrowDownOutlined, Phone } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 60px;
  background-color: #eaeaea;
  position: sticky;
  padding: 0 50px;
  top: 0;
  z-index: 4;
`;

const Wrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #611b4b;
`;

const Left = styled.div`
  flex: 1.3;
  text-align: start;
  position: relative;
`;

const Right = styled.div`
  height: 100%;
  flex: 0.7;
`;

const MenuBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  // justify-content: space-between;
  align-items: center;
`

const MenuDrop = styled.ul`
  position: absolute;
  display: none;
  top: 60px;
  width: 200px;
  right: 0;
  background: #eaeaea;
  height: auto;
  padding: 10px 20px 20px 10px;
  border-radius: 0 20px 0 20px;
`;

const MenuDropItem = styled.li`
  list-style: none;
  border-bottom: 0.5px dashed rgb(0 0 0 / 42%);
  color: rgb(0, 0, 0);
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: end;
  text-align: right;
  font-size: 13px;
  transition: all 300ms;
  &:hover {
    margin-right: 5px;
    font-weight: 700;
  }
`;


const MenuItem = styled.div`
  width: 96px;
  height: 100%;
  display: flex;
  margin-left: 10px;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  gap: 1px;
  position: relative;
  transition: all 500ms;
  &:hover {
    background-color: #611b4b;
    color: aliceblue;

    & ${MenuDrop} {
      display: block;
    }
  }
`

const Logo = styled.h2`
  cursor: pointer;
  color: aliceblue;
  height: 60px;
  display: flex;
  align-items: center;
`;

const LogoContain = styled.div`
  position: absolute;
  width: 200px;
  height: 100px;
  background-color: #611b4b;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: -30px;
`;

const LogoDown = styled.div`
  height: 40px;
  width: 100%;
  border-top: 1px solid #eaeaea;
  display: flex;
  align-items: center;
  font-style: italic;
  justify-content: center;
  color: aliceblue;
`;

const Para = styled.span``;

const Tel = styled.a`
  font-size: 12px;
  color: aliceblue;
  transition: all 100ms;
  &:hover {
    text-decoration: dashed;
    font-size: 14px;
  }
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <LogoContain>
            <Logo>Care Home</Logo>
            <LogoDown>
              <Phone />
              <Tel href='tel:03030303030303'>03030303030303</Tel>
            </LogoDown>
          </LogoContain>
        </Left>
        <Right>
          <MenuBox>
            <MenuItem>
              <Para>Home</Para>
            </MenuItem>
            <MenuItem>
              <Para>About</Para>
              <KeyboardArrowDownOutlined />
              <MenuDrop>
                <MenuDropItem>Our Organisation</MenuDropItem>
                <MenuDropItem>Mission Statement</MenuDropItem>
                <MenuDropItem>Who We Support</MenuDropItem>
              </MenuDrop>
            </MenuItem>
            <MenuItem>
              <Para>Services</Para>
              <KeyboardArrowDownOutlined />
              <MenuDrop>
                <MenuDropItem>Counselling and Personal Support </MenuDropItem>
                <MenuDropItem>Supported Accomodation</MenuDropItem>
                <MenuDropItem>Escort Service User</MenuDropItem>
                <MenuDropItem>Religion and Culture</MenuDropItem>
                <MenuDropItem>Training and Development</MenuDropItem>
              </MenuDrop>
            </MenuItem>
            <MenuItem>
              <Para>More</Para>
              <KeyboardArrowDownOutlined />
              <MenuDrop>
                <MenuDropItem>Contact </MenuDropItem>
                <MenuDropItem>Young People </MenuDropItem>
                <MenuDropItem>Local Authorities</MenuDropItem>
                <MenuDropItem>Gallery</MenuDropItem>
                <MenuDropItem>Find Other Service Providers</MenuDropItem>
                <MenuDropItem>Career</MenuDropItem>
              </MenuDrop>
            </MenuItem>
          </MenuBox>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar