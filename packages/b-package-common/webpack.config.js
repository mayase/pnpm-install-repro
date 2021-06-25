const path = require("path");

module.exports = {
  externals: ["react", "react-dom", "react-dom/server"], // ag-grid depends on it
  entry: {
    bundle: path.resolve(__dirname, "./index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
};
