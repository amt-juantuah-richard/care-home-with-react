import React from 'react'
import styled from 'styled-components'
import SquareBox from './SquareBox';


const Container = styled.div`
    height: auto;
    width: 100vw;
    padding: 80px 0;
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