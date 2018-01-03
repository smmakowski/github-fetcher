const path = require('path');
const ENTRY = `${path.join(__dirname, 'client/src')}/index.jsx`;
const OUTPUT_PATH = path.join(__dirname, '/client/dist');


module.exports = {
  entry: ENTRY,
  output: {
    path: OUTPUT_PATH,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
    ]
  }
}
