const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/public",
      },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [{
                    loader: "style-loader",
                  },
                  {
                    loader: "css-loader",
                    options: {
                      importLoaders: 1,
                    }
                  },
                  {
                    loader: "postcss-loader"
                  }],
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                exclude: [
                    /node_modules/,
                    /backgrounds/
                ],
                use: [
                {
                  loader: "url-loader",
                  options: {
                    limit: 10000
                  }
                }
              ]
            },
            {
                test: /\.js|jsx$/,
                exclude: [
                    /node_modules/,
                ],
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
        ],
    },
    devServer: {
        port: 3000,
        static: "./dist",
        historyApiFallback: true,
    },
    resolve: {
        fallback: {
          fs: false,
          path: require.resolve("path-browserify"),
        },
    },
}

