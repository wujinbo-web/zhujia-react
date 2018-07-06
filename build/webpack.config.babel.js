import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

let config = {
    entry: {
        'app': [
            'react-hot-loader/patch',
            './src/index'
        ]
    },
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        chunkFilename: '[chunkHash].js',
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, "../"),
        compress: true,
        publicPath: '/',
        port: 9000,
        historyApiFallback: true,
        hot: true,
        inline: true,
        stats: {
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false,
            entrypoints: false,
            assets: false
        }
    },
    module: {
        
        rules: [
            
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
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
                    {
                        loader: "style-loader"
                    },
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
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'zhujia',
            template: path.resolve(__dirname, '../index.html'),
            filename: 'index.html'
        })
    ]
};
export default config;