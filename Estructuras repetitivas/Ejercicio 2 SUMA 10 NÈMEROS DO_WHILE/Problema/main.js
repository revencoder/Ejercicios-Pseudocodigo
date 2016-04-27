function miFuncion() {
	var i, suma, x;
	// Sumatoria de "10" números
	i = 0;
	suma = 0;
	do {
		document.write("Ingrese un número: ",'<br/>');
		x = Number(prompt('Ingrese los números a sumar'));
		i = i+1;
		suma = suma+x;
	}
	while (i<10)
	document.write("La sumatoria es = ",suma,'<br/>');
}