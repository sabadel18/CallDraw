class Cambios{
    
    ayudaComandos(){
    var elemento=document.getElementById('ayuda');
    var cad="";
    if(elemento.innerHTML==""){
     cad="<section><h2>Ayuda de comandos</h2><h3>Los comandos que se pueden utilizar son los siguientes: </h3>";
            cad+="<ul>"
            cad += "<li><b>Elipse</b>: para poder dibujar una elipse se necesitan tanto el alto como el ancho. La forma de llamar este comando es 'dibujar elipse' </li>";                      
            cad += "<li><b>Circulo</b>: para poder dibujar un círculo se necesita el ancho de la figura La forma de llamar este comando es 'dibujar circulo' </li>";
            cad += "<li><b>Rectangulo</b>: para poder dibujar un rectangulo se necesitan tanto el alto como el ancho La forma de llamar este comando es 'dibujar rectangulo' </li>";                        
            cad += "<li><b>Cuadrado</b>: para poder dibujar un cuadrado se necesita el ancho de la figura, que equivale al lado La forma de llamar este comando es 'dibujar cuadrado' </li>"; 
            cad+="<li><b>Anchura</b>: cambia el valor actual de la anchura para dibujar una figura. La forma de usarlo es 'anchura' o 'ancho' y un número</li>";
            cad+="<li><b>Altura</b>: cambia el valor actual de la altura para dibujar una figura. La forma de usarlo es 'altura' o 'alto' y un número </li>";
            cad+="<li><b>Color de la figura</b>: cambia el color de las figuras a dibujar posteriormente. Este debe estar entre una lista de colores definidos (blanco, cian, amarillo, rojo, verde, magenta, naranja, violeta, lima, azul, morado, gris, negro). El modo de uso es 'color', 'color figura' o 'cambiar color' y el color deseado</li>";
            cad+="<li><b>Grosor</b>: cambia el tamaño del grosor. Este esta delimitado por cinco tipos (nada, pequeño, mediano, medio, grande). La forma de usarlo es 'tamaño grosor','grosor' o 'grosor tamaño' y el tipo de tamaño </li>";
            cad+="<li><b>Color de grosor</b>: cambia el color del grosor para posteriores dibujos. Este debe estar entre una lista de colores definidos (blanco, cian, amarillo, rojo, verde, magenta, naranja, violeta, lima, azul, morado, gris, negro). El modo de uso es 'grosor coloreado de', 'color de grosor' o 'grosor de color' y el color deseado</li>";
            cad+="<li><b>Resetear variables</b>: cambia el valor de todas las variables a su valor de fabrica. La forma de uso es 'resetear variables', 'variables de fabrica' o 'valores de fabrica'</li>";
            cad+="<li><b>Limpiar</b>: limpia por completo el lienzo. La forma de llamarlo es 'clear', 'clean', 'limpiar', 'limpiar lienzo', 'borrar figuras' o 'limpieza' </li>";
            cad+="<li><b>Borrar figura</b>: borra la ultima figura añadida. Para usar este comando hay que decir 'borrar' o 'borrar figura'</li>";
            cad+="<li><b>Borrar figura por tipo</b>: borra todas las figuras de un tipo en particular. El nombre del tipo de figura  a borrar tiene que ser en plural. La forma de usar el comando es 'borrar' o 'eliminar', más el tipo de figura a borrar</li>";
            cad+="<li><b>Guardar lienzo</b>: guarda el dibujo actual, con un nombre pasado por teclado. La forma de llamar a este comando es 'guardar canvas','guardar lienzo', 'guardar' o 'captura'</li>";
            cad+="<li><b>Guardar lienzo con nombre pasado por comando</b>: guarda el dibujo actual, con un nombre pasado en el propio comando. Este se usa con 'guardar canvas', 'guardar lienzo', 'guardar captura como' o 'guardar'; más el nombre con el que deseas guardar el dibujo</li>";
            cad+="<li><b>Parar de grabar</b>: desactiva el micrófono. Se usa con 'dejar de grabar','parar', 'desactivar micro' o 'desactivar micrófono'</li>";
            cad+="<li><b>Deshacer</b>: deshace la ultima figura creada. Se usa con 'deshacer figura','deshacer','perder figura' o 'perder'</li>";
            cad+="<li><b>Rehacer</b>: recupera la ultima figura deshecha. Si se ha creado una nueva figura, se pierde la posibilidad de recuperar figuras deshechas. El modo de uso es 'rehacer figura', 'rehacer', 'recuperar figura' o 'recuperar'</li>";
            cad+="<li><b>Cambiar valor de x</b>: cambia el valor de la posicón de la x. La forma de uso es 'valor de x' más en nuevo valor (un número)</li>";
            cad+="<li><b>Cambiar valor de y</b>: cambia el valor de la posicón de la y. La forma de uso es 'valor de y' más en nuevo valor (un número)</li>";
            cad+="<li><b>Mostrar puntero</b>: muestra el puntero en la posición actual en el lienzo. La forma de uso es 'mostrar puntero'</li>";
            cad+="<li><b>Ocultar puntero</b>: oculta el puntero actual. La forma de uso es 'ocultar puntero'</li>";

         cad += "</ul></section>";   
    }
    elemento.innerHTML=cad;
    }



    inicio(){
        var elemento=document.getElementById('presentacion');
        var cad="";
        if(elemento.innerHTML==""){
         cad="<section><h2>Presentación de la CallDraw</h2>";
                cad+="<p>Call Draw es una aplicación enfocada al arte abstracto de una manera más sencilla, utilizando diversas figuras como cuadrados, círculos, rectángulos, triángulos equiláteros y elipse que se encargan de darle vida al lienzo.</p>"
                cad+="<p>Es una aplicación multimedia donde entra en juego el texto, el vídeo, el audio y las imágenes. </p>"
                cad+="<p>El usuario es el encargado de hacer su propio arte haciendo uso de algunos de sus sentidos y de su cámara para ubicar las figuras a su gusto o también puede hacerlo indicando las coordenadas x e y donde las quiere colocar.</p>"
                cad+="<p>Para configurar y dibujar las figuras, borrarlas, limpiar el lienzo, deshacer y rehacer acciones, guardar el dibujo realizado, ocultar y mostrar el puntero, se hará uso de comandos con especificaciones particulares detalladas en la ayuda.</p>"
             cad += "</section>";   
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
