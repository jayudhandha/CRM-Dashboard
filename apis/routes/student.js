var bodyParser = require('body-parser')
const express = require('express')
const Student = require('../models/student-model')
const stdRoute = express.Router()

// create application/json parser
var jsonParser = bodyParser.json()


stdRoute.post('/addStudent', jsonParser, (req, res) => {
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

stdRoute.put('/:id', jsonParser, (req, res) => {
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

stdRoute.get('/listStudents', (req, res) => {
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

stdRoute.get('/:id', (req, res) => {
  Student.findOne({_id: req.params.id}).then(student => {
    res.status(200).json(student);
  })
})

stdRoute.delete('/:id', (req, res) => {
  Student.deleteOne({_id: req.params.id}).then(updatedStudent => {
    console.log(updatedStudent);
    res.status(201).json({
      message: "Student deleted successfully",
      studentId: updatedStudent._id
    });
  })
})

// Below method is added only for understanding purpose
stdRoute.get('/student/:id', (req, res) => {
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

module.exports = stdRoute
