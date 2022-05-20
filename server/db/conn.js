const mongoose= require('mongoose')
const DB= "mongodb+srv://alok123:Papa%40123@cluster0.5eyue.mongodb.net/TrainingPortal?retryWrites=true&w=majority"


mongoose.connect(DB, {

    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connected to the database.....")
}).catch((error)=>{
    console.log(error)
})