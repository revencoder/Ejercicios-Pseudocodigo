//Escribe aquí tú código
function funcionPares(){
	var text = "";
    var i = 2;
    while (i < 100) {
        text += "<br>Los números pares menores que 100 son: " + i;
        i=i+2;
    }
    document.getElementById("resultado").innerHTML = text;
}