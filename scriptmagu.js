// MATH FLOOR redondea el numero y MATH RANDOM se multiplica por 100 porque solo da resultados entre 0 y 1.
let numero = Math.floor(Math.random() * 100 + 1)

// SELECCIONAMOS EL ID DE HTML PARA DEVOLVER UN NUM
let ingresarNumero = document.getElementById("ingresarNumero")

// SELECCIONAMOS EL ID DE HTML PARA DEVOLVER UN MSJ
let mensaje = document.getElementById("mensaje")
let intento = document.getElementById("intento")
let intentos = 0

// Funcion de boton COMPROBAR
function resultado() {
    intentos++
    intento.textContent = intentos
    let numeroIngresado = parseInt(ingresarNumero.value)


    // SE PONE MENSAJE.TEXTCONTENT PORQUE ESTA ES UNA FUNCION VINCULADA CON GETELEMENTBYID
    if (numero == numeroIngresado) {
        mensaje.textContent = "FELICITACIONES, Adivinaste el numero"
        mensaje.style.color = "green" // LE DAMOS ESTILO AL MSJ
    } else if (numeroIngresado > 100 || numeroIngresado < 1 || isNaN(numeroIngresado)) {
        mensaje.textContent = "ERROR, el numero debe ser entre 1 y 100"
        mensaje.style.color = "red"
    } else if (numeroIngresado < numero) {
        mensaje.textContent = "Es un poco mas arriba"
        mensaje.style.color = "blue"
    } else {
        mensaje.textContent = "Un poco menos!"
        mensaje.style.color = "red"
    }
}
