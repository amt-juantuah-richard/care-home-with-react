import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { OtherImages } from './Data';
import { Link } from 'react-router-dom';

export const SmallContain = styled.div`
    width: 100vw;
    height: 50vh;
    margin: 50px 0;
    display: flex;
`;

const ReachOut = styled(SmallContain)`
  background-color: var(--color-purple);
  flex-flow: row;
  justify-content: space-around;
  ${mobile({
    flexFlow: "column",
    padding: "20px"
  })}
`;

const EqualSection = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  ${mobile({
    height: "auto"
  })}
`;

const Image1 = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: -18px;
  left: -20px;
  transform: rotate(30deg);
  z-index: 1;
`;

const Image2 = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  background-image: url(${props => props.im});
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--color-bg);
  border: 5px solid gold;
  top: 70px;
  z-index: 2;
  ${mobile({
    position: "relative",
    width: "150px",
    height: "150px",
    top: "0"
  })}
`;

const Button = styled.button`
  height: 70px;
  width: 200px;
  border: none;
  outline: none;
  background-color: gold;
  border-radius: 8px;
  font-size: 20px;
  color: var(--color-purple);
  &:hover {
    background-color: var(--color-purple);
    color: gold;
    border: 3px solid gold;
  };
  ${mobile({
    height: "50px",
    width: "150px"
  })}
`;

const Span = styled.span`
  text-align: center;
  color: #a1c8fc;
  font-family: Georgia,serif;
  font-style: italic;
`;

const ReachHead = styled.h1`
  font-size: 35px;
  color: var(--color-bg);
  text-align: center;
  ${mobile({
    fontSize: "20px",
    textAlign: "end"
})}
`;


function ReachThrough() {
  return (
    <>
        <ReachOut color="var(--color-purple)">
            <EqualSection><Image1 src={OtherImages[1].image} w="100px" h="100px" /></EqualSection>
            <EqualSection><Image2 im={OtherImages[0].image} /></EqualSection>
            <EqualSection>
                <ReachHead>Reach Out Today</ReachHead>
                <Span>Reach out for more enquiries and scheduling </Span>
                <Link to={"/contact"}><Button>Contact Us</Button></Link>
            </EqualSection>
      </ReachOut>
    </>
  )
}

export default ReachThrough