module.exports = (function() {
  return function (api) {
    const presets = [...["@babel/preset-env", "@babel/preset-react"].map(require.resolve)];
    const plugins = [];

    return {
      presets,
      plugins
    };
  };
})();
