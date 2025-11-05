import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';
import axios from 'axios';
import QuestionCard from '../components/QuestionCard';

const QuizScreen = ({ route, navigation }) => {
  const { difficulty } = route.params;
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = Platform.OS === 'android' 
    ? 'http://10.0.2.2:3000' 
    : 'http://192.168.15.11:3000';

  const loadQuestions = () => {
    setLoading(true);
    setError(null);
    axios.get(`${API_URL}/questions?difficulty=${difficulty}&_limit=10`)
      .then(res => {
        setQuestions(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log('Erro:', err.message);
        setError('Sem conexão com o servidor');
        setLoading(false);
      });
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  const handleAnswer = (selected) => {
    const isCorrect = selected === questions[current].correct_answer;
    if (isCorrect) setScore(score + 1);

    if (current < 9) {
      setCurrent(current + 1);
    } else {
      const finalScore = isCorrect ? score + 1 : score;
      navigation.replace('Result', { score: finalScore, total: 10 });
    }
  };

  if (loading) return <ActivityIndicator size="large" color="#FF4500" style={styles.center} />;
  if (error) return (
    <View style={styles.center}>
      <Text style={styles.error}>{error}</Text>
      <TouchableOpacity style={styles.retry} onPress={loadQuestions}>
        <Text style={styles.retryText}>Tentar novamente</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.progress}>Pergunta {current + 1}/10</Text>
      <QuestionCard question={questions[current]} onAnswer={handleAnswer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFF8DC' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  progress: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  error: { color: 'red', fontSize: 18, marginBottom: 20 },
  retry: { backgroundColor: '#FF4500', padding: 15, borderRadius: 10 },
  retryText: { color: '#fff', fontWeight: 'bold' },
});

export default QuizScreen;