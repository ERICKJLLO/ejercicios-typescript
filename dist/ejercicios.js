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
let numeros = [20, 60, 35, 80, 50, 75];
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
// Ejercicio 5
let promedio = suma / numeros.length;
console.log("Promedio:", promedio);
// Ejercicio 6
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 50) {
        console.log("Número mayor a 50:", numeros[i]);
    }
}
// Ejercicio 7
let persona = {
    nombre: "Carlos",
    edad: 20,
    ciudad: "Dosquebradas"
};
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Ciudad:", persona.ciudad);
// Ejercicio 8
let productos = [
    {
        nombre: "Mouse",
        precio: 80000
    },
    {
        nombre: "Teclado",
        precio: 120000
    },
    {
        nombre: "Monitor",
        precio: 500000
    }
];
for (let i = 0; i < productos.length; i++) {
    console.log("Producto:", productos[i].nombre);
    console.log("Precio:", productos[i].precio);
}
//# sourceMappingURL=ejercicios.js.map