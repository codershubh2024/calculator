let currentValue = "";
document.querySelector("#display").value = currentValue;

function one(){
    document.getElementById('one');
    currentValue = currentValue + '1' ;
    document.querySelector("#display").value = currentValue;
}
function two(){
    document.getElementById('two');
    currentValue = currentValue + '2' ;
    document.querySelector("#display").value = currentValue;
}
function three(){
    document.getElementById('three');
    currentValue = currentValue + '3' ;
    document.querySelector("#display").value = currentValue;
}
function four(){
    document.getElementById('four');
    currentValue = currentValue + '4' ;
    document.querySelector("#display").value = currentValue;
}
function five(){
    document.getElementById('five');
    currentValue = currentValue + '5' ;
    document.querySelector("#display").value = currentValue;
}
function six(){
    document.getElementById('six');
    currentValue = currentValue + '6' ;
    document.querySelector("#display").value = currentValue;
}
function seven(){
    document.getElementById('seven');
    currentValue = currentValue + '7' ;
    document.querySelector("#display").value = currentValue;
}
function eight(){
    document.getElementById('eight');
    currentValue = currentValue + '8' ;
    document.querySelector("#display").value = currentValue;
}
function nine(){
    document.getElementById('nine');
    currentValue = currentValue + '9' ;
    document.querySelector("#display").value = currentValue;
}
function zero(){
    document.getElementById('zero');
    currentValue = currentValue + '0' ;
    document.querySelector("#display").value = currentValue;
}
function dzero(){
    document.getElementById('dzero');
    currentValue = '00' ;
    document.querySelector("#display").value = currentValue;
}
function plus(){
    document.getElementById('plus');
    currentValue = currentValue + '+' ;
    document.querySelector("#display").value = currentValue;
}
function sub(){
    document.getElementById('sub');
    currentValue = currentValue + '-' ;
    document.querySelector("#display").value = currentValue;
}
function mul(){
    document.getElementById('mul');
    currentValue = currentValue + '*' ;
    document.querySelector("#display").value = currentValue;
}
function devide(){
    document.getElementById('devide');
    currentValue = currentValue + '/' ;
    document.querySelector("#display").value = currentValue;
}
function dot(){
    document.getElementById('dot');
    currentValue = currentValue + '.' ;
    document.querySelector("#display").value = currentValue;
}
// function per(){
//     document.getElementById('per');
//     currentValue = currentValue + '%' ;
//     document.querySelector("#display").value = currentValue;
// }
// document.getElementById('per').addEventListener('click', per);

function del(){
    document.getElementById('del');
    currentValue = currentValue.substring(0, currentValue.length-1) ;
    document.querySelector("#display").value = currentValue;
}
// document.getElementById('del').addEventListener('click', del);

function clear(){
    currentValue = '';
    document.querySelector("#display").value = currentValue;
}
// add event listener to clear btn
document.getElementById('clear').addEventListener('click', clear);

function equal(){
    document.getElementById('equal');
    currentValue = eval(currentValue) 
    document.querySelector("#display").value = currentValue;
}