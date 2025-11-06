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
| GET | `/questions?difficulty=easy` | Filtra perguntas por dificuldade |


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

## 💡 Futuras Melhorias
- Integração com banco de dados real  
- Ranking de pontuações  
- Temas visuais e modo escuro  
- Efeitos sonoros e animações  

---

## 🧩 1. Versões de Dependências Compatíveis
| Pacote               | Versão Recomendada |
| -------------------- | ------------------ |
| **Node.js**          | 18.x LTS           |
| **Expo SDK**         | 54                 |
| **React**            | 19.1.0             |
| **React Native**     | 0.81.5             |
| **React Navigation** | 7.x                |
| **Axios**            | 1.13.2             |
| **JSON Server**      | 1.0.0+             |

⚠️ Caso use Node 20 ou superior, o expo-cli antigo pode não funcionar. Use sempre npx expo no lugar de expo.

## 🧰 2. Comandos Importantes

Instalar dependências com as versões certas:
```bash
npx expo install expo@~54.0.22 react@19.1.0 react-native@0.81.5
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler
```

## 🌐 3. Configuração do JSON Server

O servidor de perguntas roda localmente.
Para iniciar:

```bash
npx json-server --watch db.json --host 0.0.0.0 --port 3000
```


E no aplicativo, defina o IP da sua máquina local (o mesmo da rede Wi-Fi do celular):

```bash
const API_URL = 'http://192.168.15.xxx:3000';
```

🔍 Descubra seu IP com o comando ipconfig (Windows) ou ifconfig (Mac/Linux).

## 📱 4. Teste com Expo Go

Instale o app Expo Go no celular.

Conecte o celular e o PC na mesma rede Wi-Fi.

Rode o app com:

```bash
npx expo start
```


Leia o QR Code exibido no terminal.

⚠️ Caso o Expo Go mostre erro de SDK incompatível, use a mesma SDK 54 no projeto ("expo": "~54.0.22" no package.json).

## 💾 5. Problemas Comuns
| Erro                                                                | Causa                                 | Solução                                                                |
| ------------------------------------------------------------------- | ------------------------------------- | ---------------------------------------------------------------------- |
| `TypeError: expected dynamic type 'boolean', but had type 'string'` | Versões incompatíveis do React/Expo   | Reinstalar com `npx expo install` e limpar cache (`npx expo start -c`) |
| `Cannot find module expo`                                           | Dependência faltando                  | Rode `npm install expo`                                                |
| `Port 8081 is being used`                                           | Conflito de porta                     | Aceite mudar de porta ou use `--port 8082`                             |
| `Network Error (Axios)`                                             | IP incorreto ou JSON Server desligado | Verifique o IP e se o servidor está ativo                              |


## Modo Híbrido
- **Online**: Open Trivia DB (perguntas reais)
- **Offline**: 10.000 perguntas de churrasco BR


---

## 🧾 Licença
Este projeto está sob a **licença MIT** — sinta-se livre para usar e modificar!
