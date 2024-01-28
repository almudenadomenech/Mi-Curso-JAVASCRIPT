// Muestra los números del 1 al 5

for (let i = 0; i < 6; i++) {
    console.log(i);      
}

// Muestre número y en el 12 se rompa el bucle

for (let a= 0; a < 20; a++){
    if (a== 12){
        break;
    }
    console.log(a);
}

// Saltar algun numero, vale para saltar cualquier elemento

for (let i = 0; i < 20; i++){
    if(i == 12){
        continue;
    }
    console.log(i);
}