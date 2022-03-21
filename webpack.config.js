const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')
const miniCss = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    //точка входа
    entry:{   
        'index': './index.js',        
    },
    //точки выхода
    output:{
        filename: '[name].js',
        path: path.resolve(__dirname, 'app')       
    }, 
    plugins: [  
        new HtmlWebpackPlugin({
            filename: 'index.html', //название выходного файла
            chunks: ['cards'],
            template: path.resolve(__dirname,'./src/index.pug') //шаблон
        }),  
        new miniCss({
            filename: 'styles.css',
         }),
        new CleanWebpackPlugin(), 
        new HtmlWebpackPugPlugin()    
    ],
    module: {
        rules: [
            {
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
                pretty: true,
            }
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff|ttf|svg)$/i,
            type: 'asset/resource',
            generator: {
            filename: './assets/fonts/[hash][ext][query]',
            },
        },
        {
            test:/\.(sa|sc|c)ss$/,
            use: [
                miniCss.loader,                
                'css-loader',
                'sass-loader',
            ]
         }
        ]
    },
    
};