const express = require('express')
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const exApp = express()
const Student = require('./models/student')

const uri = 'mongodb+srv://<USER>:<PASS>@mean-cluster-02u1x.mongodb.net/marwadi?retryWrites=true&w=majority'

mongoose
  .connect(
    uri
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
// create application/json parser
var jsonParser = bodyParser.json()

// Middleware
exApp.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*")
  next();
})

exApp.post('/api/addStudent', jsonParser, (req, res) => {
  const std = new Student({
    name : req.body.name,
    branch : req.body.branch
  })
 
  console.log('Saving...')
  
  std.save().then(createdStudent => {
    console.log('Saved successfully... : ' + JSON.stringify(createdStudent))
      res.status(201).json({
        message: "Student added successfully",
        studentId: createdStudent._id
      });
    });
  
  console.log('Code running...')
  
})

exApp.get('/api/listStudents', (req, res) => {
  Student.find().then(students => {
    res.status(200).json(students);
  })
})

// Update & Delete

exApp.get('/api/student', (req, res) => {
    students = [
      {id: "1", name:"Bhaumik", branch: "ICT"},
      {id: "2", name:"Rutvik", branch: "ICT"},
      {id: "3", name:"Nipun", branch: "AWS"},
    ];
    res.status(200).send(students);
})

exApp.get('/api/faculty', (req, res) => {
  faculties = [
    {id: "1", name:"CDP Sir", branch: "ICT"},
    {id: "2", name:"Zala Sir", branch: "ICT"},
    {id: "3", name:"Kartik Sir", branch: "ICT"},
  ];
  res.status(200).send(faculties);
})

exApp.get('/api/student/:id', (req, res) => {
  students = [
    {id: "1", name:"Bhaumik", branch: "ICT"},
    {id: "2", name:"Rutvik", branch: "ICT"},
    {id: "3", name:"Nipun", branch: "AWS"},
  ];
  console.log("Passed Id is: " + req.params.id);
  const foundStudent = students.filter(student =>
    student.id == req.params.id
  );
  res.status(200).send(foundStudent);
})

exApp.post('/api/student', jsonParser, (req, res) => {
  console.log('Passed body : ' + JSON.stringify(req.body));
  res.status(200).send(req.body)
})

module.exports = exApp


