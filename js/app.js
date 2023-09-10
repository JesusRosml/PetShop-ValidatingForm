import { valida } from "./validaciones.js";

//Selecciona todos los inputs y nos devuelve un arreglo
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});
