import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("", function (req, res) {
    return res.send("Hello lambda function");
})

export const handler = serverless(app);
