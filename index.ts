import { Persona } from "./persona.interface";

const numero: number = 12.5;
const booleano: boolean = true;
const array: Persona[] = [];
const persona: Persona = {
  id: 19273921,
  nombre: "Maxi",
};

array.unshift(persona);

let cualquierCosa;

cualquierCosa = numero;
cualquierCosa = booleano;
// const numero: number;

console.log(numero);



function nombreFuncion(persona: Persona) {}