const path = require('path')

module.exports = {
  entry: './public/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ],
        exclude: /node_module/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
}
