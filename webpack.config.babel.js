import path from 'path';

const SOURCE_DIR = path.resolve( __dirname, 'src' );
const OUTPUT_DIR = path.resolve( __dirname, 'public' );

export default {
  entry: SOURCE_DIR,
  output: {
    path: OUTPUT_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: SOURCE_DIR,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules!postcss-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '', '.js', '.jsx', '.css' ]
  }
};
