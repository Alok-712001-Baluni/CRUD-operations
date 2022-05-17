var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TrainingSchema = new Schema(
  {
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true }, //reference to the associated course
    trainer_name: { type: Schema.Types.ObjectId, ref: 'Trainer', required: true }, //reference to the assigned trainer
    status: {type: String, required: true, enum: ['Completed', 'Ongoing'], default: 'Ongoing'},
    start_time: {type: Date, default: Date.now},  
    end_time: {type: Date, default: Date.now}, 
    location: {type: String, required: true, maxlength:100},
    fee_amount: {type: String, required: true, maxlength:100},
    disc_amount: {type: String, required: true, maxlength:100},
    batch_size: {type: String, required: true, maxlength:100},
 
  }
);


//Export model
module.exports = mongoose.model('Training', TrainingSchema);
