# ChurrasQuiz

**Quiz + Planejador de Churrasco**  
React Native (Expo) + JSON Server (10.000 perguntas)

## Integrantes
- [Seu Nome]
- [Nome 2]
- [Nome 3]

## Objetivo
Testar conhecimentos de churrasco e gerar sugestão completa de carnes e bebidas.

## API
- **JSON Server** (localhost:3000)
- `GET /questions?difficulty=easy&_limit=10`

## Como rodar
```bash
git clone https://github.com/SEU_USUARIO/churrasquiz.git
cd churrasquiz
npm install

# 1) Gerar 10.000 perguntas
node generate-questions.js

# 2) Iniciar servidor
npx json-server db.json --port 3000

# 3) Abrir outro terminal
npm start
```