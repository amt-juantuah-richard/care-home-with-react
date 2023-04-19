import { CloseOutlined, KeyboardArrowDownOutlined, KeyboardArrowLeftOutlined, Phone } from '@mui/icons-material';
import { AppsRounded as AppsR, Close as Cls } from 'grommet-icons';
import { FcHome, FcIphone, FcPhone } from "react-icons/fc";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavigationBarData } from '../Data';
import { mobile } from '../responsive';
import image from '../assets/hart.avif'

// const Layer = styled(Lay)`
//   ${mobile({
//     height: "38px",
//     width: "38px"
//   })}
// `;

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
  display: flex;
  flex-flow: row;
`;

const Right = styled.div`
  height: 100%;
  flex: 0.7;
  position: relative;
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
  transition: border-bottom 0ms;
  & a ${Para} {
    color: #424243;
  };
  &:hover {
    background-color: #611b4b;
    border-bottom: 4px solid gold;
    color: aliceblue;
    & a ${Para} {
      color: var(--color-bg);
    };
    & ${MenuDrop} {
      display: block;
    };
  }
`;

const SideModal = styled.div`
  width: 110vw;
  height: 100vh;
  position: fixed;
  top: 0;
  margin-left: -5vw;
  display: block;
  z-index: 4;
  background-color: rgb(5 5 5 / 55%);
`;
const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const ModalWrapper = styled.div`
  height: 100%;
  width: 50%;
  position: relative;
  display: flex;
  flex-flow: column;
  padding-top: 5%;
  padding-right: 5%;
  background-color: var(--color-bg);
  border-right: 4px solid gold;
  & ${Image} {
    position: absolute;
    right: -25px;
    top: 30vw;
    border: 4px solid gold;
  };
  ${mobile({
    width: "85vw",
    paddingTop: "15%",
  })}
`;


const CloseModal = styled(CloseOutlined)`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 10px;
  padding: 5px;
  background-color: grey;
  border-radius: 50%;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;


const ModalNavigator = styled.div`
  width: 90%;
  height: 40px;
  position: absolute;
  left: 12px;
  display: flex;
  flex-flow: row;
  gap: 7px;
  border-bottom: 1px solid #9e8e99;
  border-top: 1px solid #9e8e99;
  ${mobile({
    height: "40px",
    gap: "3px",
  })};
  & button {
    flex: 1 1 0%;
    height: 100%;
    border: none;
    color: var(--color-purple);
    outline: none;
    font-size: 12px;
    font-weight: 600;
    // border-left: 1px solid #00000036;
    // border-right: 1px solid #00000036;
    // box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    ${mobile({
      fontSize: "11px",
    })};
  }
`;

const Button = styled.button``;


const Name = styled.h2`
  ${mobile({
    fontSize: "1.3rem"
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
  width: 200px;
  height: 100px;
  background-color: #611b4b;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 39px;
  ${mobile({
    width: "150px",
  })}
`;

const SideNavOpener = styled.div`
  border-radius: 4px;
  border: 2px solid gold;
  margin-left: 15px;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  gap: 3px;
  height: fit-content;
  padding: 3px;
  margin-top: 45px;
  & span {
    font-size: 13px;
    cursor: pointer;
    font-weight: 600;
    color: var(--color-bg);
    border-bottom: 2px solid gold;
    padding: 10px;
    background-color: var(--color-purple);
    border-radius: 4px;
    &:hover {
      color: gold;
    };
    ${mobile({
      fontSize: "11px",
      padding: "5px",
      borderRadius: "2px",
    })}
  };
  ${mobile({
    marginLeft: "5px",
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
  background-color: var(--color-purple);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  top: 38px;
  width: auto;
  height: auto;
  padding: 30px;
  display: flex;
  flex-flow: column;
  gap: 15px;
  align-items: right;
  border-radius: 0 0 0 18px;
`;


const MobileMenuItem = styled.div`
  // width: 100%;
  height: 30px;
  display: flex;
  margin-left: 10px;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  gap: 1px;
  position: relative;
  border-right: 2px solid gold;
  padding-right: 8px;
  & ${Para} {
    color: aliceblue;
    text-align: right;
  };
  &:hover {
    border-bottom: 2px solid gold;
    background-color: #611b4b;
    color: aliceblue;
    & ${Para} {
      color: gold;
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

const NavOneSection = styled.div`
  transition: all 500ms;
  margin-top: 10%;
  padding-left: 10%;
  padding-bottom: 10%;
  overflow: auto;
  height: auto;
  flex-flow: column;
`;
const NavTwoSection = styled(NavOneSection)``;
const NavThreeSection = styled(NavOneSection)``;
const NavFourSection = styled(NavOneSection)``;

const HeadTitle = styled.h3`
    margin-bottom: 30px;
    border-left: 5px solid var(--color-orange);
    padding-left: 15px;
`;

const UList = styled.ul`
  margin-top: 30px;
`;

const List = styled.li`
    line-height: 34px;
    margin-left: 15px;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  gap: 5px;
  margin-bottom: 15px;
  & a {
    color: var(--color-purple);
    transition: all 300ms;
    &:hover {
      border-bottom: 1px solid gold;
    }
  }
`;

function Navbar() {
  const [menuIcon, setMenuIcon] = useState('close');
  const [navOne, setNavOne] = useState(false);
  const [navTwo, setNavTwo] = useState(false);
  const [navThree, setNavThree] = useState(false);
  const [navFour, setNavFour] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  

  const handleNavOne = () => {
    setNavOne(true);
    setNavTwo(false);
    setNavThree(false);
    setNavFour(false);
  }

  const handleNavTwo = () => {
    setNavOne(false);
    setNavTwo(true);
    setNavThree(false);
    setNavFour(false);
  }

  const handleNavThree = () => {
    setNavOne(false);
    setNavTwo(false);
    setNavThree(true);
    setNavFour(false);
  }

  const handleNavFour = () => {
    setNavOne(false);
    setNavTwo(false);
    setNavThree(false);
    setNavFour(true);
  }

  const handleSideNav = () => {
    setSideNav(sideNav === true ? false : true);
  };

  const handleModalClose = (e) => {
    const modal = document.getElementById('navmodal');
    if (e.target === modal) handleSideNav();
  };
  
  return (
    <Container>
      <SideModal id='navmodal' onClick={(e) => handleModalClose(e)} style={{display: `${sideNav ? "block" : "none"}`}}>
          <ModalWrapper>
            <ModalNavigator>
              <Button 
                style={{
                  borderBottom: `${navOne ? '4px solid gold' : 'none'}`,
                  backgroundColor: `${navOne ? '#ffd7003b' : '#611b4b4a'}`
                }} 
                onClick={handleNavOne}
              >About</Button>
              <Button 
                style={{
                  borderBottom: `${navTwo ? '4px solid gold' : 'none'}`,
                  backgroundColor: `${navTwo ? '#ffd7003b' : '#611b4b4a'}`
                }}
                onClick={handleNavTwo}
              >Contact</Button>
              <Button 
                style={{
                  borderBottom: `${navThree ? '4px solid gold' : 'none'}`,
                  backgroundColor: `${navThree ? '#ffd7003b' : '#611b4b4a'}`
                }}
                onClick={handleNavThree}
              >Support</Button>
              <Button 
                style={{
                  borderBottom: `${navFour ? '4px solid gold' : 'none'}`,
                  backgroundColor: `${navFour ? '#ffd7003b' : '#611b4b4a'}`
                }}
                onClick={handleNavFour}
              >News</Button>
            </ModalNavigator><br /><br />
            <NavOneSection style={{display: `${navOne ? 'flex' : 'none'}`}}>
              <HeadTitle>About Us</HeadTitle>
              <Para>We are a Semi-Supported Independent Living Service Provider. </Para>
              <Para>At <b>Jo2jos</b>, we support young people in ways that help them achieve personally desired outcomes and assist them to direct their own lives in a meaningful way. </Para>
              <Para>Our services are designed to support young people on their pathways to independence. All support is tailored to each person’s individual needs, through structured care and support plan,</Para>
              <UList>
                  <HeadTitle><b>Our objectives:</b></HeadTitle>
                  <List>to ensure service delivery excellence</List>
                  <List>to ensure empowerment for staff</List>
                  <List>to ensure innovation in our services</List>
                  <List>to ensure service delivery excellence</List>
                  <List>to foster healthy partnerships with others</List>
              </UList>

              <UList>
                  <HeadTitle><b>Our Values:</b></HeadTitle>
                  <List>Compassion</List>
                  <List>Respect</List>
                  <List>Being positive</List>
                  <List>Working together</List>
              </UList>
            </NavOneSection>
            <NavTwoSection style={{display: `${navTwo ? 'flex' : 'none'}`}}>
              <HeadTitle><b>To Visit Our Office Location</b></HeadTitle>
              <Para><b>Our office is opened<br /> Monday - Friday: 8:30am to 5pm</b></Para>
              <ContactDetails>
                <FcHome style={{height: "30px", width: "30px"}}/>
                <Para>United Kingdom <br/>76 Jovian Way <br/>Suffolk, IP1 5AT</Para>
              </ContactDetails>
              <HeadTitle><b>To Reach Our Office Line</b></HeadTitle>
              <Para><b>Call</b></Para>              
              <ContactDetails>
                <FcPhone style={{height: "30px", width: "30px"}}/>
                <Para><a href='tel:01473316966'>01473316966</a></Para>
              </ContactDetails>
              <HeadTitle><b>To Reach Us on Mobile</b></HeadTitle>
              <Para><b>Call</b></Para>              
              <ContactDetails>
                <FcIphone style={{height: "30px", width: "30px"}}/>
                <Para><a href='tel:01473316966'>01473316966</a></Para>
              </ContactDetails>
            </NavTwoSection>
            <NavThreeSection style={{display: `${navThree ? 'flex' : 'none'}`}}>
              Nav Three
            </NavThreeSection>
            <NavFourSection style={{display: `${navFour ? 'flex' : 'none'}`}}>
              No news item at the moment
            </NavFourSection>
            <CloseModal onClick={handleSideNav}/>
            <Image src={image} alt="logo"/>
          </ModalWrapper>
      </SideModal>
      <Wrapper>
        <Left>
          <LogoContain>
            <Link to={"/"}>
              <Logo>
	 	            <Image src={image} alt='logo'/>
                <Name><Span>Jo2Jos</Span> <br/> Service</Name>
              </Logo>
            </Link>
            <LogoDown>
              <Phone />
              <Tel href='tel:01473316966'>01473316966</Tel>
            </LogoDown>
          </LogoContain>
          <SideNavOpener>
            <Para onClick={() => {handleSideNav(); handleNavOne()}}>About</Para>
            <Para onClick={() => {handleSideNav(); handleNavTwo()}}>Contact</Para>
          </SideNavOpener>
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
                    <Link to={sub.path}
                          state={{itemID: sub.id}}
                    ><MenuDropItem key={idx}>{sub.name}</MenuDropItem></Link>
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
                  {item.subs.length ? <KeyboardArrowLeftOutlined /> : '  '}
                  {item.subs.length ? <Para>{item.name}</Para> : <Link to={item.path} ><Para>{item.name}</Para></Link> }
                  { item.subs.length ?  
                  <MenuDrop>
                    {item.subs.map((sub, idx) => (
                      <Link to={sub.path}
                      state={{itemID: sub.id}}><MenuDropItem key={idx}>{sub.name}</MenuDropItem></Link>
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
