
var costo_por_k = 5;

var precio_de_boleto = function(kilometros){
	return kilometros*costo_por_k
}

console.log("El boleto costará: " + precio_de_boleto(100))