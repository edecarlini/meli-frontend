/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'http2.mlstatic.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
