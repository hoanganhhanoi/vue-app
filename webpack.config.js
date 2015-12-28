module.exports = {
  entry: [
    "./app/index.js", 
    "./app/views/layouts/header/index.js",
    "./app/views/layouts/footer/index.js",
    "./app/views/users/index.js",
    "./app/views/weather/index.js",
    "./app/views/signin/index.js",
    "./app/views/signup/index.js"
    ],
  output: {
    path: "./build",
    publicPath: "/build/",
    filename: "build.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.html$/, loader: "html" },
      { test: /\.vue$/, loader: "vue-loader"}
    ]
  }
}
