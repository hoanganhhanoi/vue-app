module.exports = {
  entry: [
  "./app/index.js", 
  "./app/views/layouts/layout1/header/index.js",
  "./app/views/layouts/layout1/footer/index.js",
  "./app/views/layouts/layout1/index.js",
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
    { test: /\.vue$/, loader: "vue-loader"},
    { test: /\.jpeg$/, loader:'file'},
    { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
    { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
    { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" },
    // { test: require.resolve("jquery"), loader: "imports?jQuery=jquery" },
    // { test: /\.css$/, loader: 'bootstrap', exclude: /node_modules/ }

    ]
  }
}
