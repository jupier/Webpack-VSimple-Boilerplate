/**
 * Created by julienpieropan on 24/02/2017.
 */

const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // path contenant les fichiers de l'app
    context : path.resolve(__dirname, 'apps'),
    // points d'entrée des modules
    entry : {
        'app-simple' : './app-simple/index.js',
        'app-react' : './app-react/index.js',
    },
    // points de sorti
    output : {
        filename : '[name].js',
        path : path.resolve(__dirname, 'dist/')
    },
    // loaders
    module : {
        rules : [
            // chargement des fichiers javascript avec babel.js
            {
                test : /\.js$/,
                exclude : /(node_modules)/,
                loader : 'babel-loader?presets[]=es2015,presets[]=react'
            },
            // chargement du css
            {
                test : /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback : 'style-loader',
                    use : 'css-loader'
                })
            }
        ],
    },
    // liste des plugins utilisés
    plugins : [
        // permet d extraire le css dans un fichier externe
        // sinon cest direct dans une balise <script>
        new ExtractTextPlugin({
            filename: "[name].css",
        }),
        // permet de creer plusieurs template HTML
        new HtmlWebpackPlugin({
            hash : true,
            template : './index.html',
            filename : './app-simple.html',
            chunks : ['app-simple']
        }),
        new HtmlWebpackPlugin({
            hash : true,
            template : './index.html',
            filename : './app-react.html',
            chunks : ['app-react']
        }),
    ]
};