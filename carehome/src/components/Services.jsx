import React from 'react';
import styled from 'styled-components';
import { ServicesData } from './Data';

const Container = styled.div`
    height: auto;
    width: 100vw;
    padding:100px 50px;
`;

const Main = styled.div`
    height: auto;
    width: 100%;
    padding:20px 0;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
    row-gap: 80px;
`;

const Explore = styled.button`
    // text-align: left;
    // display: content;
    border: none;
    outline: none;
    color: var(--color-purple);
    transition: all 300ms;border-radius: 4px;
    height: 30px;
    border: 1px solid var(--color-purple);
    width: 100px;
`;

const CardImage = styled.div`
    flex: 1;
    width: 100%;
    border-radius: 20px 0 0 0;
    background-position: center;
    background-size: cover;
    transition: all 300ms;
    background-color: var(--color-bg);
`;

const WordBox = styled.div`
    flex: 1;
    display: flex;
    flex-flow: column;
    padding: 12px 0;
    transition: all 300ms;
    gap: 12px;
`;

const Title = styled.span`
    font-family: monospace;
    font-size: 16px;
    font-weight: 700;
`;

const Words = styled.p`
    font-size: 22px;
`;

const Card = styled.div`
    border-radius: 20px 0 20px 0;
    height: 300px;
    width: 260px;
    display: flex;
    transition: all 300ms;
    flex-flow: column;
    &:hover ${Explore} {
        background-color: var(--color-purple);
        color: var(--color-bg);
        border: 1px solid var(--color-bg);
        &:hover {
            background-color: var(--color-exlight-purple);
        };
    };
    &:hover ${Title} {
        font-size: 20px;
        color: var(--color-bg);
    };
    &:hover ${WordBox} {
        padding-left: 20px;
        background-color: var(--color-purple);
    };
    &:hover ${Words} {
        font-size: 18px;
        color: var(--color-bg);
    };
    &:hover ${CardImage} {
        background-position: top;
    }
`;

const HeadTitle = styled.h2`
    margin-bottom: 70px;
`;


function Services() {
  return (
    <Container>
        <HeadTitle>Our Services</HeadTitle>
        <Main>
            {ServicesData.map((item, index) => (
                    <Card key={index}>
                        <CardImage style={{backgroundImage: `url(${item.image})`}} />
                        <WordBox>
                            <Title>{item.title}</Title>
                            <Words>{item.about}</Words>
                            <Explore>Explore</Explore>
                        </WordBox>
                    </Card>
                )
                )}
        </Main>
    </Container>
  )
}

export default Services