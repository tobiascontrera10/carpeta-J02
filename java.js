/* objetos con clase */

class Autos{
    constructor(marca, modelo, kilometraje, precio, titular){
        this.marca = marca,
        this.modelo = modelo,
        this.kilometraje = kilometraje,
        this.precio = precio
        this.titular = titular
    }
}
const autoUno = new Autos ("Fiat", 2007, "12000km", "$1.200.000", "Juan")
console.log(autoUno)

const autoDos = new Autos ("Renault", 2014, "70.000km", "$1.800.000", "Pedro")
console.log(autoDos)

const autoTres = new Autos ("Nissan", 2018, "64.000km", "$2.800.000", "Guillermo")
console.log(autoTres)


const autoCuatro = new Autos ("Peugeot", 2016, "104.000km", "$1.600.000", "Claudio")
console.log(autoCuatro)

const autoCinco = new Autos ("Ford", 1996, "134.000km", "$600.000", "Jose")
console.log(autoCinco)

/* objetos y arrays */
const catalogo = [autoUno, autoDos, autoTres, autoCuatro, autoCinco]
console.log(catalogo)




/* catalogo CASE 1 */
function mostrarCatalogo(){
    alert("Podra ver nuestro catalogo en la consola")
    for(let Autos of catalogo){
        console.log(catalogo)
    }
}


/*Agregar un auto CASE 2  */
function nuevoAuto(){
    let marcaIngresada = prompt("ingrese la marca del veiculo:")
    let anoVeiculo = parseInt(prompt("ingrese el año del veiculo:"))
    let kilometrosVeiculo = prompt("ingrese la cantidad de kilometros:")
    let precioVeiculo = parseInt(prompt("ingrese el precio del veiculo:"))
    let nombreTitular = prompt("ingrese nombre del propietario:")

    let nuevoVeiculo = new Autos(catalogo.length+1, marcaIngresada, anoVeiculo, kilometrosVeiculo, precioVeiculo, nombreTitular  )
    console.log(nuevoVeiculo)
    
    catalogo.push(nuevoVeiculo) /* se agrega al catalogo el veiculo */

}

/* eliminar libro CASE 4 */
function datosPersonal(){
    let nombre = prompt("Ingrese su nombre y apellido:")
    let numero = prompt("ingrese su numero de telefono")
    console.log(`Su nombre es ${nombre} y su numero es ${numero} `)
    alert(`un operarador se pondra en contacto con usted ${nombre}`)
}



/* MENU de opcion para el usuario */
function preguntarOpcion(){
    let opcion = parseInt(prompt("ingrese la opcion que desea realizar: 1- Ver catalogo de auto / 2- Agregar un auto al catalogo / 3- Acesoramiento personal / 0- Salir"))
    menu(opcion)
}

function menu(opcionSeleccionada){
    switch(opcionSeleccionada){
        case 0:
            salir = true
            alert("Gracias por visitarnos")
        break
        
        case 1:
            mostrarCatalogo()
        break
        
        case 2:
            nuevoAuto()
            console.log(catalogo)
            alert("su auto fue agregado a la consola")
        break

        case 3:
            alert("Trabajamos con: Peugeot, Renault, Ford, Nissan, Toyota, Chevrolet")
            
        break

        case 4:
            datosPersonal()
            
            
        break
    }
}

//CODIGO
let salir
while (salir != true) {
    preguntarOpcion()
    
}