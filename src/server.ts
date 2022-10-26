import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/", function (req, res) {
    res.send("Hello worlds");
})

export { app };
