const express = require("express"); 
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors"); 

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(cors()); 

app.use("/api/students", require("./controllerRoutes/studentControllerRouter"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running successfully on port ${PORT}`);
});