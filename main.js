


function calcularHipoteca (precioInmueble, plazoEnMeses, tipoInteres) {
    let resultadoHipoteca = precioInmueble / (( (1 - ( 1 + tipoInteres) ** -plazoEnMeses)) / tipoInteres)
    return resultadoHipoteca
}




let formulario = document.getElementById("formulario") 
formulario.addEventListener("submit", function(e) {
    e.preventDefault()
    let precioInmueble = parseInt(document.getElementById("precioInmueble").value)
    let plazoEnMeses = parseInt(document.getElementById("plazoEnMeses").value)
    let interes = parseInt(document.getElementById("tipoInteres").value)
    

    let resultadoHipoteca = calcularHipoteca(precioInmueble, plazoEnMeses, (interes/100)/12);

    resultadoHipoteca = resultadoHipoteca.toFixed(2)

    let resultadoDefinitivo = document.getElementById("resultado-definitivo")
    resultadoDefinitivo.innerHTML = resultadoHipoteca;
} )








