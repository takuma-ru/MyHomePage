module.exports = {
  experimental: {
    optimizeFonts: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      // write files under 10k to inline or copy files over 10k
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 100000,
          fallback: 'file-loader',
          name: '/public/fonts/[name].[ext]',
        },
      }]
    })

    return config
  }
};