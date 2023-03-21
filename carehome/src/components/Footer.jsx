// import { FacebookRounded, Instagram, Linkedin, Twitter } from '@mui/icons-material';
import { Facebook as Fb, Instagram as Inst, Linkedin as Lin, Twitter as Tw } from 'grommet-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Facebook = styled(Fb)`
    ${mobile({
        width: "34px",
        height: "34px"
    })}
`;

const Instagram = styled(Inst)`
    ${mobile({
        width: "34px",
        height: "34px"
    })}
`;


const Linkedin = styled(Lin)`
    ${mobile({
        width: "34px",
        height: "34px"
    })}
`;

const Twitter = styled(Tw)`
    ${mobile({
        width: "34px",
        height: "34px"
    })}
`;

const Container = styled.div`
    width: 100vw;
    height: auto;
    background-color: #092830;
    margin-top: -20vh;
    position: relative;
    z-index: 1;
    overflow: hidden;
    padding: 160px 50px 0 50px;
    display: flex;
    justify-content: space-between;
    flex-flow: column;
`;

const TopWhite = styled.div`
    background-color: var(--color-bg);
    height: 100vh;
    width: 100vw;
    border-radius: 0 0 0 150px;
    position: relative;
    z-index: 2;
    ${mobile({
        borderRadius: '0 0 0 80px'

    })}
`;

const Top = styled.div`
    width: 100%;
    display: flex;
    flex-flow: wrap row;
    height: auto;
    align-items: center;
    row-gap: 80px;
    margin-top: 20px;
    margin-bottom: 30px;
`;

const ListWrap = styled.div`
    flex: 1.5;
    display: flex;
    flex-flow: wrap row;
    height: auto;
    min-width: 150px;
`;

const List = styled.ul`
    list-style: none;
    flex: 1;
    min-width: 130px;
    margin-left: 20px;
`;

const Contact = styled.div`
    flex: 1;
    height: 40px;
    display: flex;
    // flex-wrap: wrap;
    align-items: center;
`;

const Number = styled.a`
    color: var(--color-bg);
    font-size: 17px;
    font-weight: 100;
    &:hover {
        color: #f0f8ff14;
        opacity: 0.8;
    }
`;

const MainContact = styled.div`
    height: 40px;
    padding-right: 15px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    color: var(--color-bg);
`;

const ContactHeadline = styled.span`
    font-weight: 500;
`;

const Socials = styled.div`
    height: 50px;
    padding-left: 15px;
    display: flex;
    align-items: center;
    border-left: 1px solid var(--color-bg);
    & svg {
        margin-right: 10px;
        font-size: 28px;
        opacity: 0.4;
        transition: all 300ms;
        &:hover {
            opacity: 1;
            transform: scale(1.2);
        }
    }
`;

const ListItem = styled.li`
    color: var(--color-bg);
    line-height: 30px;
    display: flex;
    flex-flow: nowrap row;
    & a {
        color: var(--color-bg);
        &:hover {
        color: gold;
        // opacity: 0.8;
    }
    };
    &:hover a {
        color: gold;
        // opacity: 0.6;
    }
`;

const Bottom = styled.div`
    width: 100%;
    height: 30vh;
    position: relative;
    padding-top: 30px;
    border-top: 0.5px dashed #f0f8ff14;
    overflow: hidden;
`;

const BigLetter = styled.h3`
    position: absolute;
    font-size: 200px;
    top: 40px;
    color: #f0f8ff14;
    letter-spacing: 2.5vw;
    text-align: center;
    ${mobile({
        fontSize: "80px"
    })}
`

const ListHead = styled.h3`
    color: #f0f8ff57;
    margin: 18px 0;
    text-transform: uppercase;
    font-size: 15px;
`;

const Copyright = styled.div`
    width: 100%;
    height: 80px;
    background-color: #3c3c3c;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    color: var(--color-bg);
`;

const Para = styled.p``;

function Footer() {

    const Comms = [
        <Facebook color='plain' size='large'/>, 
        <Twitter color='plain' size='large'/>, 
        <Instagram color='plain' size='large'/>, 
        <Linkedin color='plain' size='large'/>
    ]
  return (
    <>
        <TopWhite />
        <Container>
            <Top>
                <Contact>
                    <MainContact>
                        <ContactHeadline>Call Head Office:</ContactHeadline>
                        <Number href='tel:01473316966'>01473316966</Number>
                    </MainContact>
                    <Socials>
                        {Comms.map((item, index) => item)}
                    </Socials>
                </Contact>
                <ListWrap>
                    <List>
                        <ListHead>Address / Location</ListHead>
                        <ListItem>United Kingdom </ListItem>
                        <ListItem>76 Jovian Way </ListItem>
                        <ListItem>Suffolk, IP1 5AT </ListItem>
                    </List>
                    <List>
                        <ListHead>Links</ListHead>
                        <ListItem><Link to={"/about"}>About Us</Link> </ListItem>
                        <ListItem><Link to={"/support-us"}>Support Us</Link> </ListItem>
                        <ListItem><Link to={"/services"}>Services</Link> </ListItem>
                        <ListItem><Link to={"/articles"}>Articles</Link> </ListItem>
                    </List>
                    <List>
                        <ListHead>Get in touch</ListHead>
                        <ListItem>Email: <a href='mailto:joe@jo2josservice.com'>joe@jo2josservice.com</a> </ListItem>
                        <ListItem>Tel: <a href='tel:01473316966'>01473316966</a> </ListItem>
                        <ListItem>Mob: <a href='tel:+447459196375'>447459196375</a> </ListItem>
                    </List>
                </ListWrap>
            </Top>
            <Bottom>
                <BigLetter>JO2JOS</BigLetter>
            </Bottom>
        </Container>
        <Copyright><Para>Copyright © 2023 - 2025 by <b>OJ & Bridge Code House</b>, all rights reserved.<br/>Kumasi (nanamcroj@gmail.com)</Para></Copyright>
    </>
  )
}

export default Footer