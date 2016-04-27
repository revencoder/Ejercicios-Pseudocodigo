var costo_por_hora = 30;

function calcular_costo(horas){
	return horas*costo_por_hora
}

console.log("Usted debería de cobrar = S/." + calcular_costo(12))
