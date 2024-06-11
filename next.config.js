/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH || '',

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
  reactStrictMode: false,

  env: {
    NEXT_PUBLIC_APP_URL: process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}${process.env.BASEPATH}`
      : `http://localhost:3000${process.env.BASEPATH}`,
    NEXTAUTH_URL: process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}${process.env.BASEPATH}/api/auth`
      : `http://localhost:3000${process.env.BASEPATH}/api/auth`,
    NEXT_PUBLIC_API_URL: process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}${process.env.BASEPATH}/api`
      : `http://localhost:3000${process.env.BASEPATH}/api`
  }
}

module.exports = nextConfig
