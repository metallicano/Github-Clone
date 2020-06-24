const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    entry:'./SRC/app/index.js',
    output:{
        path:path.join(__dirname,'dist'),
        filename: 'bundle.js'
    },
    devServer:{
        port: 3000
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:'./SRC/index.html'
        })
    ]
}