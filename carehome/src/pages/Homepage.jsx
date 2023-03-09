import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';

const Container = styled.div``;

function Homepage() {
  return (
    <Container>
      <Navbar />
      <Banner />
    </Container>
  )
}

export default Homepage