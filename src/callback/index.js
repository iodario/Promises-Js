//callback
// Es una función que al crearla le pasamos como parámetro una segunda función

function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback){
 return callback (num1, num2);

}

console.log(calc(6, 2, sum));

// callback con setTimeOut

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









//entendiendo --------------
// function getMonth() {
//     console.log(new Date);
    
// }
// getMonth();
//ESTO ME VA A DEVOLVER LA FECHA Y HORA ACTUAL -------------------- 2021-06-04T22:28:24.673Z



// // AHORA quiero que me devuelva solamente el dia del mes, despues la hora
// var d = new Date();
// console.log(d.getDate());
// // devuelve 4

// var d = new Date();
// console.log(d.getHours());
// // devuelve 19


// Fecha  y Hora  - Las funciones más usadas para esta funcionalidad son:

// Función	Descripción
// getDate()	Devuelve el día del mes (entre el 1 y el 31)
// getDay()	Devuelve el día de la semana (entre el 0 y el 6)
// getMonth()	Devuelve el mes (entre el 0 y el 11)
// getFullYear()	Devuelve el año (en formato de 4 dígitos)
// getHours()	Devuelve la hora (entre el 0 y el 24)
// getMinutes()	Devuelve los minutos (desde 0 a 59)
// getSeconds()	Devuelve los segundos (desde 0 a 59)
// getTime()	Devuelve el número de milisegundos desde el 01/ Enero /1970
// getTimezoneOffset()	Devuelve la diferencia de horario en minutos entre la hora local y GMT (Meridiano de Greenwich)
// getUTCHours()	Devuelve la hora de acuerdo a UTC (Tiempo Universal Coordinado)

// Para usar estas funciones, es tan sencillo como crear una variable con new Date() para definir la fecha y hora actual
//  y luego pintar en pantalla los datos que deseemos. En el ejemplo siguiente, pintamos el día del mes en el que estamos.


//----------------------------------------------------------------
//Otro ejemplo de callback con operaciones algebraicas

// function suma(v1, v2) {
//     const resultado = v1 + v2;
//     console.log(resultado);
// }

// function resta(v1, v2) {
//     const resultado = v1 - v2;
//     console.log(resultado);
// }

// function multiplicacion(v1, v2) {
//     const resultado = v1 * v2;
//     console.log(resultado);
// }

// function division(v1, v2) {
//     const resultado = v1 / v2;
//     console.log(resultado);
// }

// function calcular(fn, v1, v2) {
//     return fn(v1, v2);
// }
// calcular(suma, 10, 10); // 20
// calcular(resta, 10, 10); // 0
// calcular(multiplicacion, 10, 10); // 100
// calcular(division, 10, 10); // 1




