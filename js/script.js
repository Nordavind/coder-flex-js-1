/* 
Calculadora de boleta de honorarios (Chile)
*SII: Servicio de impuestos internos (Administración Federal de Ingresos Tributarios).

Monto pactado bruto: Sobre el monto bruto de los honorarios pactados se calcula el 13,75%, que es el valor a retener.
Monto pactado líquido: Si lo pactado corresponde al monto líquido de los honorarios, se debe dividir este valor por 0,8625 para obtener el monto bruto.

Ej Bruto: 10.000 * 13,75% / 100 = 1.375 - 10.000 = 8.625 // Debes hacer la boleta por $10.000, recibirás un pago de $8.625.
Ej Líquido: 10.000 / 0,8625 = $11.594 // Debes hacer la boleta por $11.594, recibiras un pago de 10.000.
*/


// Funcion que captura numero:
function capturarNumero() { // captura numero.
    let input = prompt("Ingrese el monto").replace(/[,.]/g, '');
    // let monto = parseFloat(input);  
    // return monto;
    return parseFloat(input);
}

// Funcione que corrobora numero:
function corroboraNumero(monto){
    if (isNaN(monto) || monto < 0) {
        console.log ("El número ingresado no es válido.");
        alert ("El número ingresado no es válido. Intentelo nuevamente.");
        return true;
    } else {
        console.log ("El número ingresado es válido.");
        return false;
    }
}

// Función que calcula número (bruto y líquido):
function calculaBoleta (montoAcalcular){
    let porcentaje = (montoAcalcular * 13.75) / 100;
    let resultadoBruto = montoAcalcular - porcentaje;
    let resultadoLiquido = montoAcalcular / 0.8625;
    return {resultadoBruto, resultadoLiquido};
}

// Función flecha que agrega cálculo al array cálculos realizados:
const agregarCalculo = (monto,resultadoBruto,resultadoLiquido) => {
    const Monto = monto;
    const TotalBruto = resultadoBruto;
    const TotalLiquido = resultadoLiquido;
    
    const calculo = {Monto: monto, ResultadoBruto: resultadoBruto, ResultadoLiquido: resultadoLiquido};
    calculosRealizados.push(calculo);
}

// Ejecución del script:
const calculosRealizados =  [] // Array de cálculos realizados, requerido en consigna.
let deseaContinuar

do {
    let monto;
    let noEsNumeroValido = true;
    
    while (noEsNumeroValido) {
        monto = capturarNumero();
        noEsNumeroValido = corroboraNumero(monto);
    }
    console.log("El número ingresado es:" + monto);
    
    let {resultadoBruto, resultadoLiquido} = calculaBoleta(monto);
    resultadoLiquido = Math.floor(resultadoLiquido); // redondea hacia abajo el número para eliminar decimales.
    console.log("Resultado liquido: " + resultadoLiquido);
    console.log("Resultado bruto: " + resultadoBruto);
    
    agregarCalculo(monto,resultadoBruto,resultadoLiquido);
    console.table (calculosRealizados);
    
    alert ("Si lo pactado fue en bruto, debes realizar la boleta por $" + monto + " y recibirás $" + resultadoBruto + " - " + "Si lo pactado fue en liquido, debes realizar la boleta por $" + resultadoLiquido + " y recibirás $" + monto + ".");

    deseaContinuar = confirm ("¿Deseas realizar otro cálculo?");

} while (deseaContinuar);



