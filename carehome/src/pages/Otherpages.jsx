import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const Section = styled.section`
    height: 50vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Info = styled.h1`
    color: var(--color-purple);
    text-align: center;
    width: 80vw;
    height: auto;
    border-left: 5px solid gold;
    padding-left: 10px;
`;

function Otherpages() {
  return (
    <>
        <Navbar />
        <Section>
            <Info>
                Page under construction. Visit Soon for Content!!!
            </Info>
        </Section>
        <Footer />
    </>
  )
}

export default Otherpages