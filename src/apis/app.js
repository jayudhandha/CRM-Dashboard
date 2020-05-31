const express = require('express')
var bodyParser = require('body-parser')
const exApp = express()

// create application/json parser
var jsonParser = bodyParser.json()

// Middleware
exApp.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*")
  next();
})

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


