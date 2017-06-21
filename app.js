const {
  graphql,
  buildSchema
} = require("graphql");
const graphqlHTTP = require("express-graphql");
const express = require("express");
const ProductService = require("./ProductService");

const productSchema = buildSchema(
  `
type Product {
  name: String
  stockAvailable: Int
}

type Query {
  product(pid: String!): Product
}
  `
);

const root = {
  product({ pid }) {
    return ProductService.find(pid);
  }
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: productSchema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(3000, () => console.log("Listen on 3000"));
