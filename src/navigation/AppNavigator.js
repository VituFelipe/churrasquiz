import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import QuizScreen from '../screens/QuizScreen';
import ResultScreen from '../screens/ResultScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#B22222' },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: '🔥 ChurrasQuiz' }}
      />
      <Stack.Screen
        name="Quiz"
        component={QuizScreen}
        options={({ route }) => ({
          title: route.params?.useOnline
            ? '🌐 Quiz Online'
            : '💾 Quiz Local',
        })}
      />
      <Stack.Screen
        name="Result"
        component={ResultScreen}
        options={{ title: '🏁 Resultado' }}
      />
    </Stack.Navigator>
  );
}
