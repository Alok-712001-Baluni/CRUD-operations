
const express = require("express");
const app = express();

require("./db/conn");


const router = require("./routes/router");

const port = 2000;


app.use(express.json());

app.get("/",(req,res)=>{
    res.json("server start")
})

app.use('/api',router);

app.listen(port, () => {
    console.log(`server is started at port number ${port}`);
});
