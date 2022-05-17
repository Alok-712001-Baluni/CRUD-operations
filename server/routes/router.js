const express = require("express");
const router = express.Router();
const ScheduleModel = require("../models/scheduleSchema");

// router.get("/", (req, res)=>{
//     console.log("connect")
// });

//Inserting a new Schedule

router.post('/schedule', async (req, res) => {
  const data = new ScheduleModel({
      course: req.body.course,
      trainer_name: req.body.trainer_name,
      date: req.body.date,
      starting_time: req.body.starting_time,
      ending_time: req.body.ending_time,
      fee_amount: req.body.fee_amount,
      disc_amount: req.body.disc_amount,
      batch_size: req.body.batch_size,
  })
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
})

//get all
router.get('/getAll', async(req, res) => {
    try{
        const data = await ScheduleModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})



//delete by id
router.delete('/delete/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const data = await ScheduleModel.findByIdAndDelete(id)
        res.send(`Training with ID: ${data._id} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;
