const express = require('express')
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const exApp = express()
const Student = require('./models/student')

// Middleware
exApp.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*")
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
})

// const uri = 'mongodb+srv://<USER>:<PASS>@mean-cluster-02u1x.mongodb.net/marwadi?retryWrites=true&w=majority'

const uri = 'mongodb+srv://kod:iWWKEZEpJd674WUj@cluster0-02u1x.mongodb.net/marwadi?retryWrites=true&w=majority'

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


exApp.post('/api/addStudent', jsonParser, (req, res) => {
  console.log("******* Save student... : " + JSON.stringify(req.body));
  const std = new Student({
    name : req.body.name,
    branch : req.body.branch
  })

  std.save().then(createdStudent => {
    console.log('Saved successfully... : ' + JSON.stringify(createdStudent))
      res.status(201).json({
        message: "Student added successfully",
        studentId: createdStudent._id
      });
    });

})

exApp.get('/api/listStudents', (req, res) => {
  console.log("Get Reuqest happened...");
  Student.find().then(students => {
    res.status(200).json(students);
  })
})

// Update & Delete

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

module.exports = exApp


