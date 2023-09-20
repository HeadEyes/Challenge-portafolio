//Haz tú validación en javascript acá

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
];

const mensajesDeError = {
  nombre: {
    valueMissing: "El nombre no puede estar vacio",
  },
  email: {
    valueMissing: "El correo no puede estar vacio",
    typeMismatch: "El correo no es valido",
  },
  asunto: {
    valueMissing: "El asunto no puede estar vacio",
  },
  mensaje: {
    valueMissing: "El mensaje no puede estar vacio",
  },
};

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) { // Si se encuentra un error
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });

  console.log(mensaje);
  return mensaje;
}

export function valida(input) {
  const tipoDeInput = input.dataset.tipo; // dataset.tipo = data-tipo en el HTML
  console.log(input);
  // Si los campos son invalidos agrega o quita la siguiente clase, causando que el campo se coloque en rojo en advertencia
  if (input.validity.valid) {
    input.classList.remove("input--invalid"); // Quita la clase del elemento padre
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
    document.querySelector(".formcontato__botao").disabled = false;
  } else {
    input.classList.add("input--invalid"); // Agrega la clase del elemento padre
    input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    document.querySelector(".formcontato__botao").disabled = true;
  }
}
