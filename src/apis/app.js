const express = require('express')

const exApp = express()

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

// exApp.get('/api/student/{:id}', (req, res) => {
//   students = [
//     {id: "1", name:"Bhaumik", branch: "ICT"},
//     {id: "2", name:"Rutvik", branch: "ICT"},
//     {id: "3", name:"Nipun", branch: "AWS"},
//   ];
//   let studentId = id
//   res.status(200).send(student[studentId]);
// })

exApp.get('/api/faculty', (req, res) => {
  faculties = [
    {id: "1", name:"CDP Sir", branch: "ICT"},
    {id: "2", name:"Zala Sir", branch: "ICT"},
    {id: "3", name:"Kartik Sir", branch: "ICT"},
  ];
  res.status(200).send(faculties);
})

module.exports = exApp


