let figura;
let figuras=[];
var numFiguras=0;
let colorFigura;
let colorGrosor;
let tamañoGrosor;
var anchura;
var altura;
var existe=false;
    
function setup(){
    createCanvas(1900, 1080);
    background(255,255,255);
    colorFigura=color(0);
    colorGrosor=color(0);
    tamañoGrosor=0;
}

function draw(){
    background(255,255,255);
    if(existe){
        figuras[numFiguras]=figura;
        numFiguras++;
        existe=false;
    }

    drawAll(); 
}

function drawAll(){
    for(let i=0;i<numFiguras;i++){
        figuras[i].dibujar();
    }
}

	
function addCirculo(){
    if(anchura<=0){
        artyom.say("Para poder dibujar un circulo es necesario que el ancho de la figura sea mayor que 0")
        return;
    }
    var max=800;
    var min=10;
    figura=new Circulo(Math.random() * (max - min) + min,Math.random() * (max - min) + min,anchura,colorFigura,tamañoGrosor,colorGrosor);
    existe=true;
}

function addRectangulo(){
    if(anchura<=0){
        artyom.say("Para poder dibujar un rectangulo es necesario que el ancho de la figura sea mayor que 0")
        return;
    }
    if(altura<=0){
        artyom.say("Para poder dibujar un rectangulo es necesario que el alto de la figura sea mayor que 0")
        return;
    }
    var max=800;
    var min=10;
    figura=new Rectangulo(Math.random() * (max - min) + min,Math.random() * (max - min) + min,anchura,altura,colorFigura,tamañoGrosor,colorGrosor);
    existe=true;
}

function addTriangulo(){
    var max=100;
    var min=10;
    figura=new Triangulo(Math.random() * (max - min) + min,Math.random() * (max - min) + min,Math.random() * (max - min) + min,Math.random() * (max - min) + min,Math.random() * (max - min) + min,Math.random() * (max - min) + min,Math.random() * (max - min) + min,Math.random() * (max - min) + min,Math.random() * (max - min) + min,Math.random() * (max - min) + min,colorFigura,tamañoGrosor,colorGrosor);
    existe=true;
}

function addElipse(){
    if(anchura<=0){
        artyom.say("Para poder dibujar una elipse es necesario que el ancho de la figura sea mayor que 0")
        return;
    }
    if(altura<=0){
        artyom.say("Para poder dibujar una elipse es necesario que el alto de la figura sea mayor que 0")
        return;
    }
    var max=800;
    var min=10;
    figura=new Elipse(Math.random() * (max - min) + min,Math.random() * (max - min) + min,anchura,altura,colorFigura,tamañoGrosor,colorGrosor);
    existe=true;
}

function addCuadrado(){
    if(anchura<=0){
        artyom.say("Para poder dibujar un cuadrado es necesario que el ancho de la figura sea mayor que 0")
        return;
    }
    var max=800;
    var min=10;
    figura=new Rectangulo(Math.random() * (max - min) + min,Math.random() * (max - min) + min,anchura,anchura,colorFigura,tamañoGrosor,colorGrosor);
    existe=true;
}

function cambiarColor(wildcard){
    var colores=["blanco","cian","amarillo","rojo","verde","magenta","naranja","violeta","lima","azul","morado","gris","negro"];
    var pos=colores.indexOf(wildcard.trim());
    switch(pos){
        case 0:
            colorFigura=color('#FFFFFF');
            break;

        case 1:
            colorFigura=color('#00FFFF');
            break;

        case 2:
            colorFigura=color('#FFFF00');
            break;

        case 3:
            colorFigura=color('#FF0000');
            break;

        case 4:
            colorFigura=color('#008000');
            break;

        case 5:
            colorFigura=color('#FF00FF');
            break;

        case 6:
            colorFigura=color('#FF8C00');
            break;

        case 7:
            colorFigura=color('#FF00FF');
            break;

        case 8:
            colorFigura=color('#00FF00');
            break;

        case 9:
            colorFigura=color('#0000FF');
            break;

        case 10:
            colorFigura=color('#800080');
            break;

        case 11:
            colorFigura=color('#808080');
            break;

        case 12:
            colorFigura=color('#000000')
            break;

        default:
            artyom.say("El color pasado no existe, por favor revise la ayuda de comandos");
            return "";
    }
    return colores[pos];
}

function cambiarColorGrosor(wildcard){
    var colores=["blanco","cian","amarillo","rojo","verde","magenta","naranja","violeta","lima","azul","morado","gris","negro"];
    var pos=colores.indexOf(wildcard.trim());
    switch(pos){
        case 0:
            colorGrosor=color('#FFFFFF');
            break;

        case 1:
            colorGrosor=color('#00FFFF');
            break;

        case 2:
            colorGrosor=color('#FFFF00');
            break;

        case 3:
            colorGrosor=color('#FF0000');
            break;

        case 4:
            colorGrosor=color('#008000');
            break;

        case 5:
            colorGrosor=color('#FF00FF');
            break;

        case 6:
            colorGrosor=color('#FF8C00');
            break;

        case 7:
            colorGrosor=color('#FF00FF');
            break;

        case 8:
            colorGrosor=color('#00FF00');
            break;

        case 9:
            colorGrosor=color('#0000FF');
            break;

        case 10:
            colorGrosor=color('#800080');
            break;

        case 11:
            colorGrosor=color('#808080');
            break;

        case 12:
            colorGrosor=color('#000000')
            break;

        default:
            artyom.say("El color de grosor pasado no existe, por favor revise la ayuda de comandos");
            return;
    }
    return colores[pos];
}

function cambiarGrosor(tamaño){
   tamañoGrosor=tamaño;
}

function limpiarLienzo(){
    figuras=[];
    numFiguras=0;
}

function cambiarAnchoFigura(anc){
    anchura=anc;
}
function cambiarAltoFigura(alt){
    altura=alt;
}

function borrarUltimaFigura(){
    if(numFiguras>0){
        figuras[numFiguras-1]=null;
        numFiguras--;
        return true;
    }
    else{
        return false;
    }
}

function borrarTipoFigura(tipo){
    var aux=[]
    var cont=0;

    for(i=0;i<numFiguras;i++){
        if(typeof numFiguras[i]!=tipo){
            aux[cont]=numFiguras[i];
            cont++;
        }
    }

    figuras=aux;
    numFiguras=cont;
}
 


class Circulo{
    constructor(posX,posY,diametro,colorC,st,stColor){
        this.anchura=diametro;
        this.x=posX;
        this.y=posY;
        this.colorCirculo=colorC;
        this.strokeW=st;
        this.strokeColor=stColor;
    }
    
    dibujar(){
        fill(this.colorCirculo);
        strokeWeight(this.strokeW);
        stroke(this.strokeColor);

        ellipse(this.x,this.y,this.anchura,this.anchura);
    }
    
}


class Elipse{
    constructor(posX,posY,ancho,alto,colorE,st,stColor){
        this.anchura=ancho;
        this.altura=alto;
        this.x=posX;
        this.y=posY;
        this.colorElipse=colorE;
        this.strokeW=st;
        this.strokeColor=stColor; 
    }
            
    dibujar(){
        fill(this.colorElipse);
        strokeWeight(this.strokeW);
        stroke(this.strokeColor);

        ellipse(this.x,this.y,this.anchura,this.altura);
    }
            
}


class Rectangulo{
    constructor(posX,posY,ancho,alto,colorR,st,stColor){
        this.anchura=ancho;
        this.altura=alto;
        this.x=posX;
        this.y=posY;
        this.colorRectangulo=colorR;
        this.strokeW=st;
        this.strokeColor=stColor;
    }
    
    dibujar(){
        fill(this.colorRectangulo);
        strokeWeight(this.strokeW);
        stroke(this.strokeColor);

        rect(this.x,this.y,this.anchura,this.altura);
    }
    
}

class Triangulo {
    constructor(punto1X,punto1Y,punto2X,punto2Y,punto3X,punto4Y,colorT,st,stColor){
        this.x1=punto1X;
        this.y1=punto1Y;
        this.x2=punto2X;
        this.y2=punto2Y;
        this.x3=punto3X;
        this.y3=punto4Y;
        this.colorTriangulo=colorT;
        this.strokeW=st;
        this.strokeColor=stColor;
    }
    
    dibujar(){
        fill(this.colorTriangulo);
        strokeWeight(this.strokeW);
        stroke(this.strokeColor);

        triangle(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3);
    }  
}