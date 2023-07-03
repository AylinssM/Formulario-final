function validarFormulario() {
    var edadInput = document.getElementById("edad");
    var edadValue = parseInt(edadInput.value);
    
    if (edadValue < 18) {
        alert("Eres menor de edad. No puedes continuar.");
        return false;
    }
    
    var emailInput = document.getElementById("email");
    var emailValue = emailInput.value;
    
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(emailValue)) {
        emailInput.classList.add("invalid-input");
        alert("El email no es válido. Por favor, introduce un email válido.");
        return false;
    }
    
    var dniInput = document.getElementById("dni");
    var dniValue = dniInput.value;
    
    var dniPattern = /^\d{8}[a-zA-Z]$/;
    
    if (!dniPattern.test(dniValue)) {
        dniInput.classList.add("invalid-input");
        alert("El DNI no es válido. Por favor, introduce un DNI válido.");
        return false;
    }
    
    var telefonoInput = document.getElementById("telefono");
    var telefonoValue = telefonoInput.value;
    
    var telefonoPattern = /^\d{9}$/;
    
    if (!telefonoPattern.test(telefonoValue)) {
        telefonoInput.classList.add("invalid-input");
        alert("El número de teléfono no es válido. Por favor, introduce un número de teléfono válido.");
        return false;
    }
    
    return true;
}