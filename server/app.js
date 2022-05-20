
const express = require("express");
const app = express();

require("./db/conn");


<<<<<<< HEAD
const Schedule = require("./models/scheduleSchema");
const Course = require("./models/courseSchema")
const Trainer= require("./models/trainerSchema")


const cors = require("cors");
=======
>>>>>>> 6fb735daa0973b42ee7e7e5071aed74a5b25e880
const router = require("./routes/router");

const port = 2000;


app.use(express.json());

app.get("/",(req,res)=>{
    res.json("server is started")
})

app.use('/api',router);

app.listen(port, () => {
    console.log(`server is started at port number ${port}`);
});
