import React, { useEffect } from 'react';
import styled from 'styled-components';
// import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Why from '../components/Why';
import About from '../components/About';
import { useTitle } from 'react-use';

const Container = styled.div`
    position: relative;
`;

function Homepage() {

  useTitle('Jo2Jos | Home')

  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  
  return (
    <Container >
      <p id="i"></p>
      <Navbar />
      {/* <Banner /> */}
      <About />
      <Services />
      <Why />
      <Footer />
    </Container>
  )
}

export default Homepage
