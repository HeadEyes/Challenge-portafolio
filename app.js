import { valida } from "./validacion.js";

const inputs = document.querySelectorAll(".formcontato__input");
const inputsTextArea = document.querySelectorAll(".formcontato__textarea");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

inputsTextArea.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});
