const Question = require('../models/Question');
const Result = require('../models/Result');

exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.aggregate([{ $sample: { size: 5 } }]);
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.submitExam = async (req, res) => {
  const { answers } = req.body;
  try {
    const questions = await Question.find({ _id: { $in: Object.keys(answers) } });
    let score = 0;
    questions.forEach((q) => {
      if (answers[q._id] === q.correctAnswer) score++;
    });

    const result = new Result({
      userId: req.user.userId,
      answers,
      score,
      total: questions.length,
    });
    await result.save();

    res.json({ score, total: questions.length });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.seedQuestions = async (req, res) => {
  const sampleQuestions = [
    { text: 'What is 2+2?', options: ['3', '4', '5', '6'], correctAnswer: '4' },
    { text: 'Capital of France?', options: ['Paris', 'London', 'Berlin', 'Madrid'], correctAnswer: 'Paris' },
    { text: 'What is H2O?', options: ['Water', 'Oxygen', 'Hydrogen', 'Carbon'], correctAnswer: 'Water' },
    { text: 'What is 5*3?', options: ['12', '15', '18', '20'], correctAnswer: '15' },
    { text: 'Largest planet?', options: ['Earth', 'Mars', 'Jupiter', 'Venus'], correctAnswer: 'Jupiter' },
  ];
  try {
    await Question.deleteMany({});
    await Question.insertMany(sampleQuestions);
    res.json({ message: 'Questions seeded' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};