const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require("graphql");
const express = require("express");

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return "world";
        }
      }
    }
  })
});

const app = express();

app.get('/', (req, res) => {
  graphql(schema, `{ hello }`).then(result => res.send(result));
});

app.listen(3000, () => console.log("Listen on 3000"));
