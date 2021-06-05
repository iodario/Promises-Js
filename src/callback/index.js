// callback
// Its a function that when creating it we pass a second function as a parameter

function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback){
 return callback (num1, num2);

}

console.log(calc(6, 2, sum));

// callback and setTimeOut

function date(callback) {
    console.log(new Date);
    setTimeout(()=>{
            let date = new Date;
            callback(date);
    },3000);
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);


//another example 
//----------------------------------------------------------------
//
//----------------------------------------------------------------
//
function suma(v1, v2) {
    const resultado = v1 + v2;
    console.log(resultado);
}
function resta(v1, v2) {
    const resultado = v1 - v2;
    console.log(resultado);
}
function multiplicacion(v1, v2) {
    const resultado = v1 * v2;
    console.log(resultado);
}
function division(v1, v2) {
    const resultado = v1 / v2;
    console.log(resultado);
}
function calcular(fn, v1, v2) {
    return fn(v1, v2);
}
calcular(suma, 10, 10); // 20
calcular(resta, 10, 10); // 0
calcular(multiplicacion, 10, 10); // 100
calcular(division, 10, 10); // 1














