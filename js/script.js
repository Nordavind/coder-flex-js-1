/* 

Calculadora de boleta de honorarios (Chile)

Monto pactado bruto: Sobre el monto bruto de los honorarios pactados se calcula el 13,75%, que es el valor a retener.
Monto pactado liquido: Si lo pactado corresponde al monto líquido de los honorarios, se debe dividir este valor por 0,8625 para obtener el monto bruto.

Ej Bruto: 10.000 * 13,75% / 100 = 1.375 - 10.000 = 8.625 // Debes hacer la boleta por el $10.000, recibiras un pago de $8.625 y la retencion del SII sera de $1.375
Ej Liquido: 10.000 / 0,8625 = $11.594 // Debes hacer la boleta por $11.564

*/


// Funciones (CapturarNumero - CorroboraNumero - CalculaBoleta):

function capturarNumero() { // captura numero.
    let input = prompt("Ingrese el monto").replace(/[,.]/g, '');
    let monto = parseFloat(input);  
    return monto;
}

function corroboraNumero(monto){ // confirma si es un imnput correcto.
    if (isNaN(monto)) {
        console.log ("El número ingresado no es válido.");
        alert ("El número ingresado no es válido. Intentelo nuevamente.");
        return false;
    } else {
        console.log ("El número ingresado es válido.");
        return true;
    }
}

function calculaBoleta (montoAcalcular){ // funcion que calcula bruto y liquido.
    let porcentaje = (montoAcalcular * 13.75) / 100;
    let resultadoBruto = montoAcalcular - porcentaje;
    let resultadoLiquido = montoAcalcular / 0.8625;
    return {resultadoBruto, resultadoLiquido};
}

// Ejecuccion:

let monto;
let esNumeroValido = false;

while (esNumeroValido === false) {
    monto = capturarNumero();
    esNumeroValido = corroboraNumero(monto);
}

console.log("El número ingresado es:", monto);

let {resultadoBruto, resultadoLiquido} = calculaBoleta(monto);
resultadoLiquido = Math.floor(resultadoLiquido); // redondea hacia abajo el numero para eliminar decimales.

alert ("Si lo pactado fue en bruto, debes hacer la boleta por $" + monto + " y recibirás $" + resultadoBruto + " - " + "Si lo pactado fue en liquido, debes hacer la boleta por $" + resultadoLiquido + " y recibirás $" + monto + ".");