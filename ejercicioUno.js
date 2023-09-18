// Coordenadas XyY del Planeta 1
let coordenadaXPlanetaUno=10
let coordenadaYPlanetaUno=-20
// Coordenadas XyY del Planeta 2
let coordenadaXPlanetaDos=80
let coordenadaYPlanetaDos=10
//Proceso
let restasCoordenadasx=coordenadaXPlanetaDos-coordenadaXPlanetaUno
let restasCoordenadasy=coordenadaYPlanetaDos-coordenadaYPlanetaUno


let distanciaCalculada=Math.sqrt(Math.pow(coordenadaXPlanetaDos-coordenadaXPlanetaUno,2)+Math.pow(coordenadaYPlanetaDos-coordenadaYPlanetaUno,2))

console.log(`La distancia calculada es ${distanciaCalculada}`)