var config = {
    entry: "./frontend/index.js",
    output: {
        filename: "./frontend/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader', 
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
module.exports = config; 