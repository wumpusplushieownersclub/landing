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
        <div className="w-full h-screen flex items-center justify-center">
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1.5, ease: [0, 0.75, 0.5, 1] }}
                className="fixed h-screen w-auto 2xl:w-full 2xl:h-auto z-[-1] object-cover"
                src="/wumpglow.png"
                style={{
                    transform: "translate(-100%, -50%)",
                    top: "50%",
                    left: "100%",
                }}
            />
            <motion.div
                initial="initial"
                animate="load"
                transition={{ staggerChildren: 0.1 }}
                className="md:p-[5rem] w-full h-screen flex flex-col items-center md:items-start justify-center md:justify-center"
            >
                <motion.div
                    className="font-monument h-[3.5rem] md:h-[6rem] text-[3rem] md:text-[6rem] text-white tracking-wider select-none"
                    variants={HeaderVariants}
                >
                    WUMPUS
                </motion.div>
                <motion.div
                    className="font-monument h-[3.5rem] md:h-[6rem] text-[3rem] md:text-[6rem] text-transparent tracking-wider select-none"
                    style={{ WebkitTextStroke: "2px #fff" }}
                    variants={HeaderVariants}
                >
                    PLUSHIE
                </motion.div>
                <motion.div
                    className="font-monument h-[3.5rem] md:h-[6rem] text-[3rem] md:text-[6rem] text-white tracking-wider select-none"
                    variants={HeaderVariants}
                >
                    OWNERS
                </motion.div>
                <motion.div
                    className="font-monument h-[3.5rem] md:h-[6rem] text-[3rem] md:text-[6rem] text-transparent tracking-wider select-none"
                    style={{ WebkitTextStroke: "2px #fff" }}
                    variants={HeaderVariants}
                >
                    CLUB
                </motion.div>
                <motion.a
                    variants={HeaderVariants}
                    whileHover={{ scale: 0.95, cursor: "pointer" }}
                    href="https://discord.gg/AGBgnVQTAm"
                    className="rounded-full px-6 md:px-10 py-4 md:py-5 text-[1.5rem] md:text-[1.75rem] flex items-center justify-center mt-[4rem] md:mt-[8rem] text-black bg-white"
                >
                    JOIN NOW
                </motion.a>
            </motion.div>
        </div>
    );
};

export default Home;
