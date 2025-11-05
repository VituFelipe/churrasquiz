import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const startQuiz = (difficulty) => navigation.navigate('Quiz', { difficulty });

  return (
    <ImageBackground source={{ uri: 'https://i.imgur.com/9jW7y0g.jpg' }} style={styles.bg}>
      <View style={styles.container}>
        <Text style={styles.title}>ChurrasQuiz</Text>
        <Text style={styles.subtitle}>Teste seus conhecimentos de churrasco!</Text>

        <TouchableOpacity style={styles.btn} onPress={() => startQuiz('easy')}>
          <Text style={styles.btnText}>Fácil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => startQuiz('medium')}>
          <Text style={styles.btnText}>Médio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => startQuiz('hard')}>
          <Text style={styles.btnText}>Difícil</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: { flex: 1, resizeMode: 'cover' },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)' },
  title: { fontSize: 48, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  subtitle: { fontSize: 20, color: '#fff', marginBottom: 40 },
  btn: { backgroundColor: '#FF4500', padding: 15, borderRadius: 10, width: 200, alignItems: 'center', marginVertical: 10 },
  btnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default HomeScreen;