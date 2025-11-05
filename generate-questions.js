const fs = require('fs');
const questions = [];

for (let i = 1; i <= 10000; i++) {
  const diff = i % 3 === 0 ? 'easy' : i % 3 === 1 ? 'medium' : 'hard';
  questions.push({
    id: i,
    difficulty: diff,
    question: `Qual o melhor acompanhamento #${i}?`,
    correct_answer: 'Farofa',
    incorrect_answers: ['Arroz', 'Salada', 'Batata frita']
  });
}

fs.writeFileSync('db.json', JSON.stringify({ questions }, null, 2));
console.log('10.000 perguntas criadas!');