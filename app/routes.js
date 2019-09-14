const express = require('express');
const PersonController = require('./controllers/PersonController');
const StudentController = require('./controllers/StudentController');

const router = express.Router();

// Persons Routes
router.get('/persons/:id(\\d+)', PersonController.find);
router.post('/persons', PersonController.save);
router.delete('/persons/:id(\\d+)', PersonController.delete);
router.put('/persons/:id(\\d+)', PersonController.edit);
router.get('/persons/find_by_name', PersonController.findByName);
router.get('/persons/all', PersonController.listAll);

router.get('/student/find_by_namee', StudentController.findByName);
router.post('/student', StudentController.save);
router.get('/student/:id(\\d+)', StudentController.find);

module.exports = router;
