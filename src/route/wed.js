// import express from "express";
const express = require('express');
import homecontrollers from '../controllers/controllers';

let router = express.Router();

let initWedRouters = (app) => {
    router.get("/", (req, res) => {
        return res.send("hello wold with cmm ");

    });
    router.get("/mycrush", (req, res) => {
        return res.send("có dell đâu mà nhìn 🥲😏");

    });
    router.get("/dmy", homecontrollers.getHomePage);
    router.get('/remember', homecontrollers.gethomeview);
    return app.use("/", router);


}

module.exports = initWedRouters;