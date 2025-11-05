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
    console.log('Carregando perguntas com dificuldade:', difficulty);
    setLoading(true);
    setError(null);

    axios.get(`${API_URL}/questions?difficulty=${difficulty}&_limit=10`)
      .then(res => {
        console.log(` ${res.data.length} perguntas carregadas`);
        setQuestions(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao buscar perguntas:', err.message);
        setError('Falha na conexão com o servidor. Verifique se o JSON Server está rodando.');
        setLoading(false);
      });
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  const handleAnswer = (selected) => {
    if (!questions[current]) return;

    const correct = questions[current].correct_answer;
    const isCorrect = selected === correct;

    console.log(` Pergunta ${current + 1}: Resposta escolhida "${selected}" (${isCorrect ? 'CORRETA' : 'ERRADA'})`);

    if (isCorrect) setScore(prev => prev + 1);

    if (current < questions.length - 1) {
      setCurrent(prev => prev + 1);
    } else {
      const finalScore = isCorrect ? score + 1 : score;
      console.log(` Quiz finalizado! Pontuação: ${finalScore}/10`);
      navigation.replace('Result', { score: finalScore, total: questions.length });
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#FF4500" />
        <Text style={{ marginTop: 10 }}>Carregando perguntas...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
        <TouchableOpacity style={styles.retry} onPress={loadQuestions}>
          <Text style={styles.retryText}>🔄 Tentar novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.progress}>Pergunta {current + 1} / {questions.length}</Text>
      {questions.length > 0 && (
        <QuestionCard question={questions[current]} onAnswer={handleAnswer} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFF8DC' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  progress: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  error: { color: 'red', fontSize: 18, marginBottom: 20, textAlign: 'center' },
  retry: { backgroundColor: '#FF4500', padding: 15, borderRadius: 10 },
  retryText: { color: '#fff', fontWeight: 'bold' },
});

export default QuizScreen;
