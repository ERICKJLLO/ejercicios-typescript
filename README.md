# Ejercicios de TypeScript


## Descripción

En este proyecto se desarrollan 12 ejercicios utilizando conceptos básicos de TypeScript, principalmente:

- Arrays
- Ciclos `for`
- Condicionales `if`
- Números aleatorios
- Acumuladores
- Promedios
- Objetos
- Arrays de objetos
- Objetos con arrays
- Estructuras de datos anidadas

## Ejercicios

1. Crear un array con 5 nombres de estudiantes y mostrarlos en consola.
2. Mostrar la cantidad de estudiantes del array.
3. Calcular la suma de un array de números.
4. Generar mínimo 1500 números aleatorios y calcular su suma.
5. Calcular el promedio de los números del ejercicio 3.
6. Mostrar los números mayores a 50 del ejercicio 3.
7. Crear un objeto de persona con nombre, edad y ciudad.
8. Crear un array de productos con nombre y precio.
9. Encontrar el producto con mayor precio.
10. Agregar unidades disponibles y calcular el valor total del inventario.
11. Crear un array de estudiantes con materias y notas, y calcular los promedios.
12. Mostrar los estudiantes cuyo promedio sea mayor a 3.5.

## Tecnologías utilizadas

- TypeScript
- Node.js
- Visual Studio Code
- Git
- GitHub

## Estructura del proyecto

```text
.
├── src/
│   └── ejercicios.ts
├── dist/
│   ├── ejercicios.js
│   ├── ejercicios.js.map
│   ├── ejercicios.d.ts
│   └── ejercicios.d.ts.map
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

# Cómo ejecutar el proyecto

## Requisitos

Antes de ejecutar el proyecto debes tener instalado:

- [Node.js](https://nodejs.org/)
- npm
- Git (opcional si solo quieres descargar el proyecto)
- Visual Studio Code (opcional, recomendado para modificar el código)

## 1. Descargar el proyecto

Puedes descargar el repositorio desde GitHub utilizando el botón:

**Code → Download ZIP**

También puedes clonarlo utilizando Git:

```bash
git clone URL_DEL_REPOSITORIO
```

Después entra a la carpeta del proyecto:

```bash
cd NOMBRE_DEL_PROYECTO
```

> Reemplaza `URL_DEL_REPOSITORIO` por la URL real del repositorio de GitHub y `NOMBRE_DEL_PROYECTO` por el nombre de la carpeta creada.

## 2. Instalar las dependencias

Abre una terminal dentro de la carpeta del proyecto y ejecuta:

```bash
npm install
```

Esto instalará las dependencias necesarias para trabajar con el proyecto.

## 3. Compilar el código TypeScript

Ejecuta:

```bash
npx tsc
```

Este comando toma el código TypeScript que está dentro de `src/` y genera los archivos JavaScript correspondientes dentro de `dist/`.

## 4. Ejecutar los ejercicios

Después de compilar el proyecto, ejecuta:

```bash
node dist/ejercicios.js
```

En la terminal aparecerán los resultados de los ejercicios.

## Ejecutar nuevamente después de hacer cambios

Si modificas el archivo:

```text
src/ejercicios.ts
```

primero debes volver a compilar:

```bash
npx tsc
```

y después ejecutar:

```bash
node dist/ejercicios.js
```

## Comandos resumidos

Si ya descargaste el proyecto y estás ubicado dentro de su carpeta:

```bash
npm install
npx tsc
node dist/ejercicios.js
```

## Desarrollo

El código fuente principal del proyecto se encuentra en:

```text
src/ejercicios.ts
```

Los archivos JavaScript generados por TypeScript se encuentran en:

```text
dist/
```

Cada ejercicio está identificado dentro del código mediante un comentario:

```typescript
// Ejercicio 1
// Ejercicio 2
// Ejercicio 3
// ...
// Ejercicio 12
```

Esto permite identificar fácilmente la solución correspondiente a cada punto de la actividad.
