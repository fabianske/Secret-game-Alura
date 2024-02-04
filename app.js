let ListaNS =[];
let numerosecreto = generarnum();
let intentos = 1;
let numMax=10;


function asignarElemento(elemento, texto){
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarInt() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numerosecreto) {
        asignarElemento('p',`Acertaste el número en ${intentos} ${(intentos===1) ?'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
     if (numeroDeUsuario > numerosecreto){
        asignarElemento('p','El numero secreto es menor!')
        } else {  
        asignarElemento('p','El numero secreto es mayor!')
        }
        intentos++;
        limpiarinput();
    }
    return;
}

function limpiarinput (){
   document.querySelector('#valorUsuario').value = '';
}

function generarnum() {
    let numGen = Math.floor(Math.random()*numMax)+1;
    console.log(numGen);
    console.log(ListaNS);
    //si el numero generado esta inclido
    if (ListaNS.length == numMax){
        asignarElemento('p', 'Ya se usaron todos los numeros posibles!');
    }
        if (ListaNS.includes(numGen)) { 
            return generarnum();
        }else{
        ListaNS.push(numGen);
            return numGen
    } 
}

function condicionesiniciales() {
    asignarElemento('h1', 'juego del numero secreto update!');
    asignarElemento('p', `Indica un numero del 1 al ${numMax}`);
    numerosecreto = generarnum();
    intentos=1;
}

function reiniciarjuego(){
    limpiarinput();
    condicionesiniciales();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

condicionesiniciales();

//push add elements to an array **lenght-1 : last element--...... push and pop (last element)