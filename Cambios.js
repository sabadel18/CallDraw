class Cambios{
    
    ayudaComandos(){
    var elemento=document.getElementById('ayuda');
    var cad="";
    if(elemento.innerHTML==""){
     cad="<section><h3>Los comandos que se pueden utilizar son los siguientes: </h3>";
            cad+="<ul>"
            cad += "<li><b>Elipse</b>: para poder dibujar una elipse se necesitan tanto el alto como el ancho. La forma de llamar este comando es 'dibujar elipse' </li>";                      
            cad += "<li><b>Circulo</b>: para poder dibujar un círculo se necesita el ancho de la figura La forma de llamar este comando es 'dibujar circulo' </li>";
            cad += "<li><b>Rectangulo</b>: para poder dibujar un rectangulo se necesitan tanto el alto como el ancho La forma de llamar este comando es 'dibujar rectangulo' </li>";                        
            cad += "<li><b>Cuadrado</b>: para poder dibujar un cuadrado se necesita el ancho de la figura, que equivale al lado La forma de llamar este comando es 'dibujar cuadrado' </li>"; 
            cad+="<li><b>Anchura</b>: cambia el valor actual de la anchura para dibujar una figura. La forma de usarlo es 'anchura' o 'ancho' y un número</li>"
            cad+="<li><b>Altura</b>: cambia el valor actual de la altura para dibujar una figura. La forma de usarlo es 'altura' o 'alto' y un número </li>"
            cad+="<li><b>Color de la figura</b>: cambia el color de las figuras a dibujar posteriormente. Este debe estar entre una lista de colores definidos (blanco, cian, amarillo, rojo, verde, magenta, naranja, violeta, lima, azul, morado, gris, negro). El modo de uso es 'color', 'color figura' o 'cambiar color' y el color deseado</li>"
            cad+="<li><b>Grosor</b>: cambia el tamaño del grosor. Este esta delimitado por cinco tipos (nada, pequeño, mediano, medio, grande). La forma de usarlo es 'tamaño grosor','grosor' o 'grosor tamaño' y el tipo de tamaño </li>"
            cad+="<li><b>Color de grosor</b>: cambia el color del grosor para posteriores dibujos. Este debe estar entre una lista de colores definidos (blanco, cian, amarillo, rojo, verde, magenta, naranja, violeta, lima, azul, morado, gris, negro). El modo de uso es 'grosor coloreado de', 'color de grosor' o 'grosor de color' y el color deseado</li>"
            cad+="<li><b>Resetear variables</b>: cambia el valor de todas las variables a su valor de fabrica. La forma de uso es 'resetear variables', 'variables de fabrica' o 'valores de fabrica'</li>"
            cad+="<li><b>Limpiar</b>: limpia por completo el lienzo. La forma de llamarlo es 'clear', 'clean', 'limpiar', 'limpiar lienzo', 'borrar figuras' o 'limpieza' </li>"
            cad+="<li><b>Borrar figura</b>: borra la ultima figura añadida. Para usar este comando hay que decir 'borrar' o 'borrar figura'</li>"

         cad += "</ul></section>";   
    }
    elemento.innerHTML=cad;
    }

    cambiarColorFigura(color){
        var celda=document.getElementById('colorFigura');
        celda.innerHTML=color;
    }

    cambiarTamañoGrosor(tamaño){
        var celda=document.getElementById('TamañoGrosor');
        celda.innerHTML=tamaño;
    }


    cambiarColorGrosor(color){
        var celda=document.getElementById('ColorGrosor');
        celda.innerHTML=color;
    }


    cambiarAncho(ancho){
        var celda=document.getElementById('AnchoFigura');
        celda.innerHTML=ancho;
    }


    cambiarAlto(alto){
        var celda=document.getElementById('AltoFigura');
        celda.innerHTML=alto;
    }

    cambiarX(valorDeX){
        var celda=document.getElementById('valorX');
        celda.innerHTML=valorDeX;
    }

    cambiarY(valorDeY){
        var celda=document.getElementById('valorY');
        celda.innerHTML=valorDeY;
    }
}

var cambios=new Cambios();
