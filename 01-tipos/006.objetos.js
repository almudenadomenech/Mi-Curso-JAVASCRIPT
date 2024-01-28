// Personaje de Tv
let nombre = 'Tanjiro';
let anime = "Demon slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",  // par llave-valor
    anime: "Demon slayer",
    edad: 16,
}; // objeto literal
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

// Moficar una propiedad
personaje.edad = 13;

personaje['edad'] = 16;

// eliminar una propiedad

delete personaje.anime;
console.log(personaje);

