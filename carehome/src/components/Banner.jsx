import { ArrowRightAltOutlined } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 90vh;
    background-color: #092830;
    border-radius: 0 150px 0 150px;
    margin-top: 15px;
    display: flex;
    padding: 60px 50px;
`;

const BannerSection = styled.div`
    flex: 1;
    height: 100%;
    padding: 0 25px;
    display: flex;
    align-items: center;
`;

const ImageBox = styled.div`
    background-color: #fff;
    background-image: url('https://media.istockphoto.com/id/1387432227/photo/female-care-worker-in-uniform-bringing-meal-on-tray-to-senior-woman-sitting-in-lounge-at-home.jpg?b=1&s=170667a&w=0&k=20&c=uicB34oYDPLw2EYJ7kS3m3gWCnafkEvRLvXk-e8ZAdg=');
    background-size: cover;
    background-position: center;
    border-radius: 100px 0 100px 0;
    height: 100%;
    width: 100%;
    position: relative;
    transition: all 1200ms;
    &: hover {
        background-position: left;
    }
`;

const Span = styled.span`
    transition: margin 1300ms;
    cursor: pointer;
    &:hover {
        color: red;
    }
`;

const ImageSide = styled.div`
    width: 50%;
    height: 100px;
    position: absolute;
    background-color: #fff;
    border-radius: 0 20px 0 20px;
    bottom: -15px;
    left: -15px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 500ms;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    &:hover ${Span}{
        margin-right:10px;
    }
`;

const WordBox = styled.div`
    display: flex;
    flex-direction: column;
    color: aliceblue;
`;

const HeadWord = styled.h1`
    
`;



function Banner() {

  return (
    <Container>
        <BannerSection>
            <WordBox>
                <HeadWord>Welcome</HeadWord>
                <p>Culpa labore tempor est eiusmod labore aute proident. Ut amet officia officia est aute. Eu consectetur excepteur amet cillum id est. Adipisicing ex consectetur proident voluptate ad sit. Dolor duis id duis Lorem. Elit incididunt irure consectetur ipsum pariatur esse magna anim veniam. Id labore eiusmod exercitation aliqua laboris.Nostrud non pariatur consectetur quis id excepteur est magna ullamco laborum.</p>
            </WordBox>
        </BannerSection>
        <BannerSection>
            <ImageBox>
                <ImageSide>
                    <Span>Go to Our Services</Span>
                    <ArrowRightAltOutlined />
                </ImageSide>
            </ImageBox>
        </BannerSection>
    </Container>
  )
}

export default Banner