import path from "path";

export default {
  mode: "development",
  // mode: "production",
  // mode: "none",
  entry: {
    app: path.join(__dirname, "..", "src/index.js")
  },
  output: {
    path: path.join(__dirname, "..", "dist"),
    filename: "js/[name].js"
  },
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.js&/,
        loader: "babel-loader",
        include: [path.join(__dirname, "..", "src")]
      }
    ]
  }
};
