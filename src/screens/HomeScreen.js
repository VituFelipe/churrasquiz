import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [difficulty, setDifficulty] = useState('easy');
  const [useOnline, setUseOnline] = useState(true);

  const startQuiz = () => {
    navigation.navigate('Quiz', { difficulty, useOnline });
  };

  return (
    <ImageBackground
      source={require('../../assets/fundotela.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>🔥 ChurrasQuiz 🍖</Text>
        <Text style={styles.subtitle}>Mostre que você entende de churrasco!</Text>

        <View style={styles.section}>
          <Text style={styles.label}>Escolha a dificuldade:</Text>
          <View style={styles.difficultyContainer}>
            {['easy', 'medium', 'hard'].map((level) => (
              <TouchableOpacity
                key={level}
                style={[
                  styles.difficultyButton,
                  difficulty === level && styles.selected,
                ]}
                onPress={() => setDifficulty(level)}
              >
                <Text
                  style={[
                    styles.difficultyText,
                    difficulty === level && styles.selectedText,
                  ]}
                >
                  {level.toUpperCase()}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.label}>
            {useOnline ? '🌐 Modo Online (Open Trivia DB)' : '💾 Modo Local (JSON Server)'}
          </Text>
          <Switch
            value={useOnline}
            onValueChange={setUseOnline}
            trackColor={{ false: '#FF6347', true: '#32CD32' }}
            thumbColor="#fff"
          />
        </View>

        <TouchableOpacity style={styles.startButton} onPress={startQuiz}>
          <Text style={styles.startText}>🎯 Iniciar Quiz</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, width: '100%', height: '100%' },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 30,
    borderRadius: 20,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { fontSize: 32, color: '#FFD700', fontWeight: 'bold', textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#fff', marginBottom: 20, textAlign: 'center' },
  section: { marginBottom: 20, alignItems: 'center' },
  label: { fontSize: 16, color: '#fff', marginBottom: 10, fontWeight: '600' },
  difficultyContainer: { flexDirection: 'row', justifyContent: 'center' },
  difficultyButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  selected: { backgroundColor: '#FFD700' },
  difficultyText: { color: '#333', fontWeight: 'bold' },
  selectedText: { color: '#000' },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  startButton: {
    backgroundColor: '#FF4500',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  startText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
});

export default HomeScreen;
