/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true
    },

    basePath: "/url-shortening-api"
}

module.exports = nextConfig