const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'docs'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './docs',
        port: 3000,
        hot: true
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}
