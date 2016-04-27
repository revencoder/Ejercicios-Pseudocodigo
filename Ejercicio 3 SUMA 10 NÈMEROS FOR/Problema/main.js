//Escribe aquí tú código
function miFuncion() {
	var i, suma, x;
	// Sumatoria de "10" números
	i = 10;
	suma = 0;
	for(i = 0; i <10;) {
		document.write("Ingrese un número: ",'<br/>');
		x = Number(prompt('Ingrese los números a sumar'));
		i = i+1;
		suma = suma+x;
	}
	document.write("La sumatoria es = ",suma,'<br/>');
}