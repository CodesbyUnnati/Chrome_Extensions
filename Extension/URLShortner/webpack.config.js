process.env.NODE_ENV = "production";

const path = require("path");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  // devtool: devMode ?  "eval-source-map" : "",
  entry: "./src/main.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, "src")],
        use: "ts-loader",
      },
    ],
  },
  // Resolve imports
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  mode: devMode ? "development" : "production",
};
