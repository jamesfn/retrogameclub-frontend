const express = require("express");
const app = express();

app.get("/ten", (req, res) => {
    res.send("counter is now " + counter);
    counter += 10;
    console.log(req.data);
});

app.use("/", express.static("public"));

let counter = 0;

app.listen(8080, () => {console.log("server listening on port 8080 :)")});