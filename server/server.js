const express = require("express");
const app = express();
const path = require("path")
const myData = require("./myData")
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"]
}
app.use(cors(corsOptions))

app.get("/api", (req, res) => {
    res.json(myData);
})


app.listen(8080, () => {
    console.log("Server started on port 8080")
})