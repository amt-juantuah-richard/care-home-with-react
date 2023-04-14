import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    height: auto;
    width: 100vw;
    padding:80px 50px;
    ${mobile({
        padding: "50px 25px"
    })}
`;


const HeadTitle = styled.h2`
    margin-bottom: 30px;
    padding-left: 10px;
    border-left: 5px solid var(--color-orange);
`;

const Para = styled.p`
    line-height: 24px;
    margin: 10px;
    width: 70%;
    ${mobile({
	width: "100%",
    })};
`;


function About() {
  return (
    <Container>
        <HeadTitle>Who We Are</HeadTitle>
        <Para>We are a Semi-Supported Independent Living Service Provider. </Para>
        <Para>At <b>Jo2jos</b>, we support young people in ways that help them achieve personally desired outcomes and assist them to direct their own lives in a meaningful way. </Para>
        <Para>Our objectives are to ensure: service delivery excellence, empowerment for staff, innovation in our services, and foster healthy partnerships with others</Para>
        <Para>Our services are designed to support young people on their pathways to independence. All support is tailored to each person’s individual needs, through structured care and support plan,</Para>
    </Container>
  )
}

export default About
