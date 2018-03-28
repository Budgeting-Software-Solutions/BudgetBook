let config = {
    entry: './src/main.js', // entry point
    output: {
      filename: 'public/bundle.js', // place where bundled app will be served
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['env', 'react'],
          },
        },
        {
          test: /.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };
  module.exports = config;
  