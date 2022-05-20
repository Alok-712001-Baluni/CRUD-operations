require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const usersRouter = require("./routes/api/users");
const config = require('config');
const app = express();
const cors = require("cors");

const Schedule = require("./models/scheduleSchema");
const Course = require("./models/courseSchema")
const Trainer= require("./models/trainerSchema")


app.use(cors());
// Body parser middleware
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());


//DB Config
const db = config.get('mongoURI');
//Connect to MongoDB
mongoose
    .connect(
        db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
// app.use("/api/users", usersRouter);
app.use(usersRouter)

/* //Serve static assets if in production
if (process.env.NODE_ENV = "production") {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
 */

const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));