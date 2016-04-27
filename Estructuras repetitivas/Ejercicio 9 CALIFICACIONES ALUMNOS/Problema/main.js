function caliMedia(x){
	var suma=0;
	for( var i=0; i<40;i++)
		{suma=suma+x[i];}
	document.write("La sumatoria es = ",suma/40,'<br/>');
}

function caliBaja(x){
	var baja=x[0];
	for(var i=1;i<40;i++) {
		if(x[0]>x[i])
			baja=x[i];
		else baja=x[0];
	}
	document.write("La sumatoria es = ",baja,'<br/>');
}