const questions = [
    {
        question: "Who's birthday is today?",
        answer: "Arnanda Surya Mukti",
    },
    {
        question: "Can you guess who's celebrating their birthday soon?",
        answer: "Jane Smith",
    },
];

let currentQuestion = 0;

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
        document.getElementById("result").innerText = "Congratulations, you are right. Happy birthday. I wish the world was kinder to you. I hope that you become filled with so much happiness that it heals every part of you. You deserve the happiness you dream of, you deserve healthy friendships and relationships, you deserve to heal, you deserve good things happening to you because you deserve a life you can live and feel content with. I wish you could see how kind you are and how amazing you are! When the world overwhelms you, I'll be there to listen to your fears";
    } else {
        document.getElementById("result").innerText = "You are wrong, the answer is your name";
    }
}

document.getElementById("question").innerText = questions[currentQuestion].question;