const express = require("express");
const router = express.Router();
const Student = require("../models/student");

// GET all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).send("Server is not running at the moment");
  }
});

// POST new student
router.post("/", async (req, res) => {
  const { name, age, course } = req.body;

  try {
    const newStudent = new Student({
      name,
      age,
      course,
    });

    const savedStudent = await newStudent.save();

    res.status(201).json(savedStudent);
  } catch (error) {
    console.log(error); 
    res.status(500).send("Server error");
  }
});

module.exports = router;