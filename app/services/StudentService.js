const StudentService = module.exports;
const StudentRepository = require('../repositories/StudentRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

StudentService.findByName = (faculty, programm, semester) => {
  console.log('findByName student');

  return StudentRepository.findByName(faculty, programm, semester);
};

StudentService.create = async (student) => {
  console.log('creating person');

  const personToValidate = await this.find(student.id);
  console.log(personToValidate);
  if (personToValidate) throw ErrorHandler.BaseError('person already exists', 409);

  return StudentRepository.create(student);
};

StudentService.findByListId = async (listId) => {
  console.log('findByListId student');

  return StudentRepository.findByListId(listId);
};
