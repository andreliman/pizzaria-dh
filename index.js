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

app.post("/pizzas", (req, res) => {
  const { body: { sabor, categoria, preco } } = req;
  const id = pizzas[pizzas.length - 1].id + 1;

  const novaPizza = {
      id,
      sabor,
      categoria,
      preco
  };

  pizzas.push(novaPizza);
  res.status(201).json(novaPizza);
});

// DESAFIO: Criar uma rota para criar uma nova pizza. Utilizem o método http correto, adicionem no array de pizzas e retorne essa nova pizza como json. IMPORTANTE: a nova pizza precisa ter id.

app.put('/pizzas/:id', (req, res) => {
  const { id } = req.params;
  const { body: {sabor, categoria, preco} } = req;

  const pizza = pizzas.find(pizza => pizza.id === Number(id));
  pizza.sabor = sabor;
  pizza.categoria = categoria;
  pizza.preco = preco;

  res.json(pizza);
});

app.delete('/pizzas/:id', (req, res) => {
  const { id } = req.params;

  const index = pizzas.findIndex(pizza => pizza.id === Number(id));
  
  pizzas.splice(index, 1);

  res.status(204).send();
});

// const adicionarPizza = function (sabor, categoria, preco) {
//   const pizzaNova = {
//     id: pizzas[pizzas.length - 1].id + 1,
//     sabor,
//     categoria,
//     preco,
//   };

//   pizzas.push(pizzaNova);

//   console.log(`A pizza de ${sabor} foi adicionada com sucesso!`);
// };

// const encontrarPizza = (sabor) => {
  
//   const pizzaEncontrada = pizzas.find((pizza) => pizza.sabor === sabor);
    
//   console.log(pizzaEncontrada ? pizzaEncontrada : `Pizza sabor ${sabor}não encontrada!`);
// };

// encontrarPizza("Brócolis");

// adicionarPizza("Presunto", "Salgada", 25);
// adicionarPizza("Catupiry", "Vegetariana", 40);

// console.log(`Seguem todos os sabores do cardápio:`);
// console.log(listarTodasAsPizzas());

const port = 3000;
app.listen(port, () => console.log(`O servidor ${port} está online!`));