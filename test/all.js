/**
 * Created by julienpieropan on 26/02/2017.
 */

/**
 * DO NOT CHANGE THIS FILE
 * Ce fichier permet de charger l ensemble des tests unitaires dans un seul
 * et même context webpack
 */

var context = require.context('./', false, /\.spec\.js$/);
// context est une fonction permettant de require dans un context donné
// keys renvoie un tableau contenant le nom de tous les fichiers trouvés
// forEach(context) réalise un require() pour chaque fichier trouvé dans le context précisé
// par exemple : require('./' + 'lib.spec.js');
/*
identique à :

context.keys().forEach(key => {
    "use strict";
    context(key);
});
*/
//context.keys().forEach(context);
module.exports = context;