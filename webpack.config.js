const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin= require("mini-css-extract-plugin");
let mode ='development';

if(process.env.NODE_ENV === 'production'){
    mode = 'production'
}
console.log(mode+' mode');

module.exports ={
    mode:mode,
    output:{
        assetModuleFilename:"assets/[hash][ext][query]",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
    ],
    module:{
        rules:[
            {
                test: /\.(png|svg|jpeg|gif)$/i,
                type:'asset/resource',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use:[
                    (mode === 'development')?"style-loader":MiniCssExtractPlugin.loader,
                    "css-loader",
                {
                    loader:"postcss-loader",
            options: {
                postcssOptions: {
                    plugins: [
                        [
                            "postcss-preset-env",
                    { 
                        //options
                    },
                ],
             ],
            },
        },
    },
                "sass-loader",  
             ],
            },
        ]
    }
}