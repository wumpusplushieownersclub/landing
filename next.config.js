/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

const withFonts = require("next-fonts");

module.exports = withFonts({
    ...nextConfig,
    async redirects() {
        return [
            {
                source: "/github",
                destination: "https://github.com/wumpusplushieownersclub",
                permanent: false,
            },
            {
                source: "/discord",
                destination: "https://discord.gg/AGBgnVQTAm",
                permanent: false,
            },
        ];
    },
});
