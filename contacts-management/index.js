const express = require("express");
const dotenv = require("dotenv");
const { errorHandler } = require("./errorHandler/errorHandler");
const connectDB = require("./config/dbConnection");

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contacts-routes"));
app.use("/api/users", require("./routes/users-routes"));
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on ${port};`));
