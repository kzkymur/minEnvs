const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const src = path.resolve(__dirname, "src");
const dist = path.resolve(__dirname, "dist");

module.exports = {
  mode: "development",
  entry: src + "/index.tsx",

  output: {
    path: dist,
    publicPath: "/",
    filename: "index.js",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(t|j)(s|sx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: { "@": src },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: src + "/index.html",
      filename: "index.html",
    }),
  ],
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
};
