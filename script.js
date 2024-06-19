const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: 2
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "J.K. Rowling"],
        correctAnswer: 0
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["Venus", "Mars", "Mercury", "Pluto"],
        correctAnswer: 2
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Hg"],
        correctAnswer: 0
    },
    {
        question: "Which organ in the human body is responsible for pumping blood?",
        options: ["Brain", "Liver", "Heart", "Lungs"],
        correctAnswer: 2
    },
    {
        question: "What is the process by which plants make their food?",
        options: ["Respiration", "Digestion", "Photosynthesis", "Fermentation"],
        correctAnswer: 2
    },
    {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: 1
    },
    {
        question: "What is the boiling point of water at sea level in Celsius?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        correctAnswer: 1
    },
    {
        question: "Who proposed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
        correctAnswer: 1
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        correctAnswer: 2
    },
    {
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "John Adams", "George Washington", "Abraham Lincoln"],
        correctAnswer: 2
    },
    {
        question: "In which year did World War II end?",
        options: ["1942", "1945", "1948", "1950"],
        correctAnswer: 1
    },
    {
        question: "Which ancient civilization built the pyramids?",
        options: ["Romans", "Greeks", "Egyptians", "Mayans"],
        correctAnswer: 2
    },
    {
        question: "Who was the famous nurse during the Crimean War?",
        options: ["Florence Nightingale", "Clara Barton", "Mary Seacole", "Edith Cavell"],
        correctAnswer: 0
    },
    {
        question: "What wall separated East and West Berlin during the Cold War?",
        options: ["The Berlin Wall", "The Great Wall"],
        correctAnswer: 0
    }
];
const continueBtn = document.querySelector('button:last-of-type');
const asnwerBtns = document.querySelectorAll('.asnwer-btn');
const myqesution = document.querySelector('section h2');
var currentindex = 0;
var currentscore = 0;
var currentindex = 0;
var currentscore = 0;

// for close the app
function quit() {
    close();
}
// start the quiz
function startquiz() {
    currentindex = 0;
    currentscore = 0;
    showQuestion();
}
startquiz();
function showQuestion(currentindex) {
    myqesution.innerHTML = quizQuestions[currentindex].question;
    for (let index = 0; index < asnwerBtns.length; index++) {
        asnwerBtns[index].innerHTML = quizQuestions[currentindex].options[index];
        if (quizQuestions[currentindex].correctAnswer == index) {
            asnwerBtns[index].setAttribute('correct','true');
        }
    }
}
continueBtn.addEventListener('click',function(){
    if(currentindex<quizQuestions.length){
        showQuestion(currentindex+1);
    }
    else {
        alert('game is done');
    }

})