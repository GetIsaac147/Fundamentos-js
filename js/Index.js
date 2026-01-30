function cambiar() {
    const nombre = 'Isaac'
    alert(`Hola Mundo desde un archivo externo ${nombre}`)
}

const ecma = () => {
    alert('Ahora con ECma6', j)
}

var i = 4
let j = 10

var i = '4'
console.log('@@@ variable => ', i, j)

//let isInLove = prompt('¿Estás enamorado?')
//console.log('@@@ isInLove => ', isInLove, typeof isInLove)

const suma = () => {
    let valor1 = prompt('Dame el primer valor')
    let valor2 = prompt('Dame el segundo valor')
    let suma = Number(valor1) + Number(valor2)
    // parseInt() floatint()
    const label = document.getElementById('suma')
    label.textContent = `La suma es: ${suma}`
    console.log('@@@ suma => ', suma)
    if (suma > 100 && suma < 199) {
        console.log('@@@ La suma es mayor a 100', suma)
    } else if (suma < 30) {
        suma()
    } else if (suma === 200) {
        console.log('@@@ Comparando igual a 200 con tipo de variable', suma)
    }
}

