const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/helloworld.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: './src/helloworld.html',
    //         inject: 'body',
    //     }),
    // ],
};
