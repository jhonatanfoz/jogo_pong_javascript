//variaveis da bolinha
let xBolinha=300;
let yBolinha=200;
let diametro=22;
let raio = diametro / 2; 

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis da raquete
let xRaquete=5;
let yRaquete=150;
let RaqueteComprimento=10;
let RaqueteAltura=90;

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0)
 mostraBolinha();
 VerificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentoMinhaRaquete();
verificacolisaoraquete();
  colisãominharaquete();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  
  
  if (xBolinha + raio> width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1
  }
  if (yBolinha + raio> height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}  


function mostraBolinha(){
   circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){ 
 xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
   
}

function VerificaColisaoBorda(){
  
}

function mostraRaquete(x, y){
  rect(x,y,RaqueteComprimento,RaqueteAltura);
}



function movimentoMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
}
}

function verificacolisaoraquete(){
  if (xBolinha - raio < xRaquete + RaqueteComprimento && yBolinha - raio < yRaquete + RaqueteAltura  && yBolinha + raio > yRaquete){
      velocidadeXBolinha *= -1;
  }
  
}

let colidiu = false;
function colisãominharaquete(){
  colidiu =  collideRectRect(xRaquete, yRaquete, RaqueteComprimento, RaqueteAltura, xBolinha, yBolinha, raio);
 if (colidiu){
    velocidadeXBolinha *= -1;
 } 
}
   
function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha -yRaqueteOponente - RaqueteComprimento / 2 -30;
  yRaqueteOponente += velocidadeYOponente
}