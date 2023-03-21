import { KeyboardArrowDownOutlined, KeyboardArrowLeftOutlined, Phone } from '@mui/icons-material';
import { AppsRounded as AppsR, Close as Cls, Layer as Lay } from 'grommet-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavigationBarData } from './Data';
import { mobile } from '../responsive';

const Layer = styled(Lay)`
  ${mobile({
    height: "34px",
    width: "34px"
  })}
`;

const AppsRounded = styled(AppsR)`
  ${mobile({
    height: "34px",
    width: "34px"
  })}
`;

const Close = styled(Cls)`
  ${mobile({
    height: "34px",
    width: "34px"
  })}
`;

const Container = styled.div`
  height: 60px;
  background-color: #eaeaea;
  position: sticky;
  padding: 0 50px;
  top: 0;
  z-index: 4;
  ${mobile({
    padding: "0 25px"
  })}
`;

const Wrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #611b4b38;
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
  ${mobile({
    display: "none"
  })}
`;

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

const Para = styled.span``;

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
  & a ${Para} {
    color: #424243;
  };
  &:hover {
    background-color: #611b4b;
    color: aliceblue;
    & a ${Para} {
      color: var(--color-bg);
    };
    & ${MenuDrop} {
      display: block;
    };
  }
`;


const Name = styled.h2`
  ${mobile({
    fontSize: "1.2rem"
  })}
`;

const Logo = styled.div`
  cursor: pointer;
  color: aliceblue;
  height: 60px;
  display: flex;
  flex-flow: row;
  align-items: center;
  gap: 10px;
  justify-content: center;
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
  ${mobile({
    width: "120px",
    height: "80px"
  })}
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

const Tel = styled.a`
  font-size: 12px;
  color: aliceblue;
  transition: all 100ms;
  &:hover {
    text-decoration: dashed;
    font-size: 14px;
  }
`;

const MobileMenu = styled.div`
  // width: 100%;
  // height: 100%;

  ${mobile({
    display: "block"
  })}
  display: none;
  justify-self: right;
  align-self: center;
  position: relative;
  &:hover {
    background-color: var(--color-purple);
    & svg {
      color: var(--color-bg);
    }
  };
`;

const MobileMenuSection = styled.div`
  position: absolute;
  right: 0;
  background-color: var(--color-light-purple);
  top: 60px;
  width: auto;
  height: auto;
  padding: 15px;
  display: flex;
  flex-flow: column;
  gap: 15px;
  align-items: right;

`;


const MobileMenuItem = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  margin-left: 10px;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  gap: 1px;
  position: relative;
  transition: all 500ms;
  & a ${Para} {
    color: aliceblue;
    text-align: right;
  };
  &:hover {
    background-color: #611b4b;
    color: aliceblue;
    & a ${Para} {
      color: var(--color-bg);
    };
    & ${MenuDrop} {
      display: block;
      position: abolute;
      top: 0;
      right: 90px;
    };
  }
`;

const Span = styled.span`
  color: steelblue !important;
`;

function Navbar() {
  const [menuIcon, setMenuIcon] = useState('close');
  
  return (
    <Container>
      <Wrapper>
        <Left>
          <LogoContain>
            <Logo>
              <Layer size='large' />
              <Name><Span>Jo2Jos</Span> <br/> Service</Name>
            </Logo>
            <LogoDown>
              <Phone />
              <Tel href='tel:01473316966'>01473316966</Tel>
            </LogoDown>
          </LogoContain>
        </Left>
        <Right>
          <MenuBox>
            {NavigationBarData.map((item, index)=> (
              
              <MenuItem key={index}>
                <Link to={item.path} ><Para>{item.name}</Para></Link>
                { item.subs.length ? 
                <><KeyboardArrowDownOutlined /> 
                <MenuDrop>
                  {item.subs.map((sub, idx) => (
                    <Link to={sub.path}><MenuDropItem key={idx}>{sub.name}</MenuDropItem></Link>
                  ))}
                </MenuDrop></>
                : ''}
              </MenuItem>
            ))}
          </MenuBox>
        </Right>
        <MobileMenu >
          {
            menuIcon === 'close' ? <AppsRounded onClick={() => (setMenuIcon(menuIcon === 'close' ? 'open' : 'close'))} size='large'/> :
          <Close onClick={() => (setMenuIcon(menuIcon === 'close' ? 'open' : 'close'))} size='large'/>}
          <MobileMenuSection style={{display: `${menuIcon === 'close' ? 'none' : 'flex'}`}}>
            {NavigationBarData.map((item, index)=> (
                
                <MobileMenuItem key={index}>
                  {item.subs.length ? <KeyboardArrowLeftOutlined /> : ''}
                  <Link to={item.path} ><Para>{item.name}</Para></Link>
                  { item.subs.length ?  
                  <MenuDrop>
                    {item.subs.map((sub, idx) => (
                      <Link to={sub.path}><MenuDropItem key={idx}>{sub.name}</MenuDropItem></Link>
                    ))}
                  </MenuDrop>
                  : ''}
                </MobileMenuItem>
              ))}
          </MobileMenuSection>
        </MobileMenu>
      </Wrapper>
    </Container>
  )
}

export default Navbar