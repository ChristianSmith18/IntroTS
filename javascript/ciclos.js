"use strict";
exports.__esModule = true;
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var objeto = [
    {
        nombre: 'Cristian',
        edad: 21
    },
    {
        nombre: 'Juan',
        edad: 41
    },
    {
        nombre: 'Carlos',
        edad: 19
    },
];
function fun(persona) { }
objeto.forEach(function (persona) {
    console.log(persona);
});
var count = 0;
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
// console.log('**');
// while (count < array.length) {
//   console.log(array[count]);
//   count++;
// }
// for (const persona of objeto) {
//   console.log(persona.nombre);
// }
// do {
//   /* codigo */
// } while (condition);
