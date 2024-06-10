/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH,
  env: {
    NEXTAUTH_URL: 'https://smart-transport-system.vercel.app/',
    NEXTAUTH_SECRET: 'e0375c5b670f728d82a24a08a1cfcda7',
},
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
        locale: false
      }
    ]
  },

  // TODO: below line is added to resolve twice event dispatch in the calendar reducer
  reactStrictMode: false
}

module.exports = nextConfig
