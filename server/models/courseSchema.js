const mongoose= require('mongoose')


const courseSchema = new mongoose.Schema({
    course: {
        type:String,
ref: 'TrainerSchema',
        required: true
    },
    desc: {
        type:String,
        required: true
    },
    cat: {
        type: String,
        required: true
    },
    int_aud: {
        type: String,
        required: true
    },
    benefits: {
        type: String,
        required: true
    },
    trainer_name: {
        type: String,
        ref: 'TrainerSchema',
        required: true
    }
})


const Course = new mongoose.model("Course", courseSchema )

module.exports = Course;
