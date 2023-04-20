const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
};
const formulario = document.getElementById("form");
const inputs = document.querySelectorAll("#form input"); //Seleccionamos todos los inputs de la página.
const validarFormulario = (e) => {
  switch (e.target.name) {
	  case "nombre":
		  validarCampo(expresiones.nombre,e.target,"fName");
		  break;
	  
	  case "correo":
		  validarCampo(expresiones.correo, e.target, "fEmail");
		  break;
	  
	  case "direccion":
		  validarCampo(expresiones.nombre, e.target, "fAddress");
		  break;
	  
	  case "apellido":
		  validarCampo(expresiones.nombre, e.target, "fLastN");
		  break;
	  
	  case "password":
		  validarCampo(expresiones.password, e.target, "fPassword");
		  break;
	  
	  case "telefono":
		  validarCampo(expresiones.telefono, e.target, "fPhone");
      break;
  }
};
const validarCampo = (expresion,input,id) => { //
	 if (expresion.test(input.value)) {
     document.getElementById(id).classList.remove("is-invalid");
     document.getElementById(id).classList.add("is-valid");
   } else {
     document.getElementById(id).classList.add("is-invalid");
     document.getElementById(id).classList.remove("is-valid");
   }
}
inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario); // se ejecuta cuando levanto la tecla
  input.addEventListener("blur", validarFormulario); //cuando hacemos click fuera de los campos a rellenar se ejecta.
});
formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //evita que al pulsar submit, guarde los datos y cambie la direccion del browser.
});


//Otra forma de hacerlo abajo, pero ésta no es dinámica y no valida el input en el momento, si no cuando se pulsa el boton SUBMIT valida todos los campos a la vez:
/*
// Exercise 6
function validate() {
  var error = 0;
  // Get the input fields
  var fName = document.getElementById("fName");
  var fEmail = document.getElementById("fEmail");
  var fAddress = document.getElementById("fAddress");
  var fLastN = document.getElementById("fLastN");
  var fPassword = document.getElementById("fPassword");
  var fPhone = document.getElementById("fPhone");

  // Get the error elements
  var errorName = document.getElementById("errorName");
  var errorEmail = document.getElementById("errorEmail");
  var errorAddress = document.getElementById("errorAddress");
  var errorLastN = document.getElementById("errorLastN");
  var errorPassword = document.getElementById("errorPassword");
  var errorPhone = document.getElementById("errorPhone");

  // Validate fields entered by the user: name, phone, password, and email
  if (
    fName.value == "" ||
    fName.value.length <= 3 ||
    !fName.value.match(expresiones.nombre)
  ) {
    fName.classList.remove("is-valid");
    fName.classList.add("is-invalid");
    //errorName.classList.add("invalid-feedback");
    
  } else {
    fName.classList.remove("is-invalid");
    fName.classList.add("is-isvalid");
  }

  if (
    fEmail.value == "" ||
    fEmail.value.length <= 3 ||
    !fEmail.value.math(expresiones.correo)
  ) {
    fEmail.classList.remove("is-valid");
    fEmail.classList.add("is-invalid");
    error++;
  } else {
    fEmail.classList.remove("is-invalid");
    fEmail.classList.add("is-valid");
  }
  if (
    fLastN.length <= 3 ||
    fLastN == "" ||
    !fLastN.value.match(expresiones.nombre)
  ) {
    fLastN.classList.remove("is-valid");
    fLastN.classList.add("is-invalid");
    error++;
  } else {
    fLastN.classList.remove("is-invalid");
    fLastN.classList.add("is-valid");
  }
  if (
    fAddress.length <= 3 ||
    fAddress == "" ||
    !fAddress.value.match(expresiones.nombre)
  ) {
    fAddress.classList.remove("is-valid");
    fAddress.classList.add("is-invalid");
    error++;
  } else {
    fAddress.classList.remove("is-invalid");
    fAddress.classList.add("is-valid");
  }

  if (
    fPhone.length <= 3 ||
    fPhone == "" ||
    !fPhone.value.match(expresiones.telefono)
  ) {
    fPhone.classList.remove("is-valid");
    fPhone.classList.add("is-invalid");
    error++;
  } else {
    fPhone.classList.remove("is-invalid");
    fPhone.classList.add("is-valid");
  }
  if (
    fPassword.length <= 3 ||
    fPassword == "" ||
    !fPassword.value.match(expresiones.password)
  ) {
    fPassword.classList.remove("is-valid");
    fPassword.classList.add("is-invalid");
    error++;
  } else {
    fPassword.classList.remove("is-invalid");
    fPassword.classList.add("is-valid");
  }
}


form.addEventListener("submit", (e) => {
	e.preventDefault();
})

document
  .querySelector(".needs-validation")
  .addEventListener("submit", validate);*/
