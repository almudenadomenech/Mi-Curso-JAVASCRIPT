
function crearUsuario(name, email){
    return {
        
        email: email,
        name: name,
        activo: true,
        recuperarClave: function(){
            console.log('recuperando clave...');
        }
    }

}

let user1 = crearUsuario('almudena','usuario1@gmail.com');
let user2 = crearUsuario('Maria','usuario2@gmail.com');


console.log(user1, user2);


