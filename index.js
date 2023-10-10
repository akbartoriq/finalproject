import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

//app.listen(3000, ()=> console.log('Server up and running...'));
app.listen(PORT, "0.0.0.0", function () {});