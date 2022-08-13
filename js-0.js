/* No se usa ya.
es a modo de ejemplo para mostrar en el index
vincular el archivo js al index ejemplo <script src="app.js"></script>
Nota: se agrega al final del body por buenas practicas, evitar usarlo en el head del html5
*/

document.write('Hola!')


/*=====Declaración de las variables====== */

// Tipo String
let nombre ='Marcos'
let apellido = 'Gonzalez'

// Tipo numerico - para operaciones matematicas usar (parseInt) ejemplo en la linea 51
let dni =95745852
//Boleano true o false , encedido o apagado , 1 - 0 

let estadoCivil = 'true'
// se esta definiendo el valor de la variable al usar = '(valor)' - ejemplo dni='95745852'


// Template string, para mostrar todos los datos siendo llamados ${nombreVariable}
// usar las comillas magicas, se hacen con alt + 96 = `

console.log(`El nombre es ${nombre} el apellido es ${apellido} estado civil ${estadoCivil}`)

// usar la consola para ver las variables , click derecho en el index y usar "console"
// o presionar F12 para abrir el explorador.



/* Pedir información por teclado
para ver el ejemplo decomentar o comentar el codigo.
*/

// let v_st_nombre
// let v_st_apellido 

// v_st_nombre = prompt('Ingrese su nombre')
// v_st_apellido = prompt('Ingrese su apellido')

// console.log(`Nombre ingresado ${v_st_nombre} Apellido ${v_st_apellido}`)

/* Operaciones Matemacias  */


let  v_nu_num1,v_nu_num2,v_nu_resultado,v_nu_resultado2,v_nu_resultado3,v_nu_resultado4 //declaracion de multiples variables

 v_nu_num1 = parseInt(prompt('Ingrese valor 1'))
 v_nu_num2 = parseInt(prompt('Ingrese valor 2'))

 v_nu_resultado = v_nu_num1 + v_nu_num2
 v_nu_resultado2 = v_nu_num1 - v_nu_num2
 v_nu_resultado3 = v_nu_num1 * v_nu_num2
 v_nu_resultado4 = v_nu_num1 / v_nu_num2
 console.log(`El resultado de la suma es ${v_nu_resultado} resta ${v_nu_resultado2} multiplicacion ${v_nu_resultado3} y division ${v_nu_resultado4}`) 


 //Estructura condicional simple 
// usaremos las variables declaradas anteriormente a modo de ejemplo
// si vamos a usar una operacion con solo dos posibles valores la mejor practica es usar el operador ternario, ejemplo mas abajo
if(v_nu_resultado >= 10){
    console.log ('El resultado de la suma mayor o igual a 10')
} else { 
    console.log('el resultado de la suma es menor a 10')
}

// operador ternario (condicional)
v_nu_resultado >= 10 ? console.log ('Es mayor de 10') : console.log('Es menor de 10')

// si escribimos typeof + variable esto nos indica el tipo de variable que es

// estructura condicional anidada

 if(v_nu_resultado4 >= 7){
    console.log ('Es igual o mayor que 7')
 } else {
    if (v_nu_resultado4 >= 5) {
        console.log('El mayor o igual a 5')
    }else {
        console.log('No se cumplen las condiciones')
    }
 }

 // pd: si se va a usar una función en el console log siempre se debe llamar de la siguiente manera
 // ${Funcion.Parametro()}





















