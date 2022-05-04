const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const cors=require("cors")
const fileUpload = require("express-fileupload");
const bodyParser = require('body-parser');
const dotenv = require("dotenv");

const errorMiddleware = require("./middleware/error");

//config

dotenv.config({ path: "backend/config/config.env"});

app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Route imports

const product = require("./routes/productRoute");
const shop = require("./routes/shopRoute");
const user = require("./routes/userRoute");
const seller = require("./routes/shopRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");



app.use("/api/v1",product);
app.use("/api/v1",shop);
app.use("/api/v1",user);
app.use("/api/v1",seller);
app.use("/api/v1",order);
app.use("/api/v1",payment);

// middleware

app.use(errorMiddleware);



module.exports = app