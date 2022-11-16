const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const development = require("./webpack.config.dev");
const production = require("./webpack.config.prod");

module.exports = (env, argv) => {

    const configuration = argv.mode === 'development' ? development : production;

    return {
        //Point d'entrée JS, fichier qui contiendra les includes
        entry: {
            front: './assets/js/main.js',
        },
        //Objet contenant le chemin de sortir, ainsi que le nom à donner au fichier
        output: {
            path: path.resolve(__dirname, 'public/build'),
            filename: './js/[name]-bundle.js',
            publicPath: "/build/",
            clean: true,
        },
        //les 3 points compactent plusieurs objets littéraux.
        ...configuration,
    }
}

// possible de regrouper tout en une suele page. Retirer les imports et tout coller en dessous.