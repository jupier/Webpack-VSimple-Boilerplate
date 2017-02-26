/**
 * Created by julienpieropan on 26/02/2017.
 */

const path = require('path');

const webpack = require('webpack');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
    // path contenant les fichiers de tests
    context : path.resolve(__dirname, 'test/'),
    // points d'entrée des modules
    entry : {
        'index' : './all.js',
    },
    // points de sorti
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname, 'test/dist/')
    },
    // loaders
    module : {
        rules : [
            // chargement des fichiers javascript avec babel.js
            {
                test : /\.js$/,
                exclude : /(node_modules)/,
                loader : 'babel-loader?presets[]=es2015,react'
            }
        ],
    },
    // liste des plugins utilisés
    plugins : [
        // permet de lancer les tests unitaires en fin de build webpack
        new WebpackShellPlugin({
            onBuildExit: "./node_modules/mocha/bin/mocha ./test/dist/bundle.js"
        })
    ]
};