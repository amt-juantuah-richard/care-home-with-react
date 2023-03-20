// import { FacebookRounded, Instagram, Linkedin, Twitter } from '@mui/icons-material';
import { Facebook, Instagram, Linkedin, Twitter } from 'grommet-icons';
import React from 'react';
import styled from 'styled-components';

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
    align-items: center;
    min-width: 150px;
`;

const List = styled.ul`
    list-style: none;
    flex: 1;
    min-width: 130px;
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
`;

const Bottom = styled.div`
    width: 100%;
    height: 30vh;
    position: relative;
    padding-top: 30px;
    border-top: 0.5px dashed #f0f8ff14;
`;

const BigLetter = styled.h3`
    position: absolute;
    font-size: 200px;
    top: 40px;
    color: #f0f8ff14;
    letter-spacing: 2.5vw;
    text-align: center;
`

const ListHead = styled.h3`
    color: #f0f8ff57;
    margin-bottom: 18px;
`;

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
                        <ListHead>About Us</ListHead>
                        <ListItem>Est culpa nulla </ListItem>
                        <ListItem>Est culpa nulla </ListItem>
                        <ListItem>Est culpa nulla </ListItem>
                        <ListItem>Est culpa nulla </ListItem>
                    </List>
                    <List>
                        <ListHead>Xxxxx</ListHead>
                        <ListItem>Est culpa nulla </ListItem>
                        <ListItem>Est culpa nulla </ListItem>
                        <ListItem>Est culpa nulla </ListItem>
                        <ListItem>Est culpa nulla </ListItem>
                    </List>
                    <List>
                        <ListHead>Xxxxx</ListHead>
                        <ListItem>Est culpa nulla </ListItem>
                        <ListItem>Est culpa nulla </ListItem>
                        <ListItem>Est culpa nulla </ListItem>
                        <ListItem>Est culpa nulla </ListItem>
                    </List>
                </ListWrap>
            </Top>
            <Bottom>
                <BigLetter>JO 2 JOS</BigLetter>
            </Bottom>
        </Container>
    </>
  )
}

export default Footer