var bodyParser = require('body-parser')
const express = require('express')
const Student = require('../models/student-schema')
const stdRoute = express.Router()
const authMw = require('../middleware/auth-mw')
const userController = require('../controllers/students')

// create application/json parser
var jsonParser = bodyParser.json()

stdRoute.post('/addStudent', authMw, jsonParser, userController.addStudent)

stdRoute.put('/:id', authMw, jsonParser, userController.updateStudent)

stdRoute.get('/listStudents', userController.listStudents)

stdRoute.get('/:id', authMw, userController.getStudent)

stdRoute.delete('/:id', authMw, userController.deleteStudent)


// Below method is added only for understanding purpose
// stdRoute.get('/student/:id', (req, res) => {
//   students = [
//     {id: "1", name:"Bhaumik", branch: "ICT"},
//     {id: "2", name:"Rutvik", branch: "ICT"},
//     {id: "3", name:"Nipun", branch: "AWS"},
//   ];
//   console.log("Passed Id is: " + req.params.id);
//   const foundStudent = students.filter(student =>
//     student.id == req.params.id
//   );
//   res.status(200).send(foundStudent);
// })

module.exports = stdRoute
