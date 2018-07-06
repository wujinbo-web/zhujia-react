import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import UglifyJsPlugin  from 'uglifyjs-webpack-plugin';

let config = {
    entry: {
        'app': [
            'babel-polyfill',
            './src/index'
        ]
    },
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[chunkhash].js',
        chunkFilename: '[chunkHash].js',
        publicPath: '/static/wx'
    },
    stats: {
        children: false
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.less$/,
                include: /antd-mobile/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader"
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../')
        }),
        new MiniCssExtractPlugin({
            filename: '[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            title: 'zhujia',
            template: path.resolve(__dirname, '../index.html'),
            filename: 'index.blade.php',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        })
    ]
};
export default config;