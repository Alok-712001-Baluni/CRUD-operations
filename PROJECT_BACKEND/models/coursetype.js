var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CourseTypeSchema = new Schema(
  {
    id: { type: Schema.Types.ObjectId, ref: 'Course', required: true }, //reference to the associated course
    c_type: {type: String, required: true, maxlength:100},
  }
);


//Export model
module.exports = mongoose.model('CourseType', CourseTypeSchema);
