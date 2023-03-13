import React from 'react'
import styled from 'styled-components'
import SquareBox from './SquareBox';


const Container = styled.div`
    height: auto;
    width: 100vw;
    padding: 60px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ReasonBox = styled.div`
  width: 80%;
  height: auto;
  min-height: 80vh;
  background: red;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const HeadLine = styled.h1`
  margin-bottom: 40px;
`;

const Reasons = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  align-items: center;
  height: auto;
  width: 80%;
  background: green;
  justify-content: center;
  column-gap: 20px;
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
  return (
    <Container>
      <ReasonBox>
        <HeadLine>Why <b>Choose</b> Us?</HeadLine>
        <Reasons>
          <SquareBox stat="78" headline="Won hh awagggggggggggggggggrds" color="grey" />
          <SquareBox stat="72" headline="Won 78 awards" color="pink" />
          <SquareBox stat="90" headline="Won awards" color="purple" />
        </Reasons>
      </ReasonBox>
    </Container>
  )
}

export default Why