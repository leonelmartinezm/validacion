const nombre = document.getElementById("name"),
email = document.getElementById("email"),
pass = document.getElementById("password"),
form = document.getElementById("form"),
parrafo = document.getElementById("warnings");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let warnings = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexNombre = /^([A-Za-z])+$/
    let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
    let entrar = false;
    /*if(nombre.value.length < 6 || nombre.value.length > 10){
        warnings += `Nombre no es valido <br>`
        entrar = true
    }*/

    if(!regexNombre.test(nombre.value)){
        warnings += `Nombre no es valido <br>`
        entrar = true
    }


    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warnings += `Email no es valido <br>`
        entrar = true
    }

    /*if(pass.value.length < 8) {
        warnings += `Contraseña no es valida <br>`
        entrar = true
    }*/

    if(!regexPass.test(pass.value)){
        warnings += `Contraseña no es valida(Entre 8 y 15 caracteres Un simbolo y un numero) <br>`
        entrar = true
    }

    

   if(entrar){
    parrafo.innerHTML = warnings;
   } 
   else{
    parrafo.innerHTML = "Enviado"
   }

})

