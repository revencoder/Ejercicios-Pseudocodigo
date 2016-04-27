/*probar en consola*/
function funcionPitagorica(){
 var a,b,c;
 var text = "";
	for ( a = 1; a <= 500; a++ )
	for ( b = 1; b <= 500; b++ )
	for ( c = 1; c <= 500; c++ )
	{      
if ( a*a == b*b + c*c )
	console.log("("+a+" , "+b+" , "+c+" ) ");
	}
	document.getElementById("resultado").innerHTML = text;
}

