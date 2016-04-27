
/* CON WHILE*/
/*
function miFuncion() {
	var i, n, suma, x;
	// Promedio de "n" numeros
	document.write("Ingrese la cantidad",'<br/>');
	n = prompt('Ingrese la cantidad de números que desea promediar');
	i = 0;
	suma = 0;
	while (i<n) {
		document.write("Ingrese un número: ",'<br/>');
		x = Number(prompt('Ingrese los números a promediar'));
		i = i+1;
		suma = suma+x;
	}
	document.write("El promedio de los números ingresados es = ",suma/n,'<br/>');
}*/
/////////////////////////////////////////////////////////////////////////////////////



/* CON DO Y WHILE*/
/* 
function miFuncion() {
	var i, n, suma, x;
	// Promedio de "n" numeros
	document.write("Ingrese la cantidad",'<br/>');
	n = prompt('Ingrese la cantidad de números que desea promediar');
	i = 0;
	suma = 0;
	do {
		document.write("Ingrese un número: ",'<br/>');
		x = Number(prompt('Ingrese los números a promediar'));
		i = i+1;
		suma = suma+x;
	}
	while (i<n)
	document.write("El promedio de los números ingresados es = ",suma/n,'<br/>');
}}*/

/////////////////////////////////////////////////////////////////////////////////////


/* CON FOR introduciendo 3 números que se requieren promediar
function miFuncion(){
	var i, suma, number;
	document.write("Usted podrá promediar solo tres números",'<br/>');
	suma = 0
	for (i=0; i<3; i++){
		number = prompt("Introduzca el número:["+i+"]=");
		if(!isNaN(number) && number!=''){
          suma = suma + parseInt(number);                      
        }
        else{
        	alert("introduce un número");
        	i--;
        }
	}
	alert("El promedio de los números es " + suma/3)
}*/


function miFuncion(){
	var i, suma, number, n;
	document.write("Usted podrá promediar cuantos números desee",'<br/>');
	suma = 0
	n = prompt('Ingrese la cantidad de números que desea promediar');
	
	for (i=0; i<n; i++){
		number = prompt("Introduzca el número:["+i+"]=");
		if(!isNaN(number) && number!=''){
          suma = suma + parseInt(number);                      
        }
        else{
        	alert("introduce un número");
        	i--;
        }
	}
	alert("El promedio de los números es " + suma/n)
}













