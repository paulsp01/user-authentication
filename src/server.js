const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");


require("dotenv").config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 7000;


app.use(bodyParser.json()); // Make sure this middleware is set up
app.use("/auth", authRoutes); // Ensure the routes are registered correctly



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
