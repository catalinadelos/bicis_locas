function validateForm () {
  // your code here
  nombre=$("#name").val()
  apellido=$("#lastname").val()
  correo=$("#input-email").val()
  contrasena=$("#input-password").val()
  //bici=
  twitter=$("#input-social").val()
  


  if ((nombre.length == 0) || (apellido.length == 0) || (correo.length == 0) || (contraseña.length == 0) || (twitter.length == 0)){
    alert("Todos los campos son requeridos")
  }else{

    //NOMBRE
    //- nombre entre 3 y 8 caracteres de largo
    if (nombre.length < 3 || nombre.length > 8){
      alert ("Ingresar nombre entre 3 y 8 caracteres de largo")
    }else{
      //empezar con mayuscula
      if (nombre.match("^[A-Z]")){
        alert("El nombre esta ok")
      }else{
        alert("El nombre debe empezar con mayuscula")
      }
    }

    //CONTRASEÑA
    if (contrasena.match("^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{6,}$")){
      alert("La contraseña esta ok")
    }else{
      alert("El password debe tener al menos un numero y una letra y debe ser minimo de largo 6")
    }

  }
}