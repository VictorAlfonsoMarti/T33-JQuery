/*
 *  T32-Ejercicio 14
 *
 */

function Retr(){
    // botón para eliminar el último dígito insertado en el panel resultado
    let cont = $("#resultado").text();

    // controlamos si es un punto para poder printar nuevo
    if (cont.substring(cont.length-1,cont.length) == '.'){
        // modificamos el contenido del elemento punto para asiganrlo a false
        $("#punto").text('false');
    }  

    
    if(cont != "0"){
        // eliminar la última entrada
        $("#resultado").html(cont.substring(0,cont.length-1));
        if (cont.length == 1){
            // si el panel esta vacio, asigamos un 0
            $("#resultado").html("0");
        }
    }
}

function CE(){
    // botón para eliminar toda la memoria de la caluladora
    $("#memoria").html("");
    $("#resultado").html("0");
    // modificamos el contenido del elemento punto para asiganrlo a false
    $("#punto").text('false');
}

function C(){
    // botón para eliminar el texto del panel del resultado
    $("#resultado").html("0");
    // modificamos el contenido del elemento punto para asiganrlo a false
    $("#punto").text('false');
}

function InsertNumber(n){
    // botón para insertar número en el panel de resultado

    // guardamos el contenido
    let cont = $("#resultado").text();
    
    // si el contenido es 0, es el primer número insertado
    if($("#resultado").text() == "0")
    {   
        // imprimimos el número marcado
        $("#resultado").html(n);
    }
    // si no (ya hay número), pero menos que 30 números
    else if (cont.length < 31) 
    {
        // añadimos el numero al string del numero anterior
        $("#resultado").html(cont + n);
    }
}

function InsertDot(){
    // función para añadir un punto, si no existe

    // guardamos el contenido del panel
    let cont = $("#resultado").text();
    
    // si no hemos puesto un boton, añadimos
    if ($("#punto").text() == 'false'){
        $("#resultado").html(cont + '.');
    }

    // modificamos el contenido del elemento punto para asiganrlo a true
    $("#punto").text('true');
}

function SetOperator(op){
    // botón para guardar el operador y el contenido del panel en memoria
    $("#memoria").html($("#resultado").text());
    $("#operador").html(op);
    // limpiamos el panel resultado
    C();
    // modificamos el contenido del elemento punto para asiganrlo a false
    $("#punto").text('false');
}

function MakeOp(){
    // botón para realizar la operación y lo printan en el panel de resultado

    // recogemos los valores y el operador
    let n1 = $("#memoria").text();
    let n2 = $("#resultado").text();
    let op = $("#operador").text();
    let resultado;
    
    // según el operador, calculamos
    switch(op){
        case "+":
            resultado = +n1 + +n2;
            break;
        case "-":
            resultado = +n1 - +n2;
            break;
        case "*":
            resultado = +n1 * +n2;
            break;
        case "/":
            resultado = +n1 / +n2;
            break;
        case "Raiz":
            resultado = Math.pow(+n1,+n2);
            break;
        case "%":
            resultado = +n1 % +n2;
            break;
        case "1/x":
            resultado = +n2 + (1/+n2);
            break;
    }

    // printamos el resultado
    $("#resultado").html(resultado);

}