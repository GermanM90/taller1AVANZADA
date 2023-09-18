function obtenerNombre(codigo){
    return codigo.split(":")[1]
}
console.log(obtenerNombre("ARQ2555: Sara Bel-Sun"))

let nombrePiloto=(codigo) => codigo.split(":")[1]
console.log (nombrePiloto("ARQ2555:Sara Bel-Sun"))