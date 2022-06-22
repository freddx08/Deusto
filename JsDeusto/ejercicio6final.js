var frase = prompt("Ingrese una frase por favor."); //Empezamos con el codigo pidiendo que se ingrese una frase al usuario

const abecedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', "\u00F1", 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //declaramos un array con el abecedario para comparar mas adelante

var contadorPorIndice = []; //inicializamos un array donde se almacenaran las veces que se repita cada letra y luego emprejaran por su indice

var texto = ""; //inicializamos esta variable para usarla en la funcion listaDeLetras donde mostraremos las veces que se repiten las letras de nuestra frase

const sinEspacios = frase.replace(/\s/g, ''); //quitamos los espacios en blanco, indentaciones y saltos de pagina para quedarnos solo con las letras

const todoMinusculas = sinEspacios.toLowerCase(); //pasamos todas las letras a minusculas para facilitar las comparaciones

function contar(){                      //funcion que cuenta la cantidad de letras que tiene nuestra frase
    return(todoMinusculas.length)
};

const totalLetras = contar();           //declaramos una constante donde se ejecuta la funcion de arriba y guarda la cantidad de letras de nuestra frase

function contarLetras() {                               //funcion donde contamos cuantas veces se repiten las letras de la frase
    for (let i = 0; i < abecedario.length; i++){        //hacemos un for que va a iterar por nuestro abecedario por lo que las veces que se repite es igual a la cantidad de letras del abecedario
        var contador = todoMinusculas.match(new RegExp(abecedario[i], "g")); //ejecutamos esta linea de codigo aplicando el metodo .match  
                                                                             //a nuestra frase (todoMinusculas) para comparar cuantas veces aparece la letra por la que esta iterando
        contadorPorIndice.push(contador);                                    //e incluimos "g" para que busque la letra en toda la frase y no se detenga en el primer encuentro
    };                                                                       //y por ultimo usamos un push para guardar las veces que se repite en nuestro array
};

contarLetras();     //llamamos a la funcion para que arroje los valores deseados

function listaDeLetras(){                                                          //en esta funcion hacemos una lista de las letras
    for (let i = 0; i < abecedario.length; i++){                                  //que se repiten, usando como referencia la longitud de nuestro abecedario
        if (contadorPorIndice[i] != null){                                        //decidi que se ejecutara el codigo cuando el valor en el array fuese diferente de null (sin valores o repeticiones)
            var cantidadLetras = contadorPorIndice[i].length                      //esta variable la declaramos para guardar el numero de veces que se repite la letra  
            if (cantidadLetras == 1){                                             //que esta guardada como un array dentro de otro array
                texto += "Letra "+abecedario[i]+": "+cantidadLetras+" vez. \n"    //validamos para saber si debe escribir vez o veces en base a la cantidad de repeticiones
            }
            else {texto += "Letra "+abecedario[i]+": "+cantidadLetras+" veces. \n"}
        };
    };
    return(texto);
};


alert("Su frase tiene un total de: "+totalLetras+" letras. De las cuales aparecen las siguientes: \n \n"+listaDeLetras()); //al final de todo creamos un alert que va a imprimir 
                                                                                                                           //los resultados (cantidad de letras y cuantas veces se repite cada una)
