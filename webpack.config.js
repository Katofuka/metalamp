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
        'color-type': '/pages/color-type/color-type.js',
        'headers-footers': '/pages/headers-footers/headers-footers.js',        
    },
    //точки выхода
    output:{
        filename: 'scripts/[name].js',
        path: path.resolve(__dirname, 'dist')       
    }, 
    plugins: [  
        new HtmlWebpackPlugin({
            filename: 'pages/color-type.html', //название выходного файла
            chunks: ['color-type'],
            template: path.resolve(__dirname,'./src/pages/color-type/color-type.pug') //шаблон
        }),  
        new HtmlWebpackPlugin({
            filename: 'pages/headers-footers.html', //название выходного файла
            chunks: ['headers-footers'],
            template: path.resolve(__dirname,'./src/pages/headers-footers/headers-footers.pug') //шаблон
        }),  
        new miniCss({
            filename: 'styles/[name].css',        
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