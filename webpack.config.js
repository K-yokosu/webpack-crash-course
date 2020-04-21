const path = require('path')

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
                test: /\.css$/,
                use: [ //A chain is executed in reverse order
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                loader: 'url-loader',
                options: {
                    limit: 2048,
                    name: './images/[name].[ext]'
                }
            }
        ]
    },
    // webpack-dev-server --open で開くDocument Rootを指定してる
    devServer: { 
        contentBase: outputPath
    }
} 