import { ArrowRightAltOutlined, PictureAsPdfOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BannerImages } from './BannerImage';

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
    -webkit-box-shadow: 10px 10px 5px 0px rgba(97,27,75,1);
    -moz-box-shadow: 10px 10px 5px 0px rgba(97,27,75,1);
    box-shadow: 10px 10px 5px 0px rgba(97,27,75,1);
    &:hover ${Span}{
        margin-right:10px;
    }
`;


const Container = styled.div`
    width: 100vw;
    height: 90vh;
    background-color: #092830;
    border-radius: 0 150px 0 150px;
    margin-top: 15px;
    display: flex;
    padding: 60px 50px;
    &:hover ${ImageSide} {
        box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    }
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
    background-size: cover;
    background-position: center;
    border-radius: 50px 0 50px 0;
    height: 100%;
    width: 100%;
    position: relative;
    transition: all 1200ms;
    &: hover {
        background-position: left;
    }
`;


const WordBox = styled.div`
    display: flex;
    flex-direction: column;
    color: aliceblue;
    gap: 50px;
`;

const HeadWord = styled.h1`
`;

const Para = styled.p``;

const DownloadButtom = styled.button`
    height: 80px;
    width: 180px;
    border: none;
    outline: none;
    border-radius: 8px;
    background-color: #611b4b;
    display: flex;
    align-items: center;
    justify-content: center;
    color: aliceblue;
    &:hover {
        color: #611b4b;
        background-color: aliceblue;
    }
`;



function Banner() {
    const [img, imgSet] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            if (img < BannerImages.length-1) {
                imgSet(img + 1);
            } else imgSet(0);
        }, 10000)
        return () => clearInterval(interval);
    }, [img])

  return (
    <Container>
        <BannerSection>
            <WordBox>
                <HeadWord>Welcome to Care Home</HeadWord>
                <Para>Culpa labore tempor est eiusmod labore aute proident. Ut amet officia officia est aute. Eu consectetur excepteur amet cillum id est. Adipisicing ex consectetur proident voluptate ad sit. Dolor duis id duis Lorem. Elit incididunt irure consectetur ipsum pariatur esse magna anim veniam. Id labore eiusmod exercitation aliqua laboris.Nostrud non pariatur consectetur quis id excepteur est magna ullamco laborum.</Para>
                <DownloadButtom>
                    Get Our Brochure
                    <PictureAsPdfOutlined />
                </DownloadButtom>
            </WordBox>
        </BannerSection>
        <BannerSection>
            <ImageBox style={{backgroundImage: `url(${BannerImages[img]})`}}>
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