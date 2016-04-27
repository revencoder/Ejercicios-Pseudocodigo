//Escribe aquí tú código

function cuboCuarta(){
	for(var i=0; i<10; i++){
		var number = prompt("Ingresar número:['+i+']=");
		cubo=1;
		cuarta=1;
		for (var a=1;a<=3;a++)
			{cubo=cubo*number;}
		for (var b=1;b<=4;b++)
			{cuarta=cuarta*number;}
		alert("El cubo de "+number+" es "+cubo+" y su cuarta es "+cuarta);
	}
}