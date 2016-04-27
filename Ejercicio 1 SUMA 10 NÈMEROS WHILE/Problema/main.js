
function miFuncion() {
	var i, n, suma, x;
	// Sumatoria de "n" números
	document.write("Ingrese la cantidad",'<br/>');
	n = prompt ('Ingrese la cantidad de números que desea sumar');
	i = 0;
	suma = 0;
	while (i<n) {
		x = Number(prompt('Ingrese los números a sumar'));
		document.write (x,'<br/>');
		i = i+1;
		suma = suma+x;
	}
	document.write("La sumatoria es = ",suma,'<br/>');
}



/*function miFuncion() {
	var i, suma, x;
	// Sumatoria de "10" números
	i = 0;
	suma = 0;
	while (i<10) {
		document.write("Ingrese un número: ",'<br/>');
		x = Number(prompt("Ingrese los números a sumar"));
		i = i+1;
		suma = suma+x;
	}
	document.write("La sumatoria es = ",suma,'<br/>');
}*/
