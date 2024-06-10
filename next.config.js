/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH,
  env: {
    NEXTAUTH_URL: 'https://smart-transport-system.vercel.app/api/auth',
    NEXTAUTH_SECRET: '184648cb62dbe828800dcab2b729625a',
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
