const withImages = require('next-images')

module.exports = {
  withImages,
  presets: [ 'next/babel' ],
  plugins: ['inline-react-svg'],

  experimental: {
    optimizeFonts: true,
  }
};