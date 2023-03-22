import { AssignmentTurnedInOutlined, TaskAltOutlined, VerifiedOutlined } from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { mobile } from '../responsive';
import { OtherImages, WhyUs } from './Data';
import { LightNote } from './Services';
import SquareBox from './SquareBox';


const Container = styled.div`
    height: auto;
    width: 100vw;
    padding: 80px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    border-radius: 0 150px 0 150px;
    background-color: var(--color-exlight-purple);
    ${mobile({
      padding: "25px 0 0",
      marginTop: "80px",
      borderRadius: "0 80px 0 80px"
  })}
`;

const ReasonBox = styled.div`
  width: 100%;
  height: auto;
  min-height: 80vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  ${mobile({
    width: "80%"
})}
`;

const HeadLine = styled.h1`
  margin-bottom: 60px;
  font-size: 30px;
  width: 444px;
  text-align: center;
  ${mobile({
        width: "300px",
        fontSize: "20px"
    })}
`;

const ReachHead = styled.h1`
  font-size: 30px;
  ${mobile({
    width: "300px",
    fontSize: "20px"
})}
`;

const Reasons = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  align-items: center;
  height: auto;
  width: 100%;
  padding: 0 50px;
  justify-content: space-evenly;
  // column-gap: 20px;
  ${mobile({
    flexFlow: "column",
})}
`;

const ReachOut = styled.div`
  width: 100vw;
  height: 50vh;
  background-color: var(--color-purple);
  display: flex;
  flex-flow: row;
`;

const EqualSection = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
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
    width: "150px",
  })}
`;

const Span = styled.span``;

// const ReasonItem = styled.div`
//   flex: 1;
//   display: flex;
//   flex-flow: row;
//   background: green;
//   align-items: center;
//   justify-content: space-between;
// `;


function Why() {

  const checkThree = <AssignmentTurnedInOutlined />
  const checkTwo = <VerifiedOutlined />
  const checkOne = <TaskAltOutlined />
  
  
  return (
    <>
      <Container>
        <ReasonBox>
          <HeadLine>An Experience you should expect from a Semi-Supported Independent Living Service Provider</HeadLine>
          <LightNote>Why choose us</LightNote>
          <Reasons>
            {WhyUs.map((item, index) => <SquareBox key={index} stat={checkOne} headline={item.headline} point={item.points} />)}
          </Reasons>
        </ReasonBox>
      </Container>
      <ReachOut>
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

export default Why