import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

const QuestionCard = ({ question, onAnswer }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (question) {
      const shuffledOptions = shuffle([...question.incorrect_answers, question.correct_answer]);
      setOptions(shuffledOptions);
    }
  }, [question]);

  return (
    <View style={styles.card}>
      <Text style={styles.question}>{question.question}</Text>
      {options.map((opt, i) => (
        <TouchableOpacity key={i} style={styles.option} onPress={() => onAnswer(opt)}>
          <Text style={styles.optionText}>{opt}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    elevation: 5,
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
  },
  optionText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default QuestionCard;
