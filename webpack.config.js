const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const outputPath = path.resolve(__dirname, 'dist')

//jsのモジュールとはファイルのこと。この設定ファイルをwebpackに利用してもらうためにはmodule.exportにふぁいるを設定する必要がある
module.exports = {
    entry: './src/index.js',
    //モジュール対象のファイルを設定
    output:{
        filename: 'main.js',
        path: outputPath
    },
    module:{
        rules: [
            { 
                test: /\.jsx?$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            },
            {
                test: /\.css$/,
                use: [ //A chain is executed in reverse order
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [ 
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                loader: 'url-loader',
                options: {
                    limit: 2048,
                    name: './images/[name].[ext]'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    // webpack-dev-server --open で開くDocument Rootを指定してる
    devServer: { 
        contentBase: outputPath
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
} 