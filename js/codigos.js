// Declarar e inicializar contador de imagenes
var i = 0;

// Funcion carrusel
function carrusel() {
  i++;
  if (i > 4) i = 1;
  document.getElementById("imgcab").setAttribute("src", "img/img" + i + ".jpg");
  setTimeout("carrusel()", 3000);
}

// Validación de formulario
function validar() {
  var dni = document.getElementById("txtDNI").value;
  var apenom = document.getElementById("txtApeNom").value;
  var correo = document.getElementById("txtCor").value;
  var movil = document.getElementById("txtMovil").value;
  var campo1 = new RegExp("[1-9][0-9]+");
  var campo2 = new RegExp("[a-zA-Z]+");
  var campo3 = new RegExp("[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z]+");
  var campo4 = new RegExp("9[0-9]{2}(-?[0-9]{3}){2}");
  var estado = true;

  if (!campo1.test(dni)) {
    estado = false;
    alert("El DNI debe iniciar diferente a 0 y tener 8 números.");
  }

  if (!campo2.test(apenom)) {
    estado = false;
    alert("El nombre y apellido solo permite caracteres (máx 30).");
  }

  if (!campo3.test(correo)) {
    estado = false;
    alert("El correo debe ser válido. (máx 30)");
  }

  if (!campo4.test(movil)) {
    estado = false;
    alert("El móvil debe iniciar en 9 y tener 9 números.");
  }

  return estado;
}

// Nodos
function Nodos() {
  var nodo = document.createElement("LI");
  var valor = document.createTextNode("Nuevo Comentario");
  nodo.appendChild(valor);
  document.getElementById("txtArea").appendChild(valor);
}

// Usuarios y password, arreglos
function Usuarios() {
  let usuario = [
    "user1@hotmail.com",
    "user2@hotmail.com",
    "user3@hotmail.com",
    "user4@hotmail.com",
    "user5@hotmail.com",
  ];
  let contrasenia = ["user", "user2", "user3", "user4", "user5"];
  let personal = document.getElementById("usuario").value;
  let l = document.getElementById("contrasenia").value;

  for (let i = 0; i < 5; i++) {
    if (usuario[i] == user && contrasenia[i] == l) {
      alert("Felicitaciones ah accedido a un descuento de un carro");
      return;
    }
  }
  alert("Monto no alcanzado para entrar a la promocion");
}
