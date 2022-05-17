var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CourseSchema = new Schema(
  {
    title: {type: String, required: true, required:true},
    summary: {type: String, required: true},
    /* type: [{type: Schema.Types.ObjectId, ref: 'CourseType'}] */
  }
);



//Export model
module.exports = mongoose.model('Course', CourseSchema);
