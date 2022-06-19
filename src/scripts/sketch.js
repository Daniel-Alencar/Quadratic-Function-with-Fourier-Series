let theta = 0;
let wave = [];
let slider;

function setup() {
  createCanvas(600, 400);
  // Cria slider que vai de 1 a 100 (valor padrão em 1)
  // Estará em baixo do Canvas
  slider = createSlider(1, 100, 1);
}

function draw() {
  
  // Cor de fundo preta
  background(0);
  // O que será desenhado após isto será transladado em X (175) e em Y (200)
  translate(175, 200);
  
  let x = 0;
  let y = 0;
  
  // Desenhar as circunferências
  // A quantidade de iterações que o FOR terá será a mesma quantidade de circunferências desenhadas
  for(let i = 0; i < slider.value(); i++) {
    
    // Guardamos os valores anteriores de X e Y (primeira interação X = Y = 0)
    let previousX = x;
    let previousY = y;
    
    // N é sempre um número ímpar
    let n = i * 2 + 1;
    
    // Cálculos necessários para o valor do raio e os valores de X e Y que caminham pela circunferência
    let radius = 75 * (4 / (n * PI));
    x += radius * cos(n * theta);
    y += radius * sin(n * theta);
    
    // Define a borda com cor "Cinza escuro"
    stroke(255, 100);
    // O que será desenhado não terá preenchimento
    noFill();
    // Desenha uma circunferência com diâmetro = radius * 2 e especificada em previousX e previousY
    ellipse(previousX, previousY, radius * 2);
    
    // Define a borda com cor "Branca"
    stroke(255);
    // Desenha linha que representa o raio
    line(previousX, previousY, x, y);

  }
  
  // Adiciona os valores de Y no começo do array "wave"
  wave.unshift(y);

  // Desenha a linha que vai da circunferência ao gráfico
  line(x, y, 200, wave[0]);

  // O que será desenhado após isto será transladado em X (200) e em Y (0)
  translate(200, 0);

  // Desenha o gráfico
  // Utilizamos beginShape() e endShape(), por isso temos uma série de comandos vertex em seguida
  beginShape();
  for(let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  // Define a "velocidade" que percorreremos cada circunferência
  theta += 0.05;
  
  // Limpar valores do array dos pontos Y do gráfico formado
  if(wave.length > 250) {
    wave.pop();
  }
}