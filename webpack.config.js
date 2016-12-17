module.exports = {
    entry: "./index.js",
    output: {
        path: './bin/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /node_module/, loader: 'babel'
            }
        ]
    }

}
