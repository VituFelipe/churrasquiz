# 🥩 ChurrasQuiz

O **ChurrasQuiz** é um aplicativo divertido desenvolvido em **React Native com Expo**, que desafia o usuário com perguntas sobre churrasco 🍖🔥.  
As perguntas são carregadas dinamicamente a partir de um **JSON Server**, simulando uma API real.

---

## 🚀 Tecnologias Utilizadas
- ⚛️ **React Native (Expo)**
- 🌐 **JSON Server**
- 💾 **Axios** (requisições HTTP)
- ⚙️ **React Navigation**
- 🎨 **CSS-in-JS / Stylesheet**

---

## 📱 Funcionalidades
- Seleção de **nível de dificuldade**
- Perguntas carregadas via API (`db.json`)
- Contagem de **pontuação em tempo real**
- Exibição de **resultado final**
- Design leve e responsivo

---

## 🧠 Estrutura do Projeto

```
churrasquiz/
├── App.js
├── screens/
│   ├── HomeScreen.js
│   ├── QuizScreen.js
│   └── ResultScreen.js
├── navigation/
│   ├── AppNavigator.js
├── components/
│   └── QuestionCard.js
├── assets/
│   └── (imagens e ícones)
├── db.json
└── README.md
```

---

## ⚙️ Instalação e Execução

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/VituFelipe/churrasquiz.git
cd churrasquiz
```

### 2️⃣ Instalar dependências
```bash
npm install
```

### 3️⃣ Iniciar o servidor (API Fake)
```bash
npx json-server --watch db.json --host 0.0.0.0 --port 3000
```

> 🧩 **Dica:** Use o seu **IP local** no lugar de `0.0.0.0` no app.  
> Exemplo: `http://192.168.0.10:3000`

### 4️⃣ Iniciar o aplicativo
```bash
npx expo start
```

Abra o **Expo Go** no seu celular e escaneie o QR Code exibido no terminal.

---

## 🔗 Endpoints (JSON Server)

| Método | Endpoint | Descrição |
|--------|-----------|------------|
| GET | `/questions` | Lista todas as perguntas |
| GET | `/questions?id=1` | Retorna uma pergunta específica |

---

## 📊 Exemplo de Estrutura `db.json`

```json
{
  "questions": [
    {
      "id": 1,
      "difficulty": "fácil",
      "question": "Qual a melhor carne para um bom churrasco?",
      "options": ["Picanha", "Frango", "Linguiça", "Peixe"],
      "answer": "Picanha"
    },
    {
      "id": 2,
      "difficulty": "médio",
      "question": "Qual o ponto ideal da picanha?",
      "options": ["Mal passada", "Ao ponto", "Bem passada", "Crua"],
      "answer": "Ao ponto"
    }
  ]
}
```

---

## 📸 Screenshots
| Tela | Preview |
|------|----------|
| Tela Inicial | *(adicione depois)* |
| Quiz | *(adicione depois)* |
| Resultado | *(adicione depois)* |

---

## 💡 Futuras Melhorias
- Integração com banco de dados real  
- Ranking de pontuações  
- Temas visuais e modo escuro  
- Efeitos sonoros e animações  

---

## 👨‍💻 Autor
**Vitu Felipe**  
💼 Desenvolvedor | F1rst (Santander Tecnologia)  
📧 [Contato via GitHub](https://github.com/VituFelipe)

---

## 🧾 Licença
Este projeto está sob a **licença MIT** — sinta-se livre para usar e modificar!
