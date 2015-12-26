module.exports = {
  entry: ["./app/index.js"],
  output: {
    path: "./build",
    publicPath: "/build/",
    filename: "build.js"
  },
  module: {
    loaders: [
      { test: /\.styl$/, loader: "style!css!stylus" },
      { test: /\.html$/, loader: "html" },
      { test: /\.vue$/, loader: "vue-loader"}
    ]
  }
}
