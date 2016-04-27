
function miTabla(){
	var number,producto,a;
	number=prompt("La tabla de multiplicar del número: ");
	producto=prompt("¿Hasta que número deseas que se multiplique el número inicial?: ");

	for(a=0; a<=producto; a++)
		alert(number+" * "+a+" = "+number*a);
}