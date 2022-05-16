const express = require("express");
const router = express.Router();
const Schedule = require("../models/scheduleSchema");

// router.get("/", (req, res)=>{
//     console.log("connect")
// });

//Inserting a new Schedule

router.post("/schedule", async (req, res) => {
   console.log(req.body)
  const {
    course,
    Trainer_name,
    date,
    starting_time,
    ending_time,
    fee_amount,
    disc_amount,
    batch_size,
  } = req.body;
  if (
    !course ||
    !Trainer_name ||
    !date ||
    !starting_time ||
    !ending_time ||
    !fee_amount ||
    !disc_amount ||
    !batch_size
  ) {
    res.status(422).json("Please fill all the data");
  }
  try {
    const addSchedule = new Schedule({
      course,
      Trainer_name,
      date,
      starting_time,
      ending_time,
      fee_amount,
      disc_amount,
      batch_size,
    })

    await addSchedule.save();
    res.status(201).json(addSchedule)
    console.log(addSchedule)
  } catch (error) {											
    throw error
  }
});

module.exports = router;
