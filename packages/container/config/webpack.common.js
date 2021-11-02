const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules:[
            {
                // whenever when we import a file that
                // ends with .mjs / js we want it be processed by babel
                test: /\.m?js$/,
                // dont run babbel on node_modules
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                    options: {
                        presets:[
                            '@babel/preset-react',
                            '@babel/preset-env',
                        ],
                        plugins:[
                            '@babel/plugin-transform-runtime'
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};