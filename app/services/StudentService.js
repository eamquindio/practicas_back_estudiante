const StudentService = module.exports;
const StudentRepository = require('../repositories/StudentRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

StudentService.findByName = (faculty, programm, semester) => {
  console.log('findByName student');

  return StudentRepository.findByName(faculty, programm, semester);
};

StudentService.create = async (student) => {
  console.log('creating student');

  const studentToValidate = await this.find(student.id);
  console.log(studentToValidate);
  if (studentToValidate) throw ErrorHandler.BaseError('student already exists', 409);

  return StudentRepository.create(student);
};

StudentRepository.find = (student) => {
  console.log('find student');

  return StudentRepository.find(student);
};

StudentService.findByListId = async (listId) => {
  console.log('findByListId student');

  return StudentRepository.findByListId(listId);
};

StudentService.findAll = async () => {
  console.log('find all student');

  return StudentRepository.findAll();
};
