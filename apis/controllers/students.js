const Student = require('../models/student-schema')

exports.addStudent = (req, res) => {

  console.log("UserData Object: "+ JSON.stringify(req.userData));

  const std = new Student({
    name : req.body.name,
    branch : req.body.branch,
    creator: req.userData.userId
  })

  std.save().then(createdStudent => {
      res.status(201).json({
        message: "Student added successfully",
        studentId: createdStudent._id,
        student: createdStudent
      });
    }).catch(() => {
      res.status(500).json({
        message: "Unable to save student"
      });
    });
}

exports.updateStudent = (req, res) => {
  console.log("name: " + req.body.name)
  console.log("branch: " + req.body.branch)
  const std = new Student({
    _id: req.params.id,
    name : req.body.name,
    branch : req.body.branch,
    creator: req.userData.userId
  })

  Student.updateOne({_id: req.params.id, creator: req.userData.userId}, std).then(updatedStudent => {
    console.log('Updated successfully... : ' + JSON.stringify(updatedStudent))
    if(updatedStudent.nModified > 0) {
      res.status(201).json({
        message: "Student updated successfully"
      });
    } else {
      res.status(401).json({
        message: "Not authorized to update"
      });
    }
    });
}

exports.listStudents = (req, res) => {
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
}

exports.getStudent = (req, res) => {
  Student.findOne({_id: req.params.id}).then(student => {
    res.status(200).json(student);
  })
}

exports.deleteStudent = (req, res) => {
  Student.deleteOne({_id: req.params.id, creator: req.userData.userId}).then(deletedStudent => {
    console.log("Deleted Successfully: "+ JSON.stringify(deletedStudent));
    if(deletedStudent.n > 0) {
      res.status(201).json({
        message: "Student deleted successfully",
        studentId: deletedStudent._id
      });
    } else {
      res.status(401).json({
        message: "Not authorized to delete"
      });
    }
  })
}
