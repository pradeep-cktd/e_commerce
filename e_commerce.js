const express = require("express");
const Joi = require("joi");
//const { result } = require("underscore");
//const { join } = require("path");
const app = express();
app.use(express.json());

const product = [
  {
    id: 1,
    name: "Oneplus8T",
    total_quanitity: 12,
    type_of_product: "Mobile",
    price: 45000
  },
  {
    id: 2,
    name: "Oneplus9R",
    total_quanitity: 15,
    type_of_product: "Mobile",
    price: 42000
  },
  {
    id: 3,
    name: "Oneplusnode",
    total_quanitity: 25,
    type_of_product: "Mobile",
    price: 25000
  },
  {
    id: 4,
    name: "Oneplus10T",
    total_quanitity: 10,
    type_of_product: "Mobile",
    price: 65000
  },
];
app.get("/", function (req, res) {
  console.log("hi programmer");
  res.send("Welcome FSD 6 batch");
  //File read
});
app.get("/product", function (req, res) {
 res.send(product);
});
app.get("/product/:id", function (req, res) {
  var product1Id = req.params.id;
  var product1 =  product.find((c) => c.id === parseInt(product1Id));
  if (!product1) {
    res.status(404).send("product not found");
  } else res.send(product1);
});
app.post("/product1", function (req, res) {
  res.send('successful')
   const schema = Joi.object({
     name: Joi.string().min(3).required(),
   });
  const validateResult = validateprodcut1(req.body);
  console.log(validateResult);
  if (validateResult.error) res.send(validateResult.error);
  else {
    var product1 = {
      id: product1.length + 1,
      name: req.body.name,
    };
    product1.push(product1);
    res.send(product1);
  }
});
app.put("/product/:id", function (req, res) {
  const validateResult = validateproduct(req.body);
  console.log(validateResult);
  if (validateResult.error) res.send(validateResult.error);
  else {
    var product1Id = req.params.id;
    var product1 = product.find((c) => c.id === parseInt(product1Id));
    let product1index = product.findIndex((c) => c.id === parseInt(product1Id));
    product[product1index].name = req.body.name;
    res.send(product1[productindex]);
  }
});

app.listen(5000);
console.log("API running  the server on port 5000");
  try {
    const result = schema.validate(product);
    return result;
  } catch (err) {
    return err;
  }

