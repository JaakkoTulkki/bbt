const webpack = require('webpack');
const webpackConfig = require('../config/webpack.config');

exports.run =  function build(args) {
  const config = webpackConfig(args.webpack);

  webpack(config, (err, status) => {
    if(err) {
      throw err;
    }
    console.log(status)
  })
};
