var student = require('./student')
var teacher = require('./teacher')

teacher.add('scott')

function add(teacherName,studentName) {
  teacher.add(teacherName)
  studentName.forEach(function (item,index ) {
     student.add(item)
  })
}

exports.add = add
