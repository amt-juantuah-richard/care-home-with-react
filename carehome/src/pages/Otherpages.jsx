import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ServicesDetail from '../components/ServiceDetail';
import CircularProgress from '@mui/material/CircularProgress';


const Container = styled.div`
    height: auto;
    width: 100vw;
    position: relative;
`;

function Otherpages() {

    const location = window.location.pathname;

    const [loader, setLoader] = useState(false);


    useEffect(()=>{
      window.scrollTo(0,0);
      setLoader(true);

      const pathSepereted = location.split("/");
      const locString = pathSepereted[pathSepereted.length - 1];
      window.document.title = `Jo2Jos | ${locString? locString : ''}`;
      setTimeout(()=>{
          setLoader(false);
      }, 1000)
    }, []);

    useEffect(() => {
      window.scrollTo(0,0)
    },[location])


  return (
    <Container>
        <Navbar />
        {loader && <CircularProgress style={{position: "sticky", top: "50%", left: "50%", zIndex: "2"}} />}
        <ServicesDetail /> 
        <Footer />
    </Container>
  )
}

export default Otherpages