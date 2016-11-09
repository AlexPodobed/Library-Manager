module.exports = {
    entry: './app/app.ts',
    output: {
        filename: './app/bundle.js'
    },
    resolve: {
        extensions: ['', '.ts']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'awesome-typescript-loader' }
        ]
    }
}