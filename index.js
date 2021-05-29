const { json } = require("express");
const express = require("express");
const app = express();

app.use(express.json());

const pizzas = require("./database/pizzas.json");

// const listarTodasAsPizzas = () => {
//   let conteudo = [];

//   pizzas.forEach((pizza) => {
//     conteudo += `
//         Sabor: ${pizza.sabor}
//         Categoria: ${pizza.categoria}
//         Preço: ${pizza.preco}
//         `;
//   });

//   return conteudo;
// };

app.get("/pizzas", (req, res) => res.json(pizzas));

// DESAFIO: Criar uma rota para criar uma nova pizza. Utilizem o método http correto, adicionem no array de pizzas e retorne essa nova pizza como json. IMPORTANTE: a nova pizza precisa ter id. 

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