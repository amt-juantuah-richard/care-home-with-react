import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Why from '../components/Why';

const Container = styled.div``;

function Homepage() {
  
  return (
    <Container>
      <Navbar />
      <Banner />
      <Why />
    </Container>
  )
}

export default Homepage