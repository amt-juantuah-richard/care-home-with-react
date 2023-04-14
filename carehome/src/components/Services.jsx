import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { ServicesData } from '../Data';

const Container = styled.div`
    height: auto;
    width: 100vw;
    padding:100px 50px;
    ${mobile({
        padding: "50px 25px"
    })}
`;

const Main = styled.div`
    height: auto;
    width: 100%;
    padding:20px 0;
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;
    row-gap: 80px;
    margin-top: 50px;
    ${mobile({
        flexFlow: "column",
        alignItems: "center"
    })}
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
    justify-content: space-between;
`;

const Title = styled.span`
    font-family: monospace;
    font-size: 16px;
    font-weight: 700;
`;

const Words = styled.p`
    font-size: 16px;
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
    margin-bottom: 5px;
    padding-left: 10px;
    border-left: 5px solid var(--color-orange);
`;

export const LightNote = styled.span`
    font-family: monospace;
    font-size: 13px;
    color: var(--color-purple);
    font-weight: 700;
    margin-bottom: 70px;
    text-align: left;
`;


function Services() {
  return (
    <Container>
        <HeadTitle>Our Services Catalogue</HeadTitle>
        <LightNote>See all the services we render</LightNote>
        <Main>
            {ServicesData.map((item, index) => (
                    <Card key={index}>
                        <CardImage style={{backgroundImage: `url(${item.image})`}} />
                        <WordBox>
                            <Title>{item.title}</Title>
                            <Words>{item.about.substring(0,50)}...</Words>
                            <Link to={item.path}
                                  state={{itemID: item.id}}
                            ><Explore>Explore</Explore></Link>
                        </WordBox>
                    </Card>
                )
                )}
        </Main>
    </Container>
  )
}

export default Services
