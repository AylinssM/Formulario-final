function mostrarFormulario() {
    var formulario = document.getElementById("formulario");
    var botonMostrar = document.getElementById("botonMostrar");
    
    formulario.style.display = "block";
    botonMostrar.style.display = "none";
}
// function enviarFormulario() {
//         var nombre = document.getElementById("nombre").value.toUpperCase();
//         var apellido = document.getElementById("apellido").value.toUpperCase();
//         var edad = document.getElementById("edad").value;
//         var dni = document.getElementById("dni").value;
//         var telefono = document.getElementById("telefono").value;
//         var direccion = document.getElementById("direccion").value.toUpperCase();
//         var ciudad = document.getElementById("ciudad").value.toUpperCase();
//         var pais = document.getElementById("pais").value.toUpperCase();
//         var codigoPostal = document.getElementById("codigo-postal").value;
//         var email = document.getElementById("email").value;
    
//         if (nombre === "" || apellido === "" || edad === "" || dni === "" ||
//             telefono === "" || direccion === "" || ciudad === "" || pais === "" ||
//             codigoPostal === "" || email === "") {
//             alert("Por favor, complete todos los campos del formulario.");
//             return false;
//         }
    
//         var formulario = document.getElementById("formulario");
//         formulario.style.display = "none";
    
//         var datos = document.getElementById("datos");
//         datos.innerHTML = "<p>Nombre: " + nombre + "</p>" +
//                           "<p>Apellido: " + apellido + "</p>" +
//                           "<p>Edad: " + edad + "</p>" +
//                           "<p>DNI: " + dni + "</p>" +
//                           "<p>Teléfono: " + telefono + "</p>" +
//                           "<p>Dirección: " + direccion + "</p>" +
//                           "<p>Ciudad: " + ciudad + "</p>" +
//                           "<p>País: " + pais + "</p>" +
//                           "<p>Código Postal: " + codigoPostal + "</p>" +
//                           "<p>Email: " + email + "</p>";
    
//         datos.style.display = "block";
    
//         return false;
// }
