/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        workerThreads: false,
        cpus: 1
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cms.trampcreative.co.uk'
            },
        ],
    },
}

export default nextConfig;
