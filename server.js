const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const { ApolloServer } = require("apollo-server-express");
// const resolvers = require("./app/Grapgql/resolvers.ts");
// const typedefs = require("./app/Grapgql/typedef.ts");

const app = express();

// const server = new ApolloServer({ typeDefs: typedefs, resolvers });
// server.applyMiddleware({ app, path: "/api" });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//DB config
const db = require("./config/key.js").MongodbURI;

//connect Mongo
// mongoose
//   .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("DB connected"))
//   .catch((err) => console.log(err));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.set("port", process.env.PORT || 5000);

module.exports = app;
