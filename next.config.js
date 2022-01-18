/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

module.exports = {
    ...nextConfig,
    async redirects() {
        return [
            {
                source: "/github",
                destination: "https://github.com/wumpusplushieownersclub",
                permanent: true,
            },
        ];
    },
};
