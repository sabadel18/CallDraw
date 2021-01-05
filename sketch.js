let sketch = function (p) {
    let figura;
    let figuras = [];
    var numFiguras = 0;
    let colorFigura;
    let colorGrosor;
    let tamañoGrosor;
    var anchura;
    var altura;
    var existe = false;

    p.setup = function () {
        p.createCanvas(600*2, 450*2);
        p.background(255, 255, 255);
        colorFigura = p.color(0);
        colorGrosor = p.color(0);
        tamañoGrosor = 0;
    };

    p.draw = function () {
        p.background(255, 255, 255);
        if (existe) {
            figuras[numFiguras] = figura;
            numFiguras++;
            existe = false;
        }

        drawAll();

        if(x>=0 && y>=0){
            dibujarPuntero();
        }

    };

    drawAll = function () {
        for (let i = 0; i < numFiguras; i++) {
            figuras[i].dibujar();
        }
    };


    addCirculo = function () {
        if (comprobarPos()) {
            if (anchura <= 0) {
                artyom.say("Para poder dibujar un circulo es necesario que el ancho de la figura sea mayor que 0");
                return;
            }
            figura = new Circulo(x, y, anchura, colorFigura, tamañoGrosor, colorGrosor);
            existe = true;
        }
    };

    addRectangulo = function () {
        if (comprobarPos()) {
            if (anchura <= 0) {
                artyom.say("Para poder dibujar un rectangulo es necesario que el ancho de la figura sea mayor que 0");
                return;
            }
            if (altura <= 0) {
                artyom.say("Para poder dibujar un rectangulo es necesario que el alto de la figura sea mayor que 0");
                return;
            }
            figura = new Rectangulo(x, y, anchura, altura, colorFigura, tamañoGrosor, colorGrosor);
            existe = true;
        }
    };

    addTriangulo = function () {
        if (comprobarPos()) {
            var max = 100;
            var min = 10;
            figura = new Triangulo(Math.random() * (max - min) + min, Math.random() * (max - min) + min, Math.random() * (max - min) + min, Math.random() * (max - min) + min, Math.random() * (max - min) + min, Math.random() * (max - min) + min, Math.random() * (max - min) + min, Math.random() * (max - min) + min, Math.random() * (max - min) + min, Math.random() * (max - min) + min, colorFigura, tamañoGrosor, colorGrosor);
            existe = true;
        }
    };

    addElipse = function () {
        if (comprobarPos()) {
            if (anchura <= 0) {
                artyom.say("Para poder dibujar una elipse es necesario que el ancho de la figura sea mayor que 0");
                return;
            }
            if (altura <= 0) {
                artyom.say("Para poder dibujar una elipse es necesario que el alto de la figura sea mayor que 0");
                return;
            }
            figura = new Elipse(x,y, anchura, altura, colorFigura, tamañoGrosor, colorGrosor);
            existe = true;
        }
    };

    addCuadrado = function () {
        if (comprobarPos()) {
            if (anchura <= 0) {
                artyom.say("Para poder dibujar un cuadrado es necesario que el ancho de la figura sea mayor que 0");
                return;
            }
            figura = new Rectangulo(x, y, anchura, anchura, colorFigura, tamañoGrosor, colorGrosor);
            existe = true;
        }
    };

    cambiarColor = function (wildcard) {
        var colores = ["blanco", "cian", "amarillo", "rojo", "verde", "magenta", "naranja", "violeta", "lima", "azul", "morado", "gris", "negro"];
        var pos = colores.indexOf(wildcard.trim());
        switch (pos) {
            case 0:
                colorFigura = p.color('#FFFFFF');
                break;

            case 1:
                colorFigura = p.color('#00FFFF');
                break;

            case 2:
                colorFigura = p.color('#FFFF00');
                break;

            case 3:
                colorFigura = p.color('#FF0000');
                break;

            case 4:
                colorFigura = p.color('#008000');
                break;

            case 5:
                colorFigura = p.color('#FF00FF');
                break;

            case 6:
                colorFigura = p.color('#FF8C00');
                break;

            case 7:
                colorFigura = p.color('#FF00FF');
                break;

            case 8:
                colorFigura = p.color('#00FF00');
                break;

            case 9:
                colorFigura = p.color('#0000FF');
                break;

            case 10:
                colorFigura = p.color('#800080');
                break;

            case 11:
                colorFigura = p.color('#808080');
                break;

            case 12:
                colorFigura = p.color('#000000')
                break;

            default:
                artyom.say("El color pasado no existe, por favor revise la ayuda de comandos");
                return "";
        }
        return colores[pos];
    };

    cambiarColorGrosor = function (wildcard) {
        var colores = ["blanco", "cian", "amarillo", "rojo", "verde", "magenta", "naranja", "violeta", "lima", "azul", "morado", "gris", "negro"];
        var pos = colores.indexOf(wildcard.trim());
        switch (pos) {
            case 0:
                colorGrosor = p.color('#FFFFFF');
                break;

            case 1:
                colorGrosor = p.color('#00FFFF');
                break;

            case 2:
                colorGrosor = p.color('#FFFF00');
                break;

            case 3:
                colorGrosor = p.color('#FF0000');
                break;

            case 4:
                colorGrosor = p.color('#008000');
                break;

            case 5:
                colorGrosor = p.color('#FF00FF');
                break;

            case 6:
                colorGrosor = p.color('#FF8C00');
                break;

            case 7:
                colorGrosor = p.color('#FF00FF');
                break;

            case 8:
                colorGrosor = p.color('#00FF00');
                break;

            case 9:
                colorGrosor = p.color('#0000FF');
                break;

            case 10:
                colorGrosor = p.color('#800080');
                break;

            case 11:
                colorGrosor = p.color('#808080');
                break;

            case 12:
                colorGrosor = p.color('#000000')
                break;

            default:
                artyom.say("El color de grosor pasado no existe, por favor revise la ayuda de comandos");
                return;
        }
        return colores[pos];
    };

    cambiarGrosor = function (tamaño) {
        tamañoGrosor = tamaño;
    };

    limpiarLienzo = function () {
        figuras = [];
        numFiguras = 0;
    };

    cambiarAnchoFigura = function (anc) {
        anchura = anc;
    };

    cambiarAltoFigura = function (alt) {
        altura = alt;
    };

    borrarUltimaFigura = function () {
        if (numFiguras > 0) {
            figuras[numFiguras - 1] = null;
            numFiguras--;
            return true;
        }
        else {
            return false;
        }
    };

    borrarTipoFigura = function (tipo) {
        var aux = []
        var cont = 0;

        for (i = 0; i < numFiguras; i++) {
            if (typeof numFiguras[i] != tipo) {
                aux[cont] = numFiguras[i];
                cont++;
            }
        }

        figuras = aux;
        numFiguras = cont;
    };


    dibujarPuntero = function () {
        p.fill(p.color('#FF0000'));
        p.ellipse(x, y, 20, 20);

    };

    comprobarPos = function () {
        if (x < 0) {
            artyom.say("Para poder dibujar una figura es necesario que la x sea mayor o igual a 0");
            return false;
        }
        else if (y < 0) {
            artyom.say("Para poder dibujar una figura es necesario que la y sea mayor o igual a 0");
            return false;
        }
        else {
            return true;
        }
    };


    class Circulo {
        constructor(posX, posY, diametro, colorC, st, stColor) {
            this.anchura = diametro;
            this.x = posX;
            this.y = posY;
            this.colorCirculo = colorC;
            this.strokeW = st;
            this.strokeColor = stColor;
        }

        dibujar() {
            p.fill(this.colorCirculo);
            p.strokeWeight(this.strokeW);
            p.stroke(this.strokeColor);

            p.ellipse(this.x, this.y, this.anchura, this.anchura);
        }

    }


    class Elipse {
        constructor(posX, posY, ancho, alto, colorE, st, stColor) {
            this.anchura = ancho;
            this.altura = alto;
            this.x = posX;
            this.y = posY;
            this.colorElipse = colorE;
            this.strokeW = st;
            this.strokeColor = stColor;
        }

        dibujar() {
            p.fill(this.colorElipse);
            p.strokeWeight(this.strokeW);
            p.stroke(this.strokeColor);

            p.ellipse(this.x, this.y, this.anchura, this.altura);
        }

    }


    class Rectangulo {
        constructor(posX, posY, ancho, alto, colorR, st, stColor) {
            this.anchura = ancho;
            this.altura = alto;
            this.x = posX;
            this.y = posY;
            this.colorRectangulo = colorR;
            this.strokeW = st;
            this.strokeColor = stColor;
        }

        dibujar() {
            p.fill(this.colorRectangulo);
            p.strokeWeight(this.strokeW);
            p.stroke(this.strokeColor);

            p.rect(this.x, this.y, this.anchura, this.altura);
        }

    }

    class Triangulo {
        constructor(punto1X, punto1Y, punto2X, punto2Y, punto3X, punto4Y, colorT, st, stColor) {
            this.x1 = punto1X;
            this.y1 = punto1Y;
            this.x2 = punto2X;
            this.y2 = punto2Y;
            this.x3 = punto3X;
            this.y3 = punto4Y;
            this.colorTriangulo = colorT;
            this.strokeW = st;
            this.strokeColor = stColor;
        }

        dibujar() {
            p.fill(this.colorTriangulo);
            p.strokeWeight(this.strokeW);
            p.stroke(this.strokeColor);

            p.triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
        }
    }
}
let myp5 = new p5(sketch,'container');