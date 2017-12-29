//Funcion que crea un paginador a partir de una pagina inicial, un num max de pagina, y una etiqueta "<ul>"
// =================== PAGINADOR =========================
var creaPaginador = function(numPagActual, numPagMax, contenedor)
{
	//Comprueba que haya mas de 1 pagina 
	if (numPagActual < numPagMax || numPagMax > 1){
		
		$(contenedor).html('');
		
		if(numPagActual-2 > 0){
			
			//Recorre las 2 posiciones anteriores
			for(var i=numPagActual-1; i>0;i--){
				$(contenedor).prepend("<li><a class='pag' href='#'>" + i + "</a></li>");
				if (i==numPagActual-2){
					break;
				}
			}
		}
		
		//Crea la pagina actual
		$(contenedor).append("<li class='active'><span>" + numPagActual + "<span class='sr-only'>" + numPagActual + "</span></span></li>");
		
		//Recorre las 2 siguientes posiciones
		for(var i=numPagActual+1; i<=numPagMax;i++){
			$(contenedor).append("<li><a class='pag' href='#'>" + i + "</a></li>");
			if (i==numPagActual+2){
				break;
			}
		}
		
		//Comprueba si está cerca de los extremos max y min para insertar un botón "..." o no
		if(numPagActual+2 < numPagMax){
			$(contenedor).append("<li class='disabled pag'><a href='#'>...</a></li>");
			$(contenedor).append("<li><a class='pag'href='#'>" + numPagMax + "</a></li>");
		}
		
		if(numPagActual-2 > 2){
			$(contenedor).prepend("<li class='disabled pag'><a href='#'>...</a></li>");
		}
		
		if(numPagActual != 1 && numPagActual != 3){
			$(contenedor).prepend("<li><a class='pag'href='#'>1</a></li>");
		}
	}
}
// ======================================================