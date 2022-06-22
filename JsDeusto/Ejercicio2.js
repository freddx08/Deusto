respuestaUno = prompt("Bienvenido al test Deusto, responde con una V para indicar si es verdadera la sentencia o con una F para indicar si es falsa. \n \n El cielo es azul.");

respuestaDos = prompt("Bienvenido al test Deusto, responde con una V para indicar si es verdadera la sentencia o con una F para indicar si es falsa. \n \n Las hojas de los arboles son verdes.");

respuestaTres = prompt("Bienvenido al test Deusto, responde con una V para indicar si es verdadera la sentencia o con una F para indicar si es falsa. \n \n Existen solo 3 estados de la materia.");

respuestaCuatro = prompt("Bienvenido al test Deusto, responde con una V para indicar si es verdadera la sentencia o con una F para indicar si es falsa. \n \n El sol es una estrella.");

respuestaCinco = prompt("Bienvenido al test Deusto, responde con una V para indicar si es verdadera la sentencia o con una F para indicar si es falsa. \n \n El universo es infinito.");

var aciertos = 0;

if (respuestaUno == "V" || respuestaUno == "v"){
    aciertos += 1;
};

if (respuestaDos == "F" || respuestaDos == "f"){
    aciertos += 1;
};

if (respuestaTres == "F" || respuestaTres == "f"){
    aciertos += 1;
};

if (respuestaCuatro == "V" || respuestaCuatro == "v"){
    aciertos += 1;
};

if (respuestaCinco == "V" || respuestaCinco == "v"){
    aciertos += 1;
};

alert("Has tenido "+aciertos+" respuestas correctas.");