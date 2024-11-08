const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main',
    target: ['web', 'es5'],
    output: {
        filename: 'app.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: 'css-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css']
    }
};
