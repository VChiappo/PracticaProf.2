
function loguear() {
    let user=document.getElementById("user").value;
    let pas=document.getElementById("password").value;

    if (user=="Juan" && pas=="1234")
        {
            window.Location="welcome.html";

        }
        else
        {
           alert("Datos incorrectos");

        }
    }