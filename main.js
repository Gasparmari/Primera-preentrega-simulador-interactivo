// funciones
function abonarConDebito () {

    let montodebito = prompt('Ingrese el monto a pagar con debito (0 PARA SALIR): ' );

    while(montodebito !== "0") {
        let tarjetadebito = prompt('ingrese con cual tarjeta desea pagar(ejempolo: NARANJA): ');
        alert('el monto a pagar ' + montodebito + '$ pesos con la tarjeta ' + tarjetadebito + ' a sido correctamente abonado');

            montodebito = prompt('Ingrese un monto nuevamente si quiere volver a abonar o apriete (0. PARA SALIR):  ')
    }

}

function abonarConCredito () {

    let tarjeta = prompt('Ingrese con que tarjeta desea abonar: 1. MASTERCARD - 2. VISA - 3.NARANJA - 0. SI DESEA SALIR');

    while(tarjeta !== "0") {
        let montocredito = prompt('Ingrese el monto a pagar con credito (0. PARA SALIR): ' );

        switch(tarjeta) {

            case "1":

                let mastercard = prompt('Elija en cuantas cuotas desea realizar el pago: 1. UN PAGO - 2. 3 CUOTAS SIN INTERES - 3. 6 CUOTAS CON 12% DE RECARGO - 0 PARA SALIR');
                while(mastercard !== "0") {
                    switch(mastercard) {
                        case "1":
                            alert('Ha realizado correctamente el pago de ' + montocredito + '$ pesos con su tarjeta mastercad en un pago')
                            break;
                        
                        case "2":
                            alert('Ha realizado correctamente el pago de ' + montocredito + '$ pesos con su tarjeta mastercad en 3 cuotas sin interes')
                            break;
                        
                        case "3":
                            alert('Ha realizado correctamente el pago de ' + montocredito + '$ pesos con su tarjeta mastercad en 6 cuotas con 12% de recargo')
                            break;
                        default:
                
                            alert("INGRESE ALGUNA DE LAS OPCIONES MOSTRADAS")
                            break;
                    
                    }
                    mastercard = prompt('Si desea volver a abonar con la misma tarjeta algun pago pendiente elija(0. PARA SALIR): 1. UN PAGO - 2. 3 CUOTAS SIN INTERES - 6 CUOTAS CON 12% DE RECARGO ')
                }
                break
            
            case "2":

            let visa = prompt('Elija como desea abonar: 1. UN PAGO - 2. 3 CUOTAS SIN INTERES - 3. 6 CUOTAS CON 12% DE RECARGO - 0 PARA SALIR');
            while(visa !== "0") {
                switch(visa) {
                    case "1":
                        alert('Ha realizado correctamente el pago de ' + montocredito + '$ pesos con su tarjeta visa en un pago')
                        break
                    
                    case "2":
                        alert('Ha realizado correctamente el pago de ' + montocredito + '$ pesos con su tarjeta visa en 3 cuotas sin interes')
                        break
                    
                    case "3":
                        alert('Ha realizado correctamente el pago de ' + montocredito + '$ pesos con su tarjeta visa en 6 cuotas con 12% de recargo')
                        break
                    default:
                
                        alert("INGRESE ALGUNA DE LAS OPCIONES MOSTRADAS")
                        break;
                    }
                    visa = prompt('Si desea volver a abonar con la misma tarjeta algun pago pendiente elija(0. PARA SALIR): 1. UN PAGO - 2. 3 CUOTAS SIN INTERES - 6 CUOTAS CON 12% DE RECARGO ')
                }   

                break
            
            case "3":

            let naranja = prompt('Elija como desea abonar: 1. UN PAGO - 2. 3 CUOTAS SIN INTERES - 3. 6 CUOTAS CON 12% DE RECARGO - 0 PARA SALIR');
            while(naranja !== "0") {
                switch(naranja) {
                    case "1":
                        alert('Ha realizado correctamente el pago de ' + montocredito + '$ pesos con su tarjeta naranja en un pago')
                        break;
                    
                    case "2":
                        alert('Ha realizado correctamente el pago de ' + montocredito + '$ pesos con su tarjeta naranja en 3 cuotas sin interes')
                        break;
                    
                    case "3":
                        alert('Ha realizado correctamente el pago de ' + montocredito + '$ pesos con su tarjeta naranja en 6 cuotas con 12% de recargo')
                        break;
                    default:
                
                        alert("INGRESE ALGUNA DE LAS OPCIONES MOSTRADAS")
                        break;
                    }
                    naranja = prompt('Si desea volver a abonar con la misma tarjeta algun pago pendiente elija(0. PARA SALIR): 1. UN PAGO - 2. 3 CUOTAS SIN INTERES - 6 CUOTAS CON 12% DE RECARGO ')
                }   
                break
            

            default:
                
                alert("INGRESE ALGUNA DE LAS OPCIONES MOSTRADAS")
                break;
        }
        
            tarjeta = prompt('Ingrese con que tarjeta desea abonar: 1. MASTERCARD - 2. VISA - 3.NARANJA - 4. MERCADO PAGO - 0. SI DESEA SALIR');
            
    }

}

// inicio del programa

let operacion = prompt('COMO DESEA ABONAR? 1. CREDITO / 2. DEBITO / 0. SI DESEA SALIR');

while(operacion !== "0") {

    switch(operacion) {

        case "1":

            abonarConCredito();
            
            break;

        case "2": 

            abonarConDebito();
            break

        default:

            alert("INGRESE ALGUNA DE LAS OPCIONES MOSTRADAS")
            break;
            
        
    }

    operacion = prompt('COMO DESEA ABONAR? 1. CREDITO / 2. DEBITO / 0. SI DESEA SALIR')

}




alert(" GRACIAS POR USAR NUESTRO SISTEMA ")
