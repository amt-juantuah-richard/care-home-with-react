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
    font-size: 30px;
`;

const Para = styled.p`
    line-height: 24px;
    margin: 10px;
    width: 70%;
    ${mobile({
	width: "100%",
    })};
`;

const UList = styled.ul`
    margin: 15px;
`;

const List = styled.li`
    line-height: 34px;
    margin-left: 15px;
`;


function About() {
  return (
    <Container>
        <HeadTitle>We Are...</HeadTitle>
        <Para> A Semi-Supported Independent Living Service Provider. </Para>
        <Para>At <b>Jo2jos</b>, we support young people in ways that help them achieve personally desired outcomes and assist them to direct their own lives in a meaningful way. </Para>
        <Para>Our services are designed to support young people on their pathways to independence. All support is tailored to each person’s individual needs, through structured care and support plan,</Para>
        <UList>
            <Para><b>Our objectives:</b></Para>
            <List>to ensure service delivery excellence</List>
            <List>to ensure empowerment for staff</List>
            <List>to ensure innovation in our services</List>
            <List>to ensure service delivery excellence</List>
            <List>to foster healthy partnerships with others</List>
        </UList>

        <UList>
            <Para><b>Our Values:</b></Para>
            <List>Compassion</List>
            <List>Respect</List>
            <List>Being positive</List>
            <List>Working together</List>
        </UList>
    </Container>
  )
}

export default About
