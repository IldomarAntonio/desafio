let step = 0;
let choices = {};

const questions = [
    "Você quer seguir para a área de Front-End ou Back-End? (Digite 'Front-End' ou 'Back-End')",
    {
        "Front-End": "Você quer aprender React ou Vue? (Digite 'React' ou 'Vue')",
        "Back-End": "Você quer aprender C# ou Java? (Digite 'C#' ou 'Java')"
    },
    "Você quer se especializar na área escolhida ou se tornar Fullstack? (Digite 'Especializar' ou 'Fullstack')",
    "Tem mais alguma tecnologia que você gostaria de aprender? (Digite 'Sim' ou 'Não')"
];

const outputMessages = {
    "Especializar": "Ótimo! Especializar-se em sua área escolhida pode torná-lo um especialista.",
    "Fullstack": "Fantástico! Tornar-se um desenvolvedor Fullstack abrirá muitas portas.",
    "Sim": "Digite a tecnologia que você gostaria de aprender:",
    "Não": "Obrigado por jogar! Boa sorte na sua jornada de aprendizado."
};

function nextStep() {
    const answer = document.getElementById('answer').value.trim();
    document.getElementById('answer').value = '';
    
    if (step === 0) {
        if (answer.toLowerCase() === 'front-end' || answer.toLowerCase() === 'back-end') {
            choices.area = answer;
            step++;
            document.getElementById('question').innerText = questions[1][choices.area];
        } else {
            alert("Escolha inválida. Por favor, digite 'Front-End' ou 'Back-End'.");
        }
    } else if (step === 1) {
        if (choices.area.toLowerCase() === 'front-end' && (answer.toLowerCase() === 'react' || answer.toLowerCase() === 'vue')) {
            choices.technology = answer;
            step++;
            document.getElementById('question').innerText = questions[2];
        } else if (choices.area.toLowerCase() === 'back-end' && (answer.toLowerCase() === 'c#' || answer.toLowerCase() === 'java')) {
            choices.technology = answer;
            step++;
            document.getElementById('question').innerText = questions[2];
        } else {
            alert(`Escolha inválida. Por favor, digite uma das opções válidas para ${choices.area}.`);
        }
    } else if (step === 2) {
        if (answer.toLowerCase() === 'especializar' || answer.toLowerCase() === 'fullstack') {
            choices.path = answer;
            document.getElementById('output').innerText = outputMessages[answer];
            step++;
            document.getElementById('question').innerText = questions[3];
        } else {
            alert("Escolha inválida. Por favor, digite 'Especializar' ou 'Fullstack'.");
        }
    } else if (step === 3) {
        if (answer.toLowerCase() === 'sim') {
            document.getElementById('question').innerText = outputMessages['Sim'];
            step++;
        } else if (answer.toLowerCase() === 'não') {
            document.getElementById('output').innerText = outputMessages['Não'];
            document.getElementById('question-container').style.display = 'none';
        } else if (step > 3) {
            alert(`Legal! Vou anotar que você quer aprender sobre ${answer}.`);
            document.getElementById('question').innerText = questions[3];
        } else {
            alert("Escolha inválida. Por favor, digite 'Sim' ou 'Não'.");
        }
    } else if (step > 3) {
        alert(`Legal! Vou anotar que você quer aprender sobre ${answer}.`);
        document.getElementById('question').innerText = questions[3];
    }
}

document.getElementById('question').innerText = questions[0];