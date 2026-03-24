const express = require("express");
const router = express.Router();
const Student = require("../models/student")


router.get("/",async(req,res)=>{
    try{
        const student = await Student.find();
        res.json(student);
   } catch(error){
    res.ststus(500).send("server is not runing at the moment")
   }
})

router.post("/",async(req,res) => {
    const {name,age,course} = req.body;
    try {
        const newStudent = new Student({
            name,
            age,
            course
        });
        const Student = await newStudent.save();
        res.json(student)
    } catch(error){
        res.status(500).send("server error")
    }
})
module.exports = router;