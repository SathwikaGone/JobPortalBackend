const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const { ApolloServer } = require("apollo-server-express");
const resolvers = require("./GraphQl/resolvers.ts");
const typeDefs = require("./GraphQl/typeDefs.ts");

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: "/api" });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//DB config
const db = require("./config/key").MongodbURI;

//connect Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server running on ", PORT));

module.exports = app;
