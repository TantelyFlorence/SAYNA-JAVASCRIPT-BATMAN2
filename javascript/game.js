const questions = [
    {
        question: "Quel est lautre nom de lHomme-Mystère?",
        answers: [
            {text: "Le Sphinx", correct: false},
            {text: "Saphir", correct: true},
            {text: "Le Joker", correct: false},
        ]
    },
    {
        question: "Quelle est l\ancienne profession  de Harley Quinn?",
        answers: [
            {text: "Infirmière", correct: false},
            {text: "Psychiatre", correct: true},
            {text: "Dentiste", correct: false},
        ]
    },
    {
        question: "Quelle est lobjet fétiche de Double Face?",
        answers: [
            {text: "Une pièce", correct: true},
            {text: "Un livre", correct: false},
            {text: "Un couteau", correct: false},
        ]
    },
    {
        question: "Qui a produit Batman en 1964?",
        answers: [
            {text: "Stanley Kubrick", correct: true},
            {text: "Andy Warhol", correct: false},
            {text: "Peter Jackson", correct: false},
        ]
    },
    {
        question: "Batman cest aussi un nom  de ville en..??",
        answers: [
            {text: "Turquie", correct: false},
            {text: "Islande", correct: true},
            {text: "Allemagne", correct: false},
        ]
    },
    {
        question: "Quel vilain apparait pour la première fois dans le Batman 232?",
        answers: [
            {text: "Le Pingouin", correct: false},
            {text: "RA's al Ghul", correct: true},
            {text: " Poison Ivy", correct: false},
        ]
    },
    {
        question: "Quelle ville Batman défend-il?",
        answers: [
            {text: "Gotham City", correct: false},
            {text: "Starling City", correct: true},
            {text: "Hell's Kitchen", correct: false},
        ]
    },
    {
        question: " Tim Burton a réalisé deux Batman, qui jouait Batman?",
        answers: [
            {text: "Georges Clooney", correct: false},
            {text: "Val Kilmer", correct: false},
            {text: "Mickael Keaton", correct: true},
        ]
    },
    {
        question: "Dans son premier Batman (1989) Jacj Nicholson jouait:",
        answers: [
            {text: "Le Pingouin", correct: true},
            {text: "LHomme Mystère", correct: false},
            {text: "Le Joker", correct: false},
        ]
    },
    {
        question: "Qui est Jonathan Crane?",
        answers: [
            {text: "L\Epouvantail", correct: true},
            {text: "Le Joker", correct: false},
            {text: "Hugo Strange", correct: false},
        ]
    },
    {
        question: "Qui est l\interprète de Catwoman dans le nouveau Batman de Matt Reeves (2022) ?",
        answers: [
            {text: "Emma Watson", correct: false},
            {text: "Gigi Hadid", correct: true},
            {text: "Lola lolani Momoa", correct: false},
            {text: "Zoe Kravitz", correct: false},
        ]
    },
    {
        question: "Quel  est le prénom des parents de jeune Bruce Wayne?",
        answers: [
            {text: "Thomas et Martha", correct: false},
            {text: "Elaine et Georges", correct: false},
            {text: "Martha et James", correct: true},
        ]
    },
    {
        question: "Qui interprète le Joker en 2008?",
        answers: [
            {text: "Heath Legder", correct: false},
            {text: "Haeth Ledger", correct: true},
            {text: "Heath Ledger", correct: false},
        ]
    },
    {
        question: "En quelle année Robin fait il sa première apparition?",
        answers: [
            {text: "1940", correct: false},
            {text: "1939", correct: true},
            {text: "1941", correct: false},
        ]
    },
    {
        question: "Qui est la fille de Batman et de Catwoman?",
        answers: [
            {text: "Oracle", correct: false},
            {text: "Huntress", correct: true},
            {text: "Back Canary", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let progression = document.getElementById('progression');
let currentQuestionIndex = 0;
let score = 0;

function changeContent(game) {
    progression.innerHTML = progress + 1;
    
}

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML ="QUESTION SUIVANTE";
    showQuestion(); 
}
function showQuestion(){
    resetState();
    let currentQuestion = questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    question;

    currentQuestion.answers.forEach( answer => {
        const button = document.createElement ("button"); 
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selctAnswer);
    }); 

}

function resetState(){
    nextButton.style.display = "none"; 
    while (answerButtons.firstChild){
        answerButtons.removeChild( answerButtons.firstChild);
    }
}

function selctAnswer(e){
    const selecteBtn = e.target;
    const isCorrect = selecteBtn.dataset.correct === "true";
    if (isCorrect){
        selecteBtn.classList.add("correct");
        score++;
    }else{
        selecteBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = "  Oula! Heureusement que le Riddler est sous les verrous... Il faut que vous vous rappassiez les films, cette fois,en enlevant peut-être le masque qu vous a bloqué la vue. Allez ,rien nest perdu ";
    nextButton.innerHTML = "recommencer le quiz";
    nextButton.style.display= "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
        if(currentQuestionIndex < questions.length){
            handleNextButton();
        }else {
            startQuiz();
        }
});

startQuiz();
