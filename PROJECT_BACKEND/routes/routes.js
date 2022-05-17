const express = require('express');
const CourseModel = require('../models/course');
//TrainerModel
const TrainerModel = require('../models/trainer');

const router = express.Router()

module.exports = router;

//Post Method
router.post('/post', async (req, res) => {
    const data = new CourseModel({
        title: req.body.title,
        summary: req.body.summary
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Trainer Post Method
router.post('/trainer-new', async (req, res) => {
    const data = new TrainerModel({
        full_name: req.body.full_name,
        qualification: req.body.qualification,
        trainer_details: req.body.trainer_details,
        y_o_e: req.body.y_o_e
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})



//Get all Method
router.get('/getAll', async(req, res) => {
    try{
        const data = await CourseModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
//Trainer Get all Method
router.get('/getTrainer', async(req, res) => {
    try{
        const data = await TrainerModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


//Get by ID Method
router.get('/getOne/:id', async(req, res) => {
    try{
        const data = await CourseModel.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
//Trainer Get by ID Method
router.get('/getOneTrainer/:id', async(req, res) => {
    try{
        const data = await TrainerModel.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


//Update by ID Method
router.patch('/update/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await CourseModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Trainer Update by ID Method
router.patch('/updateTrainer/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await TrainerModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const data = await CourseModel.findByIdAndDelete(id)
        res.send(`Course ${data.title} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Trainer Delete by ID Method
router.delete('/deleteTrainer/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const data = await TrainerModel.findByIdAndDelete(id)
        res.send(`Trainer ${data.full_name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})