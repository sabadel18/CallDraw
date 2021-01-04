var artyom= new Artyom();

var comandosFiguras= [
{
    smart:true,
    indexes:["dibujar *"],
    action:function(i,wildcard){
        var figuras=["círculo","rectángulo","triángulo","elipse","cuadrado"]
        if(i==0){
            switch(figuras.indexOf(wildcard.trim())){
                case 0:
                    artyom.say("Dibujando círculo");
                    addCirculo();
                    break;
                case 1:
                    artyom.say("Dibujando rectángulo");
                    addRectangulo();
                    break;
                case 2:
                    artyom.say("Dibujando triángulo");
                    addTriangulo();
                    break;
                case 3:
                    artyom.say("Dibujando elipse");
                    addElipse();
                    break;
                case 4:
                    artyom.say("Dibujando cuadrado");
                    addCuadrado();
                    break;
                default:
                    artyom.say("No existe la figura a dibujar, por favor, mire la ayuda de comandos")
                    break;
            }            
        }

    }
},
{
    smart:true,
    indexes:["anchura *","ancho *"],
    action:function(i,wildcard){
        if(!isNaN(wildcard)){
        var number=parseInt(wildcard.trim());

        cambiarAnchoFigura(number);
        cambios.cambiarAncho(number);
        }
        else{
            artyom.say("la anchura debe ser un número");
        }
    }
},
{
    smart:true,
    indexes:["altura *","alto *"],
    action:function(i,wildcard){
        if(!isNaN(wildcard)){
            var number=parseInt(wildcard.trim());
    
            cambiarAltoFigura(number);
            cambios.cambiarAlto(number);
        }
        else{
            artyom.say("la altura debe ser un número");
        }
    }
},
{
    smart:true,
    indexes:["grosor coloreado de *", "color de grosor *","grosor de color *"],
    action:function(i,wildcard){
        var res=cambiarColorGrosor(wildcard);
        if(res!=""){
            cambios.cambiarColorGrosor(res);
        }
    }
},
{
    smart:true,
    indexes:["tamaño grosor *","grosor *","grosor tamaño *"],
    action:function(i,wildcard){
        var tamaños=["nada","pequeño","mediano","medio","grande"];
        switch(tamaños.indexOf(wildcard.trim())){
                case 0:
                    cambiarGrosor(0);
                    cambios.cambiarTamañoGrosor(0);
                    break;
                case 1:
                    cambiarGrosor(3);
                    cambios.cambiarTamañoGrosor(3);
                    break;
        
                case 2:
                    cambiarGrosor(5);
                    cambios.cambiarTamañoGrosor(5);
                    break;
                case 3:
                    cambiarGrosor(5);
                    cambios.cambiarTamañoGrosor(5);
                    break;
                case 4:
                    cambiarGrosor(8);
                    cambios.cambiarTamañoGrosor(8);
                    break;

                default:
                    artyom.say("El tipo de grosor pasado no existe, por favor mire la ayuda de los comandos")
                    break;
        }
    }
},
{
    smart:true,
    indexes:["color *","color figura *","cambiar color *"],
    action:function(i,wildcard){
        var res=cambiarColor(wildcard);
        if(res!=""){
            cambios.cambiarColorFigura(res);
        }
    }
},
{
    indexes:["resetear variables","variables de fabrica","valores de fabrica"],
    action:function(i){
        cambiarColor("negro");
        cambios.cambiarColorFigura("negro");

        cambiarGrosor(0);
        cambios.cambiarTamañoGrosor(8);

        cambiarColorGrosor("negro");
        cambios.cambiarColorGrosor("negro");

        cambiarAnchoFigura(0);
        cambios.cambiarAncho(0);

        cambiarAltoFigura(0);
        cambios.cambiarAlto(0);
    }
},
{
    indexes:["clear","clean", "limpiar","limpiar lienzo","borrar figuras","limpieza"],
    action:function(i){
        limpiarLienzo();
        artyom.say("lienzo limpiado");
    }
},
{
    indexes:["borrar","borrar figura"],
    action:function(i){
        if(borrarUltimaFigura()){
            artyom.say("Ultima figura borrada");
        }
    }
}
];

artyom.addCommands(comandosFiguras);


function StartArtyomOneCommand() {
    console.log("One command");
    if (artyom.isRecognizing()) {
        return alert("Stop artyom first !");
    }

    //Although the voice can't be changed,
    // You need to set the language for the speech
    // Recognition, see the documentation for more examples
     artyom.initialize({
        lang: "es-ES",
        debug: true,
        continuous: true,
        listen: true
    });
}

function StopArtyom() {
    artyom.fatality();
}


 