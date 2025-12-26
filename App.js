import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


const questions = [
  {
    question: 'What does React Native use to build UI?',
    options: ['HTML', 'Native Components', 'XML', 'CSS'],
    correctAnswer: 'Native Components',
  },
  {
    question: 'Which hook is used for state management?',
    options: ['useEffect', 'useState', 'useRef', 'useMemo'],
    correctAnswer: 'useState',
  },
  {
    question: 'Expo is mainly used for?',
    options: [
      'Database',
      'Backend',
      'Simplifying React Native development',
      'Testing only',
    ],
    correctAnswer: 'Simplifying React Native development',
  },
];


export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionPress = (selectedOption) => {
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <View style={styles.container}>
      {!showResult ? (
        <>
          <Text style={styles.questionCount}>
            Question {currentQuestionIndex + 1} / {questions.length}
          </Text>

          <Text style={styles.questionText}>
            {currentQuestion.question}
          </Text>

          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => handleOptionPress(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </>
      ) : (
        <>
          <Text style={styles.resultText}>Quiz Completed!</Text>

          <Text style={styles.scoreText}>
            Your Score: {score} / {questions.length}
          </Text>

          <TouchableOpacity
            style={styles.restartButton}
            onPress={restartQuiz}
          >
            <Text style={styles.restartText}>Restart Quiz</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
    justifyContent: 'center',
  },
  questionCount: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  questionText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    marginVertical: 8,
  },
  optionText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  resultText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 30,
  },
  restartButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
  },
  restartText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
