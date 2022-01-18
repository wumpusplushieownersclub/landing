import FontStyle from "../fonts";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Wumpus Plushie Owners Club</title>
                <meta
                    name="description"
                    content="A decentralized metaverse that aims to revolutionize the way players earn."
                />
                <meta name="author" content="github.com/wumpusplushieownersclub"></meta>

                <meta property="og:title" content="Wumpus Plushie Owners Club" />
                <meta property="og:url" content="https://wumpus.club" />
                <meta property="og:site_name" content="Wumpus Plushie Owners Club" />
                <meta
                    property="og:description"
                    content="The most prestigious and elite club, exclusively for those who happen own a Wumpus Plushie."
                />
                <meta property="og:image" content="/meta.png" />
                <meta property="og:image:type" content="image/jpg" />

                <meta property="twitter:site" content="Wumpus Plushie Owners Club" />
                <meta property="twitter:creator" content="Wumpus Plushie Owners Club" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="Wumpus Plushie Owners Club" />
                <meta
                    property="twitter:description"
                    content="The most prestigious and elite club, exclusively for those who happen own a Wumpus Plushie."
                />
                <meta property="twitter:image:src" content="/meta.png" />
                <meta property="twitter:image:width" content="1200" />
                <meta property="twitter:image:height" content="1200" />
            </Head>
            <FontStyle />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
