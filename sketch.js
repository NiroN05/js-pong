
//variáveis da bolinha
let xbolinha = 100;
let ybolinha = 200;
let diametro = 20;
let raio = diametro /2

//variaveis do oponente
let xraqueteoponente = 580
let yraqueteoponente = 150

//velocidade da bolinha
let velocidadeXbolinha = 7
let velocidadeYbolinha = 7


//variaveis da raquete
let xraquete = 5
let yraquete = 150
let raquetecomprimento = 10
let raquetealtura = 80

let mostrarminharaquete

let velocidadeYoponente
let velocidadeXoponente

//placar do jogo
let meuspontos = 0
let pontosoponente = 0

//sons do jogo
let raquetada
let pontos
let trilha

let colidiu = false

function preload() {
  
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
  
}





function setup() {
  createCanvas(600, 400);
  
  trilha.loop()
  
  
}

function draw() {
  background(0);
  
  mostrarBolinha()
  movimentarBolinha()
  colisaoBorda()
  movimentarraquete()
  mostrarraquete(xraquete, yraquete)
  mostrarraquete(xraqueteoponente, yraqueteoponente)
  colisaoraquete()
  verificacolisaoRaquete(xraquete, yraquete) 
  movimentarraqueteoponente()
  verificacolisaoRaquete(xraqueteoponente, yraqueteoponente)
  incluiplacar()
  marcaponto()
  
}

function mostrarBolinha() {
  
  circle(xbolinha, ybolinha, diametro)
  
}
  
function movimentarBolinha() {
  
  xbolinha += velocidadeXbolinha
  ybolinha += velocidadeYbolinha
  
}

function colisaoBorda() {
  
  
  if(xbolinha + raio > width || xbolinha - raio < 0 ) {
      
    velocidadeXbolinha *= -1      }
  
   if(ybolinha + raio > height || ybolinha - raio < 0) {
     
     velocidadeYbolinha *= -1     }
   
  
 }
  
function movimentarraquete() {
  
   if(keyIsDown(87)) {
    
    yraquete -= 10
  }

  if(keyIsDown(83)) {
    
    yraquete += 10
    
  }
  
  
}
  
function mostrarraquete(x,y) {
  
  fill("yellow")
  rect(x, y, raquetecomprimento, raquetealtura)
}

function colisaoraquete() {
  
  if(xbolinha - raio < xraquete + raquetecomprimento
    && ybolinha - raio < yraquete + raquetealtura
    && ybolinha + raio > yraquete)  {
    
 velocidadeXbolinha *= -1
  raquetada.play()
  }  
    
}

function verificacolisaoRaquete(x, y) {
  
  colidiu = collideRectCircle(x, y, raquetecomprimento, raquetealtura, xbolinha, ybolinha, raio)
  
  if(colidiu){
    
    velocidadeXbolinha *= -1 
    raquetada.play()
}
  
}



  function movimentarraqueteoponente() {
    
    if(keyIsDown(38)) {
    
    yraqueteoponente -= 10
  }

  if(keyIsDown(40)) {
    
    yraqueteoponente += 10
    
  }
    
  }

 function incluiplacar() {
   stroke(255)
   textSize(20)
   textAlign(CENTER)
   fill("orange")
   rect(100, 10, 40, 20)
   fill(255)
   text(meuspontos, 115, 26)
   fill("orange")
   rect(450, 10, 40, 20)
   fill(255)
   text(pontosoponente, 470, 26)
   text("x", 300, 26)
 }

 function marcaponto() {
    
   if (xbolinha > 590) {
    meuspontos += 1
     ponto.play()
     } 
   
  if (xbolinha < 15) {
    pontosoponente += 1;
    ponto.play()
     }
   
  }
