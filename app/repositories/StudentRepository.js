const StudentRepository = module.exports;
const DB = require('../utils/DB');

StudentRepository.findByName = (faculty, programm, semester) =>
  DB('student').select('*')
    .where({ faculty }).orwhere({ programm })
    .orwhere({ semester });

StudentRepository.create = students => DB('student').insert(students).returning('*');

StudentRepository.find = id => DB('student').select('*').where({ id }).first();
