import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
let app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/", (req,res) => {

    console.log(req.body);
    res.send("Hello World..");
})

app.listen(3000, () => {
    console.log("App is listening on port 3000");
})