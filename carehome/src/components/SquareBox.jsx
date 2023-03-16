import React from 'react';
import styled from 'styled-components';


const Stat = styled.h1`
  transition: all 500ms;
  color: gold;
  & svg {
    width: 1.5em;
    height: 1.5em;
  }
`;

const Rounded = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: var(--color-purple);
  border: 5px solid var(--color-bg);
  top: -40px;
  transition: all 300ms;
`;

const Container = styled.div`
    width: 320px;
    height: 300px;
    display: flex;
    flex-flow: column;
    padding: 45px 5px 20px;
    align-items: center;
    justify-content: space-between;
    position: relative;
    border-radius: 5px;
    box-shadow: 10px 10px 5px 0px var(--color-light-green);
    margin-bottom: 50px;
    background-color: var(--color-bg);
    transition: all 300ms;
    &:hover ${Rounded} {
      // border: 0;        
      box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    };
    &:hover {
      border-bottom: 6px solid gold;
    }
`;

const Buttom = styled.button`
    width: 200px;
    height: 40px;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: var(--color-purple);
    color: var(--color-bg);
    &:hover {
      opacity: 0.8;
    }
`;


const List = styled.ul`
    list-style: none;
    margin: 0 15px;
`;

const ListItem = styled.li`
    margin-top: 10px;
`

const Headline = styled.h3``;


function SquareBox(props) {
  const stat = props.stat ? props.stat : '100%';
  return (
    <Container>
      <Rounded><Stat>{stat}</Stat></Rounded>
      <Headline>{props.headline}</Headline>
      <List>
      {props.point.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
      </List>
      <Buttom>Read More...</Buttom>
    </Container>
  )
}

export default SquareBox