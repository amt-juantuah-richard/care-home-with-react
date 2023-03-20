import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import Feedback from '../components/Feedback';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Why from '../components/Why';

const Container = styled.div``;

function Homepage() {
  
  return (
    <Container>
      <Navbar />
      <Banner />
      <Why />
      <Services />
      <Feedback />
      <Footer />
    </Container>
  )
}

export default Homepage