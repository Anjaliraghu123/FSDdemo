const express = require("express"); 
const connectDB = require("./config/db");
const dotenv = require("dotenv")

dotenv.config();

const app = express();

connectDB();
app.use(express.json());
app.use(cros());

app.use("/api/students",require("./controllerRoutes/studentControllerRouter"))
const PORT = process.env.PORT;
app.listen(PORT ,() =>{
    console.log("server is runing successfully in port number")
})