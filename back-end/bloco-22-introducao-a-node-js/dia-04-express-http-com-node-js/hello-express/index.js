const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());
const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];
const drinks = [
    { id: 1, name: 'Refrigerante Lata', price: 5.0 },
    { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
    { id: 3, name: 'Suco 300ml', price: 4.0 },
    { id: 4, name: 'Suco 1l', price: 10.0 },
    { id: 5, name: 'Cerveja Lata', price: 4.5 },
    { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];
app.get('/validateToken', function (req, res) {
    const token = req.headers.authorization;
    if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});
  
    res.status(200).json({message: 'Valid Token!'})
  });
app.post('/recipes', function (req, res) {
    const { id, name, price, waitTime } = req.body;
    recipes.push({ id, name, price, waitTime});
    res.status(201).json({ message: 'Recipe created successfully!'});
  });
app.get('/recipes/search', function (req, res) {
    const { name,maxPrice,minPrice } = req.query;
    const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price > parseFloat(minPrice) && r.price < parseFloat(maxPrice));
    res.status(200).json(filteredRecipes);
  });
app.get('/recipes', function (req, res) {
    const sorted = recipes.sort((recipeA, recipeB) => {
        if(recipeA.name < recipeB.name) return -1
        return 1
    })
  res.json(sorted);
});

app.get('/recipes/:id', function (req, res) {
    const { id } = req.params;
    const recipe = recipes.find((r) => r.id === parseInt(id));
  
    if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});
  
    res.status(200).json(recipe);
  });

app.put('/drinks/:idReq', (req,res) => {
  const { idReq } = req.params;
  const { id, name, price } = req.body;
  const toBeChanged = drinks.map((dr) => dr.id).indexOf(parseInt(idReq));
  drinks[toBeChanged] = { id, name, price };
  res.status(200).json({ message: 'Drink updated'});
});

app.delete('/drinks/:id', (req,res) => {
  const { id } = req.params;
  const toBeChanged = drinks.findIndex((d) => d.id === parseInt(id));
  drinks.splice(toBeChanged,1);
  res.status(200).json({message: 'Drink deleted'})
});

 
app.post('/drinks', (req,res) => {
  const { id, name, price } = req.body;
    drinks.push({ id, name, price});
    res.status(201).json({ message: 'Drink created successfully!'});
})  
app.get('/drinks', (req,res) => {
    const sortedDrinks = drinks.sort((drinkA,drinkB) => {
        if (drinkA.name < drinkB.name) return -1
        return 1
    })
    res.json(sortedDrinks);
} );
app.get('/drinks/search', (req,res) => {
    const { name } = req.query;
    const filteredDrinks = drinks.filter((drink) => drink.name.includes(name));
    res.status(200).json(filteredDrinks);
})
app.get('/drinks/:id', function (req, res) {
    const { id } = req.params;
    const drink = drinks.find((r) => r.id === parseInt(id));
  
    if (!drink) return res.status(404).json({ message: 'Recipe not found!'});
  
    res.status(200).json(drink);
  });
app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});