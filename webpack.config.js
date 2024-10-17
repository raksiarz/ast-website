module.exports = {
    entry: './src/main',
    target: ['web', 'es5'],
    output: {
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
};
