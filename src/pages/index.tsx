import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { motion } from "framer-motion";

const Home: NextPage = () => {
    return (
        <>
            <Background />
            <Page>
                <Header1>WUMPUS</Header1>
                <Header2>PLUSHIE</Header2>
                <Header1>OWNERS</Header1>
                <Header2>CLUB</Header2>
                <Button>JOIN NOW</Button>
            </Page>
        </>
    );
};

export default Home;

const Page = styled.div`
    width: 100%;
    height: 100vh;
    padding: 5rem;
    z-index: 5;

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
`;

const Background = styled(motion.div)`
    width: 100%;
    height: 100vh;
    position: fixed;
    background: url("/wumpglow.png");
    background-size: cover;
    z-index: -1;
    opacity: 0.8;
`;

const Header1 = styled.div`
    font-family: Monument Extended;
    font-size: 6rem;
    height: 6rem;
    color: #fff;
    letter-spacing: 0.4rem;
    z-index: 5;
`;

const Header2 = styled.div`
    font-family: Monument Extended;
    font-size: 6rem;
    height: 6rem;
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 2px #fff;
    text-stroke: 2px #fff;
    letter-spacing: 0.4rem;
    z-index: 5;
`;

const Button = styled.div`
    margin-top: 8rem;
    background: #fff;
    color: #000;
    width: 18rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    border-radius: 20rem;
`;
