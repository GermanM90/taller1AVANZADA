let salario=3500000 
let comisionLicencia=1500000
let deducionesImpuestos=0.05

function calcularSalarioMensual(licenciasVendidas) {
    const comisionTotal = comisionLicencia * licenciasVendidas;
    const totalDevengado = salario + comisionTotal;
    const impuestos = totalDevengado * deducionesImpuestos;
    const salarioFinal = totalDevengado - impuestos;
    return salarioFinal;
  }

  const licenciasVendidas = 5; 

  const salarioMensual = calcularSalarioMensual(licenciasVendidas);
  
  console.log(`El salario mensual del vendedor es: ${salarioMensual}`);

  
