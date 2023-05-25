const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const crypto = require("crypto");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
dotenv.config();
app.use(bodyParser.json());

const nameSchema = new mongoose.Schema({
    name: String,
    paragraf: String,
    icon: String,
  });
  const yeniModel = new mongoose.model("Products", nameSchema);
 
 

  app.get("/api", (req, res) => {
  res.send("welcome to out API!");
});

//GET ALL  - MONGO DB
app.get("/api/product", async (req, res) => {
  const { name } = req.query;
  const products = await yeniModel.find();
  if (!name) {
    res.status(200).send(products);
  } else {
    const searchedProducts = products.filter((x) =>
      x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
    );
    res.status(200).send(searchedProducts);
  }
});
//GET BY ID - MONGO DB
app.get("/api/product/:id", async(req, res) => {
  const { id } = req.params;
  const products = await yeniModel.findById(id)
  res.status(200).send(products);
});
//DELETE- MONGO DB
app.delete("/api/product/:id",async(req, res) => {
  const id = req.params.id;
  //delete
  const deleteProducts = await yeniModel.findByIdAndDelete(id);
  res.status(203).send({
    message: `${deleteProducts.name} deleted successfully!`,
  });
});
app.post("/api/product", async (req, res) => {
  const { name, paragraf,icon } = req.body;
  const newProduct = new yeniModel({
    name: name,
    paragraf: paragraf,
    icon: icon
  });
  await newProduct.save();
  res.status(201).send({
    message: `${newProduct.name} posted successfully`,
    payload: newProduct,
  });
});
app.put("/api/product/:id", async(req, res) => {
  const id = req.params.id;
  const { name, paragraf } = req.body;
  const updatingProduct = {name:name, paragraf:paragraf};
  await yeniModel.findByIdAndUpdate(id,updatingProduct);
  res.status(200).send(`${updatingProduct.name} updated successfully!`);
});



PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App running on PORT: ${PORT}`);
});

DB_PASSWORD = process.env.DB_PASSWORD;
DB_CONNECTION = process.env.DB_CONNECTION;

mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD)).then(() => {
  console.log("Mongo DB connected!");
});