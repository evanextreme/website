const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackBuildNotifierPlugin = require("webpack-build-notifier");

const settings = {
  distPath: path.join(__dirname, "dist"),
  srcPath: path.join(__dirname, "src"),
};

function srcPathExtend(subpath) {
  return path.join(settings.srcPath, subpath);
}

module.exports = (env, options) => {
  return {
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    devServer: {
      inline: true,
      host: "0.0.0.0"
    },

    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [
        ".ts",
        ".tsx",
        ".js",
        ".jsx",
        ".gif",
        ".png",
        ".jpg",
        ".jpeg",
        ".svg",
      ],
    },

    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "ts-loader",
            },
          ],
        },
        {
          test: /favicon\.ico$/,
          loader: "file-loader",
          options: {
            name: "[name].[ext]?[hash:8]",
          },
        },
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader",
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jp(e*)g|svg)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8000, // Convert images < 8kb to base64 strings
                name: "img/[hash]-[name].[ext]",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: srcPathExtend("index.html"),
      }),
      new WebpackBuildNotifierPlugin({
        title: "evanextreme/website",
        logo: path.resolve("./src/logo.svg"),
      }),
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //   react: "React",
    //   "react-dom": "ReactDOM"
    // }
  };
};
