const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

// Middleware for parsing JSON
app.use(express.json());

let products = [
  { id: 1, name: "Doll", category: "doll", image: "images/doll.jpg " },
  { id: 2, name: "toy car", category: "toy car", image: "images/toycar.jpg" },
];

app.get("/api/products", (req, res, next) => {
  const filters = req.query;
  if (filters) {
    const filteredproducts = products.filter((product) => {
      let isValid = true;
      for (key in filters) {
        console.log(key, products[key], filters[key]);
        isValid = isValid && product[key] == filters[key];
      }
      return isValid;
    });
    res.send(filteredproducts);
  } else {
    res.json(products);
  }
});

// GET - Retrieve a specific product by ID
app.get("/api/products/:id", (req, res) => {
  const product = products.find((u) => u.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

// POST - Create a new product
app.post("/api/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    category: req.body.category,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});


// PUT - Update a product completely
app.put("/api/prodcuts/:id", (req, res) => {
  const product = products.find((u) => u.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });

  product.name = req.body.name;
  product.category = req.body.category;

  res.json(product);
});

// DELETE - Remove a product
app.delete("/api/product/:id", (req, res) => {
  const productIndex = products.findIndex(
    (u) => u.id === parseInt(req.params.id),
  );
  if (productIndex === -1)
    return res.status(404).json({ message: "Prodcut not found" });

  const deletedProduct = products.splice(productIndex, 1);
  res.json(deletedProduct[0]);
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(8080, () => {
  console.log("REST API server running on port 8080");
});
