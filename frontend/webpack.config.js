const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app.js',
    output: {
        path: path.join(__dirname, './build'),
        filename: 'bundle.js'
    },

    mode: 'development',
    module: {
        rules:[{
            test:/\.css/,
            use:[
                'style-loader',
                'css-loader'
            ]
           
        }]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes:true,
                removeScriptTypeAttributes:true,
                removeStyleLinkTypeAttributes:true,
                useShortDoctype:true
            }
        })
    ],

    devtool:'source-map'
}