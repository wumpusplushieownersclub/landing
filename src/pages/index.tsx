import type { NextPage } from "next";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Github } from "../icons/Github";

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
        <div className="flex items-center justify-center w-full h-screen">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1.5, ease: [0, 0.75, 0.5, 1] }}
                className="fixed w-screen z-[-1] object-cover"
                style={{
                    background: "url(/wumpglow.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                    animation: "float 5s ease infinite",
                    height: "calc(100vh + 40px)",
                }}
            />
            <motion.div
                initial="initial"
                animate="load"
                transition={{ staggerChildren: 0.1 }}
                className="md:p-[5rem] w-full h-screen flex flex-col items-center md:items-start justify-center md:justify-start"
            >
                <motion.div className="h-[3.5rem] md:h-[6rem] text-[3rem] md:text-[6rem] text-white tracking-wider select-none" variants={HeaderVariants}>
                    WUMPUS
                </motion.div>
                <motion.div
                    className="h-[3.5rem] md:h-[6rem] text-[3rem] md:text-[6rem] text-transparent tracking-wider select-none"
                    style={{ WebkitTextStroke: "2px #fff" }}
                    variants={HeaderVariants}
                >
                    PLUSHIE
                </motion.div>
                <motion.div className="h-[3.5rem] md:h-[6rem] text-[3rem] md:text-[6rem] text-white tracking-wider select-none" variants={HeaderVariants}>
                    OWNERS
                </motion.div>
                <motion.div
                    className="h-[3.5rem] md:h-[6rem] text-[3rem] md:text-[6rem] text-transparent tracking-wider select-none"
                    style={{ WebkitTextStroke: "2px #fff" }}
                    variants={HeaderVariants}
                >
                    CLUB
                </motion.div>
                <motion.a
                    variants={HeaderVariants}
                    whileHover={{ scale: 0.95, cursor: "pointer" }}
                    href="/discord"
                    className="rounded-full px-6 md:px-10 py-4 md:py-5 text-[1.5rem] md:text-[1.75rem] flex items-center justify-center mt-[4rem] md:mt-[8rem] text-black bg-white hover:text-white hover:bg-transparent hover:border-2 hover hover:border-white hover:transition-all"
                >
                    JOIN NOW
                </motion.a>
            </motion.div>
            <IconWrapper className="absolute bottom-0 right-0" href="/github" target="_blank">
                <Github highlight="#171515" size={38} />
            </IconWrapper>
        </div>
    );
};

const IconWrapper = styled.a`
    color: #ffffff;
    margin: 20px;
`;

export default Home;
