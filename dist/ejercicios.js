"use strict";
// Ejercicio 1
Object.defineProperty(exports, "__esModule", { value: true });
let estudiantes = [
    "Ana",
    "Carlos",
    "María",
    "Juan",
    "Sofía"
];
for (let i = 0; i < estudiantes.length; i++) {
    console.log(estudiantes[i]);
}
// Ejercicio 2
console.log("Cantidad de estudiantes:", estudiantes.length);
// Ejercicio 3
let numeros = [2, 1, 3, 5, 4];
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
}
console.log("Suma total:", suma);
// Ejercicio 4
let numerosAleatorios = [];
for (let i = 0; i < 1500; i++) {
    let numeroAleatorio = Math.round(Math.random() * 100);
    numerosAleatorios.push(numeroAleatorio);
}
let sumaAleatorios = 0;
for (let i = 0; i < numerosAleatorios.length; i++) {
    sumaAleatorios = sumaAleatorios + numerosAleatorios[i];
}
console.log("Cantidad de números:", numerosAleatorios.length);
console.log("Suma total:", sumaAleatorios);
//# sourceMappingURL=ejercicios.js.map