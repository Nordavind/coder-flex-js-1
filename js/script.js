/* 

Calculadora de boleta de honorarios (Chile)

Monto pactado bruto: Sobre el monto bruto de los honorarios pactados se calcula el 13,75%, que es el valor a retener.
Monto pactado liquido: Si lo pactado corresponde al monto líquido de los honorarios, se debe dividir este valor por 0,8625 para obtener el monto bruto.

Ej Bruto: 10.000 * 13,75% / 100 = 1.375 - 10.000 = 8.625 // Debes hacer la boleta por el $10.000, recibiras un pago de $8.625 y la retencion del SII sera de $1.375
Ej Liquido: 10.000 / 0,8625 = $11.594 // Debes hacer la boleta por $11.564

*/


// Funcione que captura numero:
function capturarNumero() { // captura numero.
    let input = prompt("Ingrese el monto").replace(/[,.]/g, '');
    let monto = parseFloat(input);  
    return monto;
}

// Funcione que corrobora numero:
function corroboraNumero(monto){
    if (isNaN(monto)) {
        console.log ("El número ingresado no es válido.");
        alert ("El número ingresado no es válido. Intentelo nuevamente.");
        return true;
    } else {
        console.log ("El número ingresado es válido.");
        return false;
    }
}

// Funcione que calcula numero (bruto y liquido):
function calculaBoleta (montoAcalcular){ // funcion que calcula bruto y liquido.
    let porcentaje = (montoAcalcular * 13.75) / 100;
    let resultadoBruto = montoAcalcular - porcentaje;
    let resultadoLiquido = montoAcalcular / 0.8625;
    return {resultadoBruto, resultadoLiquido};
}

// Funcion flecha que agrega calculo al array calculos realizdos:
const agregarCalculo = (monto,resultadoBruto,resultadoLiquido) => { // funcion que agrega el calculo a un array.
    const Monto = monto;
    const TotalBruto = resultadoBruto;
    const TotalLiquido = resultadoLiquido;
    
    const calculo = {Monto: monto, ResultadoBruto: resultadoBruto, ResultadoLiquido: resultadoLiquido};
    calculosRealizados.push(calculo);
}

// Ejecuccion del script:
const calculosRealizados =  [] // Array de calculos realizados.
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
    resultadoLiquido = Math.floor(resultadoLiquido); // redondea hacia abajo el numero para eliminar decimales.
    
    agregarCalculo(monto,resultadoBruto,resultadoLiquido);
    console.table (calculosRealizados);
    
    alert ("Si lo pactado fue en bruto, debes realizar la boleta por $" + monto + " y recibirás $" + resultadoBruto + " - " + "Si lo pactado fue en liquido, debes realizar la boleta por $" + resultadoLiquido + " y recibirás $" + monto + ".");

    deseaContinuar = confirm ("¿Deseas realizar otro cálculo?");

} while (deseaContinuar);



