const express = require('express');
const path = require("path");
const dotenv = require('dotenv');
const logger = require('morgan');
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config({ path: path.resolve(__dirname, './.env') });
connectDB();

const app = express();
app.use(express.json());

if(process.env.NODE_ENV === "development"){
  app.use(logger("dev"));
}

//@User Routes
app.use("/api/users", userRoutes);


const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}!`));