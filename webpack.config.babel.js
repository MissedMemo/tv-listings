
export default {
  entry: './src',
  output: {
    path: 'public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: __dirname + '/src',
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  }
};
