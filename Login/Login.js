let button = document.getElementById("login")
let usuario = document.getElementById("usuario")
let contraseña = document.getElementById("clave")

button.addEventListener("click", function() {
    if(contraseña.value.length != 8 || usuario.value.length != 10){
        alert("verifique los valores ingresados")
    } else{
        alert("cantidad permitida")
    }
 
})