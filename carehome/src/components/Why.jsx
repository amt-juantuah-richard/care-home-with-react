import { AssignmentTurnedInOutlined, TaskAltOutlined, VerifiedOutlined } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
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
`;

const ReasonBox = styled.div`
  width: 100%;
  height: auto;
  min-height: 80vh;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const HeadLine = styled.h2`
  margin-bottom: 60px;
`;

const Reasons = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  align-items: center;
  height: auto;
  width: 100%;
  padding: 0 50px;
  justify-content: space-between;
  // column-gap: 20px;
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
  
  const headline = 'Eu sunt laboris esse ex.'
  const point = [
    'Ex ipsum dolore laboris pariatur cillum reprehenderit amet.',
    'Ex ipsum dolore laboris pariatur cillum reprehenderit amet.',
    'Ex ipsum dolore laboris pariatur cillum reprehenderit amet.'
  ]
  return (
    <Container>
      <ReasonBox>
        <HeadLine>Why <b>Choose</b> Us?</HeadLine>
        <Reasons>
          <SquareBox stat={checkOne} headline={headline} point={point} />
          <SquareBox stat={checkTwo} headline={headline} point={point} />
          <SquareBox stat={checkThree} headline={headline} point={point} />
        </Reasons>
      </ReasonBox>
    </Container>
  )
}

export default Why