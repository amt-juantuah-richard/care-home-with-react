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
  height: 80vh;
  background-color: var(--color-purple);
  display: flex;
  flex-flow: row;
`;

const EqualSection = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  width: ${props => props.w};
  height: ${props => props.h};
  border-radius: ${props => props.r};
`;

const Button = styled.button`
  height: 70px;
  width: 200px;
  border: none;
  outline: none;
  background-color: gold;
  border-radius: 0 15px 0 15px;
`;

// const ReasonItem = styled.div`
//   flex: 1;
//   display: flex;
//   flex-flow: row;
//   background: green;
//   align-items: center;
//   justify-content: space-between;
// `;


function Why() {

  const checkOne = <AssignmentTurnedInOutlined />
  const checkTwo = <VerifiedOutlined />
  const checkThree = <TaskAltOutlined />
  
  
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
        <EqualSection><Image src={OtherImages[1].image} w="100%" h="80%" /></EqualSection>
        <EqualSection><Image src={OtherImages[0].image} w="100%" h="80%" /></EqualSection>
        <EqualSection>
          <HeadLine>Reach Out</HeadLine>
          <Link to={"/contact"}><Button>Contact Us</Button></Link>
        </EqualSection>
        <EqualSection><Image src={OtherImages[1].image} w="100%" h="80%" /></EqualSection>
      </ReachOut>
    </>
  )
}

export default Why