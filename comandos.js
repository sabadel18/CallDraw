var artyom = new Artyom();

var comandosFiguras = [
    {
        smart: true,
        indexes: ["dibujar *"],
        action: function (i, wildcard) {
            var figuras = ["círculo", "rectángulo", "triángulo", "elipse", "cuadrado"]
            if (i == 0) {
                switch (figuras.indexOf(wildcard.trim())) {
                    case 0:
                        if (addCirculo()) {
                            artyom.say("círculo dibujado");
                        }
                        break;

                    case 1:
                        if (addRectangulo()) {
                            artyom.say("rectángulo dibujado");
                        }
                        break;

                    case 2:
                        if (addTriangulo()) {
                            artyom.say("triángulo dibujado");
                        }
                        break;

                    case 3:
                        if (addElipse()) {
                            artyom.say("elipse dibujada");
                        }
                        break;

                    case 4:
                        if (addCuadrado()) {
                            artyom.say("cuadrado dibujado");
                        }
                        break;

                    default:
                        artyom.say("No existe la figura a dibujar, por favor, mire la ayuda de comandos");
                        break;
                }
            }

        }
    },
    {
        smart: true,
        indexes: ["anchura *", "ancho *"],
        action: function (i, wildcard) {
            if (!isNaN(wildcard)) {
                var number = parseInt(wildcard.trim());

                cambiarAnchoFigura(number);
                cambios.cambiarAncho(number);
            }
            else {
                artyom.say("la anchura debe ser un número");
            }
        }
    },
    {
        smart: true,
        indexes: ["altura *", "alto *"],
        action: function (i, wildcard) {
            if (!isNaN(wildcard)) {
                var number = parseInt(wildcard.trim());

                cambiarAltoFigura(number);
                cambios.cambiarAlto(number);
            }
            else {
                artyom.say("la altura debe ser un número");
            }
        }
    },
    {
        smart: true,
        indexes: ["grosor coloreado de *", "color de grosor *", "grosor de color *"],
        action: function (i, wildcard) {
            var res = cambiarColorGrosor(wildcard);
            if (res != "") {
                cambios.cambiarColorGrosor(res);
            }
        }
    },
    {
        smart: true,
        indexes: ["tamaño grosor *", "grosor tamaño *", "grosor de tamaño *", "grosor *"],
        action: function (i, wildcard) {
            var tamaños = ["nada", "pequeño", "mediano", "medio", "grande"];
            switch (tamaños.indexOf(wildcard.trim())) {
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
                    artyom.say("El tipo de grosor pasado no existe, por favor mire la ayuda de los comandos");
                    break;
            }
        }
    },
    {
        smart: true,
        indexes: ["color *", "color figura *", "cambiar color *"],
        action: function (i, wildcard) {
            var res = cambiarColor(wildcard);
            if (res != "") {
                cambios.cambiarColorFigura(res);
            }
        }
    },
    {
        indexes: ["resetear variables", "variables de fabrica", "valores de fabrica"],
        action: function (i) {
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
        indexes: ["clear", "clean", "limpiar", "limpiar lienzo", "borrar figuras", "limpieza"],
        action: function (i) {
            limpiarLienzo();
            artyom.say("lienzo limpiado");
        }
    },
    {
        smart: true,
        indexes: ["borrar *", "eliminar *"],
        action: function (i, wildcard) {
            var figuras = ["círculos", "rectángulos", "triángulos", "elipses", "cuadrados"]
            switch (figuras.indexOf(wildcard.trim())) {
                case 0:
                    artyom.say("Borando círculos");
                    borrarTipoFigura("círculo");
                    break;
                case 1:
                    artyom.say("Borando rectángulos");
                    borrarTipoFigura("rectángulo");
                    break;
                case 2:
                    artyom.say("Borando triángulos");
                    borrarTipoFigura("triángulo");
                    break;
                case 3:
                    artyom.say("Borando elipses");
                    borrarTipoFigura("elipse");
                    break;
                case 4:
                    artyom.say("Borando cuadrados");
                    borrarTipoFigura("cuadrado");
                    break;
                default:
                    artyom.say("No existe la figura a Borrrar, por favor, mire la ayuda de comandos");
                    break;
            }
        }
    },
    {
        indexes: ["borrar", "borrar figura"],
        action: function (i) {
            if (borrarUltimaFigura()) {
                artyom.say("Ultima figura borrada");
            }
        }
    },
    {
        smart: true,
        indexes: ["guardar canvas *", "guardar lienzo *", "guardar captura como *", "guardar *",],
        action: function (i, wildcard) {
            guardar(wildcard.trim());
            artyom.say("lienzo guardado con nombre " + wildcard.trim());
        }
    },
    {
        indexes: ["guardar canvas", "guardar lienzo", "guardar", "captura"],
        action: function (i) {
            guardar("");
            artyom.say("lienzo guardado");
        }
    },
    {
        indexes: ["dejar de grabar", "parar", "desactivar micro", "desactivar micrófono"],
        action: function (i) {
            StopArtyom();
        }
    },
    {
        indexes: ["deshacer figura", "deshacer", "perder figura", "perder"],
        action: function (i) {
            deshacerFigura();
        }

    },
    {
        indexes: ["rehacer figura", "rehacer", "recuperar figura", "recuperar"],
        action: function (i) {
            rehacerFigura();
        }
    },
    {
        smart: true,
        indexes: ["valor de x *"],
        action: function (i, wildcard) {
            if (!isNaN(wildcard)) {
                var num = parseInt(wildcard.trim());

                if(num<=getWidth() && num>=0){
                    x=num;
                    cambios.cambiarX(x);
                }
                else{
                    artyom.say("la posición x debe estar comprendida entre 0 y "+getWidth());
                }
                
            }
            else {
                artyom.say("la x debe ser un número");
            }
        }
    },
    {
        smart: true,
        indexes: ["valor de y *","valor de i *"],
        action: function (i, wildcard) {
            if (!isNaN(wildcard)) {
                var num = parseInt(wildcard.trim());

                if(num<=getHeight() && num>=0){
                    y=num;
                    cambios.cambiarY(y);
                }
                else{
                    artyom.say("la posición de y debe estar comprendida entre 0 y "+getHeight());
                }
            }
            else {
                artyom.say("la y debe ser un número");
            }
        }
    },
    {
        indexes: ["mostrar puntero"],
        action: function (i) {
            mostrarPuntero(true);
        }

    },
    {
        indexes: ["ocultar puntero"],
        action: function (i) {
            mostrarPuntero(false);
        }
    }
];

artyom.addCommands(comandosFiguras);


function StartArtyomOneCommand() {
    console.log("One command");
    if (artyom.isRecognizing()) {
        return alert("Stop artyom first !");
    }


    artyom.initialize({
        lang: "es-ES",
        debug: true,
        continuous: true,
        listen: true
    });
    artyom.say("activando micrófono");

}

function StopArtyom() {
    if (artyom.isRecognizing()) {
        artyom.say("desactivando micrófono");
        artyom.fatality();
    }
}

function guardar(cadena) {
    var nombre;
    if (cadena == "") {
        nombre = prompt("Nombre de la imagen", "");
        if (nombre == null) {
            return;
        }
    }
    else {
        nombre = cadena;
    }

    var img = guardarLienzo(nombre);
    if (typeof img == 'object') {
        img = img.src;
        window.newW = open(img);
        newW.document.execCommand("SaveAs");
        newW.close();
    }
}



