var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TrainerSchema = new Schema(
  {
    full_name: {type: String, required: true, maxLength: 100},
    qualification: {type: String, required: true, maxLength: 100},
    trainer_details: {type: String, required: true, maxLength: 300},
    y_o_e: {type: String, required: true, maxLength: 100},
    
    
  }
);


//Export model
module.exports = mongoose.model('Trainer', TrainerSchema);
