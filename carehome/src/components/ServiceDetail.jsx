import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { ServicesData } from '../Data';
import { Services } from 'grommet-icons';

const Container = styled.div`
    height: auto;
    width: 100vw;
    padding:100px 50px;
    ${mobile({
        padding: "50px 25px"
    })}
`;

const HeadSection = styled.div`
    height: 140px;
    width: 100%;
    margin: auto;
    background-color: var(--color-purple);
    align-items: center;
    padding-right: 40px;
    border-radius: 6px;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    &:hover svg {
	transform: rotate(300deg);
    };
    ${mobile({
        width: "100%",
        height: "80px",
        paddingRight: "20px",
    })}
`;

const Servicer = styled.div`
    height: 140px;
    width: 140px;
    border-radius: 6px 0 0 6px;
    background-color: var(--color-orange);
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover svg {
	transform: rotate(300deg);
    };
    & svg {
        height: auto;
        width: 40px;
	transition: all 500ms;
    };
    ${mobile({
        width: "80px",
        height: "80px"
    })}
`;

const TitleSection = styled.div`
    height: 100%;
    width: calc(100% - 140px);
    display: flex;
    align-items: center;
    flex-flow: row;
    padding-left: 40px;
    ${mobile({
        width: "calc(100% - 80px)",
        paddingLeft: "20px",
    })}
`;

const PictureDiv = styled.div`
    height: 300px;
    border-radius: 6px;
    margin: 30px auto;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #611b4b1c;
    width: calc(100% - 280px);
    transition: all 500ms;
    opacity: 0.7;
    &:hover {
      background-position: left;
      opacity: 1;
    };
    ${mobile({
        width: "100%",
    })}
`;

const Main = styled.div`
    height: auto;
    width: calc(100% - 280px);
    border-radius: 6px;
    border: 2px solid var(--color-purple);
    margin: 30px auto;
    display: flex;
    flex-flow: column;
    padding: 45px ;
    ${mobile({
        padding: "30px 20px",
	width: "100%",
    })}
`;

const HeadTitle = styled.h2`
    color: #ffffff;
    ${mobile({
	fontSize: "20px",
    })};
`;

const Info = styled.h1`
    color: var(--color-purple);
    text-align: center;
    width: 80vw;
    height: auto;
    border-left: 5px solid gold;
    padding-left: 10px;
`;

const About = styled.h3`
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
    color: var(--color-purple);
    margin-bottom: 30px;
    border-left: 5px solid var(--color-orange);
    padding-left: 10px;
    ${mobile({
        marginBottom: "15px",
    })}
`;

const All = styled.p`
    margin-top: 15px;
`;

const OtherTitle = styled.h3`
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    color: var(--color-brown);
    margin: 28px 0;
`;

const DotsUList = styled.ul`
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 20px;
    margin: 28px 20px;
`;

const ListItem = styled.li`
    padding-left: 10px;
    line-height: 30px;
`;

function ServicesDetail() {
    const location = useLocation();
    const itemID = location.state.itemID;
    const itemHere = location.pathname.split("/")[1];

  return (
    <Container>
        {
        itemID >= 0 ?
        <>
            <HeadSection>
                <Servicer>
                    <Services />
                </Servicer>
                <TitleSection>
                    <HeadTitle>{ServicesData[itemID].title}</HeadTitle>
                </TitleSection>
            </HeadSection>
	    <PictureDiv style={{backgroundImage: `url(${ServicesData[itemID].image})`}} />
            <Main>
                <About>{ServicesData[itemID].about}</About >
                {
                    ServicesData[itemID].all.map((item, index) => <All key={index}>{item}</All>)
                }
                {
                    ServicesData[itemID].otherheadings.map((item, index) => <div key={index}>
                        <OtherTitle>{item.title}</OtherTitle>
                        <All>{item.about}</All>
                        <DotsUList>
                            {item.dots.map((dot, idx) => <ListItem key={idx}>{dot}</ListItem>)}
                        </DotsUList>
                    </div>)
                }
            </Main>
        </>
        :
            <Info>Page under construction. Visit Soon for Content!!!</Info>

        }
    </Container>
  )
}

export default ServicesDetail
