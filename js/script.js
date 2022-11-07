//Declaramos variables
//Estas variables globales se utilizan al momento de realizar una operacion 
var operandoa;
var operandob;
var operacion;

/*Se declara una funcion que trae por id los elementos del documento HTML con los que se va a interactuar 
Esta funcion se ejecuta por medio del evento onload que se encuentra en el body
*/
    function init(){
    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
}


//Eventos de click
//Cada vez que se produce un evento de click se ejecuta una funcion que modifica la zona donde la calculadora muestra el resultado y los numeros que el usuario pulso 
uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
reset.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
}

//Esta funcion elimina el contenido de la secciion de resultado de la calculadora 
function limpiar(){
    resultado.textContent = "";
}

//Esta funcion deja las variables de operacion en 0, para volver a ser utilizadas en una nueva operacion 
function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

/*Esta funcion ejecuta un trozo de codigo dependiendo de la operacion realizada 
El resultado se guardara en la variable res y esta misma se mostrara en el documento HTML ne la seccion del resultado
*/
function resolver(){
    var res = 0;
    switch(operacion){
    case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
    case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
    case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    resultado.textContent = res;
}

//===========DARK MODE==========
function darkMode(){
    let elements = document.body;
    elements.classList.toggle("dark-mode");
}
