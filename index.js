var edad;
var puedeVotar;

function tomarValor() {
  edad = document.getElementById("input_edad").value;

  if (edad >= 18) {
    puedeVotar = "Puede Votar.";
  }
  else {
    puedeVotar = "No Puede Votar, todavía le faltan " + (18 - edad) + " años.";
  }

  alert(puedeVotar);
}
