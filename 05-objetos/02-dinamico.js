const user = { id: 1};

user.name = 'Almu',
user.guardar = function (){
    console.log('Guardando', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);