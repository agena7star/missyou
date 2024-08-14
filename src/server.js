import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWedRouters from "./route/wed"
require("dotenv").config();

let app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
viewEngine(app);
initWedRouters(app);
let port = process.env.PORT;
app.listen(port, () => {
    console.log("backend nodejs is running in the port : " + port);
}
)