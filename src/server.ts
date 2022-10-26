import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/", function (req, res) {
    console.log("console")
    res.send("Hello worlds");
})

export default serverless(app);
