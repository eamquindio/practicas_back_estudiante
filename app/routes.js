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

router.get('/students/find_by_name', StudentController.findByName);
router.post('/students', StudentController.save);
router.get('/students/:id(\\d+)', StudentController.find);
router.post('/students/by_ids', StudentController.findByListID);
router.get('/students/all', StudentController.listAll);

module.exports = router;
