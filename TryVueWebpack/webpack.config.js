// webpack.config.js
var path = require('path');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    //mode: 'development',
    mode: 'production',
    entry: './ClientApp/index.ts',
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        publicPath: 'wwwroot/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map',
    plugins: [
        new VueLoaderPlugin()
    ]
};

if (module.exports.mode === 'production') {
    module.exports.devtool = '#source-map';
    module.exports.optimization = {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ]
    };
}
