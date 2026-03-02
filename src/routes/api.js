const express = require('express');
const router = express.Router();

const {
  getSubjects,
  getSubjectById,
  createSubject,
  editSubject,
  deleteSubjectById,
  deleteSubjects,
} = require('../controllers/subjectController');

const {
  getTasks,
  createTask,
  editTask,
  deleteTaskById,
} = require('../controllers/taskController');

//  Subjects
router.get('/subjects', getSubjects);
router.get('/subjects/:subjectId', getSubjectById);
router.post('/subjects', createSubject);
router.put('/subjects/:subjectId', editSubject);
router.delete('/subjects/all', deleteSubjects);
router.delete('/subjects/:subjectId', deleteSubjectById);

// Tasks
router.get('/tasks', getTasks);
router.post('/subjects/:subjectId/tasks', createTask);
router.put('/tasks/:taskId', editTask);
router.delete('/tasks/:taskId', deleteTaskById);

module.exports = router;
