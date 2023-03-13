import React from 'react';
import styled from 'styled-components';


const Stat = styled.h3`
  transition: all 500ms;
  color: var(--color-bg);
`;

const Rounded = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: blue;
  border: 5px solid var(--color-bg);
  top: -40px;
  transition: all 300ms;
`;

const Container = styled.div`
    width: 270px;
    height: 230px;
    display: flex;
    padding: 5px;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 5px;
    margin-bottom: 50px;
    transition: all 300ms;
    &:hover ${Rounded} {
      // border: 0;        
      box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    };
    &:hover {
      border-bottom: 6px solid yellow;
    }
`;

const Buttom = styled.button`
    width: 200px;
    height: 40px;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: blue;
    color: var(--color-bg);
    &:hover {
      opacity: 0.8;
    }
`;


const Para = styled.p``;


function SquareBox(props) {
  
  return (
    <Container style={{backgroundColor: `${props.color || 'yellow'}`}}>
      <Rounded><Stat>{props.stat}<sup>%</sup> </Stat></Rounded>
      <Para>{props.headline}</Para>
      <Buttom>Read More...</Buttom>
    </Container>
  )
}

export default SquareBox