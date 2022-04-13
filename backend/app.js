const express = require('express');
const app = express();

const errorMiddleware = require("./middleware/error");

app.use(express.json());

// Route imports

const product = require("./routes/productRoute");
const shop = require("./routes/shopRoute");



app.use("/api/v1",product);
app.use("/api/v1",shop);

// middleware

app.use(errorMiddleware);



module.exports = app