//alert("fuera");
var dibujo, lienzo;
function inicio()
{
//	alert("dentro");
	dibujo = document.getElementById("dibujito");
	lienzo = dibujo.getContext("2d");
	
	dibujarGrilla(lienzo);

	lienzo.moveTo(0,0);
	lienzo.lineTo(300,0);
	lienzo.lineTo(300,300);
	lienzo.lineTo(0,300);
	lienzo.lineTo(0,0);
	lienzo.strokeStyle = "#F00";
	lienzo.stroke();

	//para el circulo
	lienzo.beginPath();  
	lienzo.strokeStyle = "#00F";
	lienzo.arc(150,150,100, (Math.PI * 2), false); // para crear arco
	lienzo.fillStyle = "#F0E68C"; //Color Amarillo
	lienzo.fill();
	lienzo.closePath(); 
	lienzo.stroke();

	
}

function dibujarGrilla(pony)
{
	var ancho = 300, alto = 300;
	var linea, punto;
	var anchoLinea = 30;
	var limiteX = ancho / anchoLinea;
	var limiteY = alto / anchoLinea;
	var punto2= alto-anchoLinea;

	

	for(linea = 1; linea <= limiteX * 2; linea++)
	{
		punto1 = linea * anchoLinea;
		pony.beginPath();
		pony.strokeStyle = "#008080";
		pony.moveTo(punto1,0);
		pony.lineTo(0, punto1);
		pony.stroke();
		pony.closePath();
			
	}

	for(linea = 1; linea <= limiteY * 2; linea++)
	{	
		
		punto1 = linea * anchoLinea;
		pony.beginPath();
		pony.strokeStyle = "#4682B4";
		pony.moveTo(punto2,0);
		pony.lineTo(alto, punto1);
		pony.stroke();
		pony.closePath();
		punto2 -=30;

	}
}