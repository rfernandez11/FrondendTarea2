function IniciarSeccion(){
    usuario = document.getElementById('txtUser').value;
    password = document.getElementById('txtPass').value;
   
    if(usuario != "admin"){
        
        swal({
            title: "Error en Inicio de Sección",
            text: "Usuario incorrecto",
            icon: "error",
        });
    }else if(password != "123456"){
        swal({
            title: "Error en Inicio de Sección",
            text: "Contraseña incorrecta",
            icon: "error",
        });
        
    }else{
        swal({
            title: "Inicio de Sección",
            text: "Bienvenido " + usuario,
            icon: "success",
        }).then(() =>{
            window.location.href = "./Pages/Inicio/Inicio.html";
        })
       
    }
}