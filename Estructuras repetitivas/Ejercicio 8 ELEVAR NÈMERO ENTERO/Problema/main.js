//Escribe aquí tú código

function miPotencia(){
	var potencia,number,exponente,contador;
	potencia=1;
	number=prompt("Ingrese la base: ");
	exponente=prompt("Ingrese el exponente: ");
	contador=1;
	while(contador<=exponente){
		potencia=potencia*number
		contador++
	}
	alert(number+"^"+exponente+" = "+potencia);
}