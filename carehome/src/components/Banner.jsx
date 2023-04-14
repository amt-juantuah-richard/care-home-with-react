import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BannerImages, Feedbacks } from '../Data';
import { Carousel } from 'grommet';
import { Author, Box, Title, Words, WordBox } from './Feedback';
import { Star, StarHalf } from 'grommet-icons';
import { mobile } from '../responsive';

// const Span = styled.span`
//     transition: margin 1300ms;
//     cursor: pointer;
//     &:hover {
//         color: var(--color-purple);
//         font-weight: 800;
//     }
// `;

// const ImageSide = styled.div`
//     width: 200px;
//     height: 100px;
//     position: absolute;
//     background-color: var(--color-bg);
//     border-radius: 0 20px 0 20px;
//     bottom: -15px;
//     left: -15px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     transition: all 500ms;
//     -webkit-box-shadow: 10px 10px 5px 0px rgba(97,27,75,1);
//     -moz-box-shadow: 10px 10px 5px 0px rgba(97,27,75,1);
//     box-shadow: 10px 10px 5px 0px rgba(97,27,75,1);
//     &:hover ${Span}{
//         margin-right:10px;
//     }
// `;


const Container = styled.div`
    width: 100vw;
    height: 90vh;
    border-radius: 0 150px 0 150px;
    margin-top: 15px;
    padding: 0 50px;
    // display: flex;
    ${mobile({
        borderRadius: 0,
        padding: "0 25px"
    })}
`;

// const BannerSection = styled.div`
//     flex: 1;
//     height: 100%;
//     display: flex;
//     align-items: center;
// `;

// const ImageBox = styled.div`
//     background-color: #fff;
//     background-size: cover;
//     background-position: center;
//     border-radius: 50px 0 50px 0;
//     height: 100%;
//     width: 100%;
//     position: relative;
//     transition: all 1200ms;
//     &: hover {
//         background-position: left;
//     }
// `;


// const WordBox = styled.div`
//     display: flex;
//     flex-direction: column;
//     color: aliceblue;
//     gap: 50px;
//     padding-right: 25px;
// `;

// const HeadWord = styled.h1`
// `;

// const Para = styled.p`
//     line-height: 28px;
// `;

// const DownloadButtom = styled.button`
//     height: 80px;
//     width: 180px;
//     border: none;
//     outline: none;
//     border-radius: 8px;
//     background-color: var(--color-purple);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: var(--color-bg);
//     &:hover {
//         color: var(--color-purple);
//         background-color: var(--color-bg);
//     }
// `;

const ContentBox = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row;
    border-radius: 0 150px 0 150px;
    background-color: var(--color-exlight-purple);
    ${mobile({
        borderRadius: 0
    })}
`;

const ImageBox = styled.div`
    flex: 1;
    background-position: center;
    background-color: var(--color-exlight-purple);
    background-size: cover;
    height: 100%;
    transition: all 1000ms;
    border-radius: 0 150px 0 0;
    ${mobile({
        borderRadius: 0,
    })}
`;

const To = styled.span`
    font-size: 200%;
    color: gold;
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
        <ContentBox>
            <Carousel play={10000} fill>
                <Box>
                    <WordBox>
                        <Title>{[1,2,3,4,5].map((start, id) => <Star key={id} size='small' color='plain' />)}  Amazing Feedback</Title>
                        <Words><To>&#8220;</To>{Feedbacks[0].words}</Words>
                        <Author><b>{Feedbacks[0].name}</b> <br/> {Feedbacks[0].about}</Author>
                    </WordBox>
                    <ImageBox style={{backgroundImage: `url(${Feedbacks[0].image})`}}/>
                </Box>
                <Box>
                    <WordBox>
                        <Title>{[1,2,3,4].map((start, id) => <Star key={id} size='small' color='plain' />)}  Amazing Feedback</Title>
                        <Words><To>&#8220;</To>{Feedbacks[1].words}</Words>
                        <Author><b>{Feedbacks[1].name}</b> <br/> {Feedbacks[1].about}</Author>
                    </WordBox>
                    <ImageBox style={{backgroundImage: `url(${Feedbacks[1].image})`}}/>
                </Box>
                <Box>
                    <WordBox>
                        <Title>{[1,2,3,4].map((start, id) => <Star key={id} size='small' color='plain' />)}<StarHalf size='small' color='plain' />  Amazing Feedback</Title>
                        <Words><To>&#8220;</To>{Feedbacks[2].words}</Words>
                        <Author><b>{Feedbacks[2].name}</b> <br/> {Feedbacks[2].about}</Author>
                    </WordBox>
                    <ImageBox style={{backgroundImage: `url(${Feedbacks[2].image})`}}/>
                </Box>
                <Box>
                    <WordBox>
                        <Title>{[1,2,3].map((start, id) => <Star key={id} size='small' color='plain' />)}<StarHalf size='small' color='plain' />  Amazing Feedback</Title>
                        <Words><To>&#8220;</To>{Feedbacks[3].words}</Words>
                        <Author><b>{Feedbacks[3].name}</b> <br/> {Feedbacks[3].about}</Author>
                    </WordBox>
                    <ImageBox style={{backgroundImage: `url(${Feedbacks[3].image})`}}/>
                </Box>
                <Box>
                    <WordBox>
                        <Title>{[1,2,3,4].map((start, id) => <Star key={id} size='small' color='plain' />)}<StarHalf size='small' color='plain' />  Amazing Feedback</Title>
                        <Words><To>&#8220;</To>{Feedbacks[4].words}</Words>
                        <Author><b>{Feedbacks[4].name}</b> <br/> {Feedbacks[4].about}</Author>
                    </WordBox>
                    <ImageBox style={{backgroundImage: `url(${Feedbacks[4].image})`}}/>
                </Box>
            </Carousel>
        </ContentBox>
        
    </Container>
  )
}

/* <BannerSection>
            <WordBox>
                <HeadWord>Thank you for visiting Jo 2 Jos Service</HeadWord>
                <Para>We are <i>Semi-Supported Independent Living</i> service providers. Our Ambition is to Lead in the provision of effective and empowering Semi-Supported Independent Living Service for young people aged 16 and above</Para>
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
        </BannerSection> */

export default Banner