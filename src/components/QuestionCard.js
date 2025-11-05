import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const shuffle = (array) => array.sort(() => Math.random() - 0.5);

const QuestionCard = ({ question, onAnswer }) => {
  // ele ta quebrando falando que ta esperando boleando e eu passo por string
  const incorrect = Array.isArray(question.incorrect_answers) ? question.incorrect_answers : [];
  
  const [options] = useState(shuffle([...incorrect, question.correct_answer]));

  return (
    <View style={styles.card}>
      <Text style={styles.question}>{question.question}</Text>
      {options.map((opt, i) => (
        <TouchableOpacity 
          key={i} 
          style={styles.option} 
          onPress={() => onAnswer(opt)}
        >
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
    marginTop: 10 
  },
  question: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 20,
    textAlign: 'center'
  },
  option: { 
    backgroundColor: '#FF6347', 
    padding: 15, 
    borderRadius: 10, 
    marginVertical: 8 
  },
  optionText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    textAlign: 'center',
    fontSize: 16
  },
});

export default QuestionCard;