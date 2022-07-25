/* rentabilidad de un producto  */

function rentabilidad (producto, valorCompra, valorVenta){
    let formula1 = valorVenta - valorCompra
    let formula2 = formula1 / valorVenta
    let promedio = formula2 * 100
    alert('el producto ' + producto + ' tiene una rentabilidad del :'+ promedio + "%")
}

let objeto = prompt("ingrese el nombre del producto que vende")
let dato1 = prompt("valor del producto al que lo compra")
let dato2 = prompt("valor del producto al que lo vende")

rentabilidad(objeto, dato1, dato2)


