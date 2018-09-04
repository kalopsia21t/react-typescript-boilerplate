const path = require('path');
const Loaders = require('./webpack/loaders'); 
const { PLUGINS } = require('./webpack/plugins');

module.exports = {
    mode: 'development',
    entry: './source/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'web',
    watch: true,
    watchOptions: {
        poll: 1000,
        aggregateTimeout: 100
    },
    devtool: 'source-map',
    module: {
        rules: [
            { 
                test: /\.(tsx|ts)$/,
                exclude: /node_modules/,
                use:[ Loaders.BABEL_LOADER, Loaders.AWESOME_TS_LOADER, Loaders.TSLINT_LOADER ]
            },            
            { test: /\.(css|less)$/, use: [{ loader: 'style-loader' }, Loaders.CSS_LOADER, Loaders.LESS_LOADER] }
        ]
    },
    
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.less', '.css']
    },

    plugins: PLUGINS
};