const mongoose= require('mongoose')
const DB= "mongodb+srv://alok123:Papa%40123@cluster0.5eyue.mongodb.net/TrainingPortal?retryWrites=true&w=majority"


mongoose.connect(DB, {

    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("DB started")
}).catch((error)=>{
    console.log(error)
})