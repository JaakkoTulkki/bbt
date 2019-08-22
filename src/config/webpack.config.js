const webpackMerge = require('webpack-merge');
const loadPresets = require('./loadPresets');

module.exports = ({mode, presets} = {mode: 'production', presets: []}) => {
  return webpackMerge({
    mode,
    output: {
      filename: 'bundle.js'
    },
  },
    loadPresets({presets})
)};