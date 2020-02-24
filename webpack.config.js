const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  mode: 'production',
  module: {
    rules: [{
        test: /\.(?:le|c)ss$/,
        // include: path.join(__dirname, "src/components"),
        // test: /\.css$/i,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css", ".less"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};