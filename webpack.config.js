const path = require('path')

module.exports = {
  entry: './index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
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
