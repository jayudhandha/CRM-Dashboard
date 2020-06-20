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
  const std = new Student({
    name : req.body.name,
    branch : req.body.branch
  })

  std.save().then(createdStudent => {
      res.status(201).json({
        message: "Student added successfully",
        studentId: createdStudent._id
      });
    });

})

exApp.put('/api/:id', jsonParser, (req, res) => {
  console.log("name: " + req.body.name)
  console.log("branch: " + req.body.branch)
  const std = new Student({
    _id: req.params.id,
    name : req.body.name,
    branch : req.body.branch
  })

  Student.updateOne({_id: req.params.id}, std).then(updatedStudent => {
    console.log('Updated successfully... : ' + JSON.stringify(updatedStudent))
      res.status(201).json({
        message: "Student updated successfully"
      });
    });

})

exApp.get('/api/listStudents', (req, res) => {
  console.log(req.query)
  const pageSize = +req.query.pagesize
  const pageIndex = +req.query.pageindex
  const stdQuery = Student.find()

  if(pageSize && pageIndex) {
    stdQuery
      .skip(pageSize * (pageIndex - 1))
      .limit(pageSize)
  }

  stdQuery.then(students => {
    res.status(200).json(students);
  })
})

exApp.get('/api/:id', (req, res) => {
  Student.findOne({_id: req.params.id}).then(student => {
    res.status(200).json(student);
  })
})

exApp.delete('/api/:id', (req, res) => {
  Student.deleteOne({_id: req.params.id}).then(updatedStudent => {
    console.log(updatedStudent);
    res.status(201).json({
      message: "Student deleted successfully",
      studentId: updatedStudent._id
    });
  })
})

// Below method is added only for understanding purpose
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


