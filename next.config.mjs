/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    experimental: {
        workerThreads: false,
        cpus: 4
    }
}

export default nextConfig;
