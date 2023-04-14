import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    height: auto;
    width: 100vw;
    padding:100px 50px;
    ${mobile({
        padding: "70px 25px"
    })}
`;

const ConstructionImageDiv = styled.div`
    width: 100%;
    aspect-ratio: 2/1;
    margin-top: 15px;
    border-radius: 6px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
`;

const About = styled.h3`
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
    color: var(--color-purple);
    margin-bottom: 30px;
    border-left: 5px solid var(--color-orange);
    padding-left: 10px;
    ${mobile({
        marginBottom: "15px",
    })}
`;



function NoPage() {

    const errorImageLink = 'https://img.freepik.com/free-vector/coming-soon-design_1132-70.jpg?w=740&t=st=1681499157~exp=1681499757~hmac=6ed5c14f7ca38b6e59cef2974ae670ce3e015aa1f581196f92a80b6fe61ee990';

  return (
    <Container>
        <About>Oops!! The requested resource is under construction. Check back soon</About>
        <ConstructionImageDiv style={{backgroundImage: `url(${errorImageLink})`}} />
    </Container>
  )
}

export default NoPage;
