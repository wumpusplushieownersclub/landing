import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeaderVariants = {
    initial: {
        x: 100,
        opacity: 0,
    },
    load: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.45,
            ease: [0, 0.75, 0.5, 1],
        },
    },
};

const Home: NextPage = () => {
    return (
        <>
            <Background
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 1.5, ease: [0, 0.75, 0.5, 1] }}
            />
            <Page initial="initial" animate="load" transition={{ staggerChildren: 0.1 }}>
                <Header1 variants={HeaderVariants}>WUMPUS</Header1>
                <Header2 variants={HeaderVariants}>PLUSHIE</Header2>
                <Header1 variants={HeaderVariants}>OWNERS</Header1>
                <Header2 variants={HeaderVariants}>CLUB</Header2>
                <Button
                    variants={HeaderVariants}
                    whileHover={{ scale: 0.95, cursor: "pointer" }}
                    href="https://discord.gg/AGBgnVQTAm"
                >
                    JOIN NOW
                </Button>
            </Page>
        </>
    );
};

export default Home;

const Page = styled(motion.div)`
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
`;

const Header1 = styled(motion.div)`
    font-family: Monument Extended;
    font-size: 6rem;
    height: 6rem;
    color: #fff;
    letter-spacing: 0.4rem;
    z-index: 5;
`;

const Header2 = styled(motion.div)`
    font-family: Monument Extended;
    font-size: 6rem;
    height: 6rem;
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 2px #fff;
    text-stroke: 2px #fff;
    letter-spacing: 0.4rem;
    z-index: 5;
`;

const Button = styled(motion.a)`
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
