
/* var display = document.getElementById("display").innerHTML; */
let valorActual= '';
let valorAnterior= '';
let operador;
let res;

// insertarn nuemros en el display
function btn(num){ 
    if (num == '.' && valorActual.includes('.')) return
    valorActual =  valorActual + num;
    document.getElementById("valorAnterior").innerHTML=valorActual;
    /* document.getElementById("valorAnterior").innerHTM=valorActual; */
    
}
// operador
function operacion(sig){
    valorAnterior = valorActual;
    valorActual = '';
    operador = sig;
    document.getElementById("valorAnterior").innerHTM=valorAnterior;
}

// borrar todo
function simAC(){
    valorActual= '';
    valorAnterior='';
    res='';
    document.getElementById("valorAnterior").innerHTML=valorActual;
}

// borrar ultimo numero
function simbarra(){
    valorActual = valorActual.toString().slice(0, -1)
    document.getElementById("valorAnterior").innerHTML=valorActual;
}

//operaciones 
function simigual(){
  
    switch (operador) {
        case '+':
            res =parseFloat(valorAnterior) + parseFloat(valorActual); 
            break;
        case '-':
            res =parseFloat(valorAnterior) - parseFloat(valorActual); 
            break;
        case '*':
            res=parseFloat(valorAnterior) * parseFloat(valorActual); 
            break;
        case '/':
            res =parseFloat(valorAnterior) / parseFloat(valorActual); 
            break;
        case '^':
            res =Math.pow(parseFloat(valorAnterior),parseFloat(valorActual)); 
            break;      
        case '%':
            res =(valorActual/valorAnterior)*100+'%'; 
            break;      
    }
    
    document.getElementById("valorAnterior").innerHTML=`${valorAnterior} ${operador} ${valorActual}`;  
    document.getElementById("valorActual").innerHTML=res;
    valorActual=res;
    console.log(res)
}
