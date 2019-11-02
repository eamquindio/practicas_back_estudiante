const StudentController = module.exports;
const StudentService = require('../services/StudentService');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

StudentController.findByName = async (req, res, next) => {
  try {
    const {
      query: {
        faculty,
        programm,
        semester,
      },
    } = req;
    const students = await StudentService.findByName(faculty, programm, semester);

    if (students.length === 0) return res.status(204).send(students);

    return res.send(students);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};

StudentController.save = async (req, res, next) => {
  const {
    body,
  } = req;
  try {
    await StudentService.create(body);

    return res.send();
  } catch (error) {
    console.log({
      error,
    });

    return next(error);
  }
};

StudentController.find = async (req, res, next) => {
  try {
    const {
      params: {
        id,
      },
    } = req;
    const student = await StudentService.find(id);

    if (!student) return next(new ErrorHandler.BaseError('student not exists', 404));

    return res.send(student);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};

StudentController.findByListID = async (req, res, next) => {
  const { body } = req;
  try {
    const students = await StudentService.findByListId(body.estudiante);

    if (students.length === 0) return res.status(204).send(students);

    return res.send(students);
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};

StudentController.findAll = async (req, res, next) => {
  const { body } = req;
  try {
    const students = await StudentService.findAll();

    if (students.length === 0) return res.status(204).send(students);

    return res.send(students);
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};
