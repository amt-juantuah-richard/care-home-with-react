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
    background-image: url('../../public/assets/images/care_serve.jpg');
    background-size: cover;
    background-position: center;
    border-radius: 100px 0 100px 0;
    height: 100%;
    width: 100%;
`;

function Banner() {
  return (
    <Container>
        <BannerSection></BannerSection>
        <BannerSection>
            <ImageBox />
        </BannerSection>
    </Container>
  )
}

export default Banner