const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const Schedule = require("../models/scheduleSchema");
const Course = require("../models/courseSchema")
const Trainer = require("../models/trainerSchema")

=======
const ScheduleModel = require("../models/scheduleSchema");
>>>>>>> 6fb735daa0973b42ee7e7e5071aed74a5b25e880

// router.get("/", (req, res)=>{
//     console.log("connect")
// });

//Inserting a new Schedule

<<<<<<< HEAD
router.post("/schedule", async (req, res) => {
   console.log(req.body)
  const {
    course,
    trainer_name,
    date,
    starting_time,
    ending_time,
    fee_amount,
    disc_amount,
    batch_size,
  } = req.body;
  if (
    !course ||
    !trainer_name ||
    !date ||
    !starting_time ||
    !ending_time ||
    !fee_amount ||
    !disc_amount ||
    !batch_size
  ) {
    res.status(422).json("Please fill all the data")
  }
  try {
    const addSchedule = new Schedule({
      course,
      trainer_name,
      date,
      starting_time,
      ending_time,
      fee_amount,
      disc_amount,
      batch_size
    })

    await addSchedule.save();
    res.status(201).json(addSchedule)
    console.log(addSchedule)
  } catch (error) {											
    throw error
=======
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
>>>>>>> 6fb735daa0973b42ee7e7e5071aed74a5b25e880
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

//get Schedule
router.get("/getSchedule", async(req, res)=>{
  try{
    const scheduleData = await Schedule.find()
    res.status(201).json(scheduleData)
    console.log(scheduleData)
  } catch(error) {
    res.status(404).json(error)
  }
})

//get individual schedule
router.get("/getSchedule/:id", async(req,res)=>{
  try {
    // console.log(req.params)
    const {id} = req.params

    const individualSchedule= await Schedule.findById({_id:id})
    console.log(individualSchedule)
    res.status(201).json(individualSchedule)
    
  } catch (error) {
    res.status(422).json(error)
  }
})


router.patch("/updateSchedule/:id", async(req, res)=>{
  try {
    const {id} = req.params
    const updatedSchedule = await Schedule.findByIdAndUpdate(id, req.body, {
      new: true
    }) 
    console.log(updatedSchedule)
    res.status(201).json(updatedSchedule)
  } catch (error) {

    res.status(422).json(error)
  }
})

//delete Schedule
router.delete("/deleteSchedule/:id", async(req, res)=>{
  try {
    const {id} = req.params
    const deleteSchedule = await Schedule.findByIdAndDelete({_id:id}) 
    console.log(deleteSchedule)
    res.status(201).json(deleteSchedule)
  } catch (error) {

    res.status(422).json(error)
  }
})


//Inserting a new course

router.post("/course", async (req, res) => {
  console.log(req.body)
 const {
   course,
    desc,
    cat,
    int_aud,
    benefits,
    trainer_name
 } = req.body;
 if (
  !course ||
  !desc ||
  !cat ||
  !int_aud ||
  !benefits ||
  !trainer_name
 ) {
  //  alert("Please fill all the data")
   res.status(422).json("Please fill all the data")
 }
 try {
   const addCourse = new Course({
    course,
    desc,
    cat,
    int_aud,
    benefits,
    trainer_name
   })

   await addCourse.save();
   res.status(201).json(addCourse)
   console.log(addCourse)
 } catch (error) {											
   throw error
 }
});

//get course
router.get("/getCourse", async(req, res)=>{
  try{
    const courseData = await Course.find()
    res.status(201).json(courseData)
    console.log(courseData)
  } catch(error) {
    res.status(404).json(error)
  }
})


//get a specific course
router.get("/getCourse/:id", async(req,res)=>{
  try {
    console.log(req.params)
    const {id} = req.params

    const individualCourse= await Course.findById({_id:id})
    console.log(individualCourse)
    res.status(201).json(individualCourse)
    
  } catch (error) {
    res.status(422).json(error)
  }
})


//update a course
router.patch("/updateCourse/:id", async(req, res)=>{
  try {
    const {id} = req.params
    const updatedCourse = await Course.findByIdAndUpdate(id, req.body, {
      new: true
    }) 
    console.log(updatedCourse)
    res.status(201).json(updatedCourse)
  } catch (error) {

    res.status(422).json(error)
  }
})


//delete a course
router.delete("/deleteCourse/:id", async(req, res)=>{
  try {
    const {id} = req.params
    const deleteCourse = await Course.findByIdAndDelete({_id:id}) 
    console.log(deleteCourse)
    res.status(201).json(deleteCourse)
  } catch (error) {

    res.status(422).json(deleteCourse)
  }
})

//insert new trainer

router.post("/trainer", async (req, res) => {
  console.log(req.body)
 const {
  name,
  qualif,
  short_desc,
  yoe
 } = req.body;
 if (
   !name || !qualif || !short_desc || !yoe
 ) {
   res.status(422).json("Please fill all the data")
 }
 try {
   const addTrainer = new Trainer({
    name,
    qualif,
    short_desc,
    yoe
   })

   await addTrainer.save();
   res.status(201).json(addTrainer)
   console.log(addTrainer)
 } catch (error) {											
   throw error
 }
});

//get all trainers

router.get("/getTrainer", async(req, res)=>{
  try{
    const trainerData = await Trainer.find()
    res.status(201).json(trainerData)
    console.log(trainerData)
  } catch(error) {
    res.status(404).json(error)
  }
})


//Show a specific trainer
router.get("/getTrainer/:id", async(req,res)=>{
  try {
    // console.log(req.params)
    const {id} = req.params

    const individualTrainer= await Trainer.findById({_id:id})
    console.log(individualTrainer)
    res.status(201).json(individualTrainer)
    
  } catch (error) {
    res.status(422).json(error)
  }
})

//edit a trainer
router.patch("/updateTrainer/:id", async(req, res)=>{
  try {
    const {id} = req.params
    const updatedTrainer = await Trainer.findByIdAndUpdate(id, req.body, {
      new: true
    }) 
    console.log(updatedTrainer)
    res.status(201).json(updatedTrainer)
  } catch (error) {

    res.status(422).json(error)
  }
})

//delete a trainer
router.delete("/deleteTrainer/:id", async(req, res)=>{
  try {
    const {id} = req.params
    const deleteTrainer = await Trainer.findByIdAndDelete({_id:id}) 
    console.log(deleteTrainer)
    res.status(201).json(deleteTrainer)
  } catch (error) {

    res.status(422).json(deleteTrainer)
  }
})


module.exports = router;
