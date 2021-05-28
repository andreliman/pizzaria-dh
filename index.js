const express = require("express");
const app = express();


const pizzas = require("./database/pizzas.json");

const listarTodasAsPizzas = () => {
  let conteudo = [];

  pizzas.forEach((pizza) => {
    conteudo += `
        Sabor: ${pizza.sabor}
        Categoria: ${pizza.categoria}
        Preço: ${pizza.preco}
        `;
  });

  return conteudo;
};

const adicionarPizza = function (sabor, categoria, preco) {
  const pizzaNova = {
    id: pizzas[pizzas.length - 1].id + 1,
    sabor,
    categoria,
    preco,
  };

  pizzas.push(pizzaNova);

  console.log(`A pizza de ${sabor} foi adicionada com sucesso!`);
};

const encontrarPizza = (sabor) => {
  
  const pizzaEncontrada = pizzas.find((pizza) => pizza.sabor === sabor);
    
  console.log(pizzaEncontrada ? pizzaEncontrada : `Pizza sabor ${sabor}não encontrada!`);
};

// encontrarPizza("Brócolis");

// adicionarPizza("Presunto", "Salgada", 25);
// adicionarPizza("Catupiry", "Vegetariana", 40);

// console.log(`Seguem todos os sabores do cardápio:`);
// console.log(listarTodasAsPizzas());

const portaServidor = 3000;
app.listen(portaServidor, () => console.log(`O servidor ${portaServidor} está online!`));