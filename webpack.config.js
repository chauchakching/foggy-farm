const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const ZipPlugin = require('zip-webpack-plugin')

module.exports = {
  entry: {
    custom: './src/custom.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyPlugin([
      { from: 'manifest.json', to: 'manifest.json' },
    ]),
    // new ZipPlugin({
    //   filename: 'dist.zip'
    // })
  ],
  watch: true,
}
