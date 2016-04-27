
var costo_por_minuto = 0.10;

var costo = function (tiempo_de_llamada){
	return tiempo_de_llamada*costo_por_minuto
}

console.log ("El costo de la llamada es: S/." + costo(30))