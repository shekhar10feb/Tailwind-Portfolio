// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//     ...(process.env.NODE_ENV == 'production ' ? { cssnano: {} } : {})
//   },
// }

module.exports = ({ env }) => ({
  plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano: env === "production" ? { preset: "default" } : false
  }
});
