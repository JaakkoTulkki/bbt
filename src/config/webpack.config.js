const webpackMerge = require('webpack-merge');
const loadPresets = require('./loadPresets');

module.exports = ({mode, presets} = {mode: 'production', presets: []}) => {
  return webpackMerge({
      mode,
      output: {
        filename: 'bundle.js'
      },
      resolve: {
        extensions: [".js", ".jsx", ".json"]
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: require.resolve("babel-loader"),
            }
          },
        ]
      }
    },
    loadPresets({presets})
  )
};