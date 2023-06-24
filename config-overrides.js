const webpack = require('webpack');
module.exports = function override(config, env) {
  config.resolve.fallback = {
    url: require.resolve('url'),
    assert: require.resolve('assert'),
    buffer: require.resolve('buffer'),
  };
  config.plugins.push(
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      }),
  );

  config.module.rules.unshift({
    test: /\.m?js$/,
    resolve: {
      fallback: { 'process/browser': require.resolve('process/browser'), } ,
      fullySpecified: false, // disable the behavior
    },
  });

  return config;
};