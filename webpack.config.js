const path = require('path')

const outputPath = path.resolve(__dirname, 'dist')

//jsのモジュールとはファイルのこと。この設定ファイルをwebpackに利用してもらうためにはmodule.exportにふぁいるを設定する必要がある
module.exports = {
    entry: './src/index.js',
    output:{
        filename: 'main.js',
        path: outputPath
    }
} //モジュール対象のファイルを設定