let calcularTemperaturaMediaDiaria = (temperaturaMaxima, temperaturaMinima) => (temperaturaMaxima + temperaturaMinima) / 2
let temperaturaMaximaD1 = 20; 
let  temperaturaMinimaD1 = 15;
let temperaturaMediaD1 = calcularTemperaturaMediaDiaria(temperaturaMaximaD1, temperaturaMinimaD1);
console.log(`La temperatura media del día 1 es: ${temperaturaMediaD1}`);
let temperaturaMaximaD2 = 15; 
let  temperaturaMinimaD2 = 25;
let temperaturaMediaD2 = calcularTemperaturaMediaDiaria(temperaturaMaximaD2, temperaturaMinimaD2);
console.log(`La temperatura media del día 2 es: ${temperaturaMediaD2}`);
let temperaturaMaximaD3 = 20; 
let  temperaturaMinimaD3 = 25;
let temperaturaMediaD3 = calcularTemperaturaMediaDiaria(temperaturaMaximaD3, temperaturaMinimaD3);
console.log(`La temperatura media del día 3 es: ${temperaturaMediaD3}`);
let temperaturaMaximaD4 = 30; 
let  temperaturaMinimaD4 = 20;
let temperaturaMediaD4 = calcularTemperaturaMediaDiaria(temperaturaMaximaD4, temperaturaMinimaD4);
console.log(`La temperatura media del día 4 es: ${temperaturaMediaD4}`);
let temperaturaMaximaD5 = 27; 
let  temperaturaMinimaD5 = 20;
let temperaturaMediaD5 = calcularTemperaturaMediaDiaria(temperaturaMaximaD5, temperaturaMinimaD5);
console.log(`La temperatura media del día 5 es: ${temperaturaMediaD5}`);
let temperaturaMaximaD6 = 20; 
let  temperaturaMinimaD6 = 30;
let temperaturaMediaD6 = calcularTemperaturaMediaDiaria(temperaturaMaximaD6, temperaturaMinimaD6);
console.log(`La temperatura media del día 6 es: ${temperaturaMediaD6}`);
let temperaturaMaximaD7 = 18; 
let  temperaturaMinimaD7 = 28;
let temperaturaMediaD7 = calcularTemperaturaMediaDiaria(temperaturaMaximaD7, temperaturaMinimaD7);
console.log(`La temperatura media del día 7 es: ${temperaturaMediaD7}`);
let temperaturaMediaSemanal = (temperaturaMediaD1+temperaturaMediaD2+temperaturaMediaD3+temperaturaMediaD4+temperaturaMediaD5+temperaturaMediaD6+temperaturaMediaD7) / 7
console.log(`la temperatura media semanal en la luna de Endor es de: ${temperaturaMediaSemanal}`)