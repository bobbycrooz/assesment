
const webpackConfig = {

  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: {
          loader: 'file-loader',
      
        }
      }
    ],

  }
};

export default webpackConfig
