let booksToBeRead;
let cor;

function setup() {
  createCanvas(400, 400);

  booksToBeRead= livroAleatorio();
  console.log( "Sorteando");
}

function livroAleatorio(){
  let booksToBeRead = ["Vidas Secas", "Memórias Póstumas de Brás Cubas", "O Cortiço", "Quarto de Despejo","1984", "Admirável Mundo Novo"];
  return random(booksToBeRead);
}

function inicializaCores() {
   let cor=color(random( 0,100),(0,150),(0,200));
  background(cor);
  fill("black");
  textSize(50);
  textAlign(CENTER, CENTER);
  textFont("Times New Roman");
}

function booksParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, booksToBeRead.length);
  let parcial = booksToBeRead.substring(0, quantidade);
  return parcial;
  
}

function draw() {
   
  inicializaCores();

  let texto = booksParcial(0, width);
  text(texto, 200, 200);
  let titulo=["SORTEANDO"]
  text(titulo,150,50)

}
