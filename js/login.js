let mail = document.getElementById("imail");
let clave = document.getElementById("contraseña");

function camposcompletos(campo1, campo2) {
    if ((campo1.value.length > 0 ) && (campo2.value.length > 0)) {
        return true
    }
    else {
        return false
    }
}

document.getElementById("inicio").addEventListener("click", function () {
    if (camposcompletos(mail, clave) == true) {
        localStorage.setItem("username",mail.value) 
         return (window.location.href = "portada.html"); }
    else
        return (alert("Debes completar todos los campos"))
})
