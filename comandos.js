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
        indexes: ["tamaño grosor *", "grosor *", "grosor tamaño *"],
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
                    borrarTipoFigura("circulo");
                    break;
                case 1:
                    artyom.say("Borando rectángulos");
                    borrarTipoFigura("rectangulo");
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
        indexes: ["guardar canvas *", "guardar lienzo *", "guardar *", "guardar captura como *"],
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
            artyom.say("desactivando micrófono");
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
        indexes: ["valor de x *", "x *"],
        action: function (i, wildcard) {
            if (!isNaN(wildcard)) {
                x = parseInt(wildcard.trim());
                cambios.cambiarX(x);
            }
            else {
                artyom.say("la x debe ser un número");
            }
        }
    },
    {
        smart: true,
        indexes: ["valor de y *", "y *"],
        action: function (i, wildcard) {
            if (!isNaN(wildcard)) {
                y = parseInt(wildcard.trim());
                cambios.cambiarY(y);
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


