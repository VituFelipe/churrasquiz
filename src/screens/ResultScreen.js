import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const ResultScreen = ({ route, navigation }) => {
  const { score, total } = route.params;
  const [people, setPeople] = useState('5');

  const calculateBBQ = () => {
    const p = Number(people) || 1;
    const carne = (p * 0.5).toFixed(1);
    const linguica = (p * 0.2).toFixed(1);
    const cerveja = Math.round(p * 3.5);

    console.log(`🍖 Gerando churras para ${p} pessoas...`);

    Alert.alert(
      '🍺 Seu Churras!',
      `Para ${p} pessoas:\n\n🥩 Carne: ${carne} kg\n🌭 Linguiça: ${linguica} kg\n🍻 Cerveja: ${cerveja} latas`,
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parabéns!</Text>
      <Text style={styles.score}>Você acertou {score} de {total} perguntas!</Text>

      <Text style={styles.label}>Quantas pessoas vão participar?</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={people}
        onChangeText={setPeople}
      />

      <TouchableOpacity style={styles.btn} onPress={calculateBBQ}>
        <Text style={styles.btnText}>Gerar Churras</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnSecondary} onPress={() => navigation.replace('Home')}>
        <Text style={styles.btnText}>Jogar Novamente</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF8DC', padding: 20 },
  title: { fontSize: 36, fontWeight: 'bold', color: '#B22222', marginBottom: 20 },
  score: { fontSize: 22, marginBottom: 40, textAlign: 'center' },
  label: { fontSize: 18, marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', width: 100, padding: 10, borderRadius: 8, textAlign: 'center', marginBottom: 20 },
  btn: { backgroundColor: '#FF4500', padding: 15, borderRadius: 10, width: 200, alignItems: 'center', marginVertical: 10 },
  btnSecondary: { backgroundColor: '#228B22', padding: 15, borderRadius: 10, width: 200, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
});

export default ResultScreen;
