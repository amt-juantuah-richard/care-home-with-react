import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Why from '../components/Why';
import About from '../components/About';

const Container = styled.div``;

function Homepage() {
  
  return (
    <Container>
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Why />
      <Footer />
    </Container>
  )
}

export default Homepage