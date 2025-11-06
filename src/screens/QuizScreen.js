import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';
import axios from 'axios';
import QuestionCard from '../components/QuestionCard';

const QuizScreen = ({ route, navigation }) => {
  const { difficulty, useOnline } = route.params;

  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState('');

  const LOCAL_URL =
    Platform.OS === 'android'
      ? 'http://10.0.2.2:3000/questions'
      : 'http://192.168.15.11:3000/questions';

  const loadQuestions = async () => {
    setLoading(true);

    try {
      if (useOnline) {
        const res = await axios.get(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`);

        const formatted = res.data.results.map((q, index) => ({
          id: index + 1,
          question: q.question,
          correct_answer: q.correct_answer,
          incorrect_answers: q.incorrect_answers
        }));

        setQuestions(formatted);
        setSource('🌐 Online (Open Trivia DB)');
      } else {
        const res = await axios.get(`${LOCAL_URL}?difficulty=${difficulty}&_limit=10`);
        setQuestions(res.data);
        setSource('💾 Local (JSON Server)');
      }
    } catch (err) {
      setSource('Erro');
    }

    setLoading(false);
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  const handleAnswer = (selected) => {
    const correct = questions[current].correct_answer;
    const isCorrect = selected === correct;

    if (isCorrect) setScore(prev => prev + 1);

    if (current < questions.length - 1) {
      setCurrent(prev => prev + 1);
    } else {
      navigation.replace('Result', { score, total: questions.length });
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#FF4500" />
        <Text>Carregando perguntas...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.source}>{source}</Text>
      <Text style={styles.progress}>
        Pergunta {current + 1} / {questions.length}
      </Text>

      {questions.length > 0 && (
        <QuestionCard question={questions[current]} onAnswer={handleAnswer} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFF8DC' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  progress: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  source: { textAlign: 'center', color: '#444', marginBottom: 10, fontSize: 14 },
});

export default QuizScreen;
