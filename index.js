var kclass = require('./kclass')

exports.add = function (kclasses) {

  kclasses.forEeach(function (item ,index) {
    var teacherName = item.teacherName
    var students = item.students
    kclass.add(teacherName,students)
  })
}


kclass.add('stocc',['白富美','高帅'])
