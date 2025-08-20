const express = require('express');
const router = express.Router();
const { getQuestions, submitExam, seedQuestions } = require('../controllers/examController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/questions', authenticateToken, getQuestions);
router.post('/submit', authenticateToken, submitExam);
router.post('/seed-questions', seedQuestions);

module.exports = router;