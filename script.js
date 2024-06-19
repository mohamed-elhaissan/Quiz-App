const quizQuestions = [
    {
        question: "What does PHP stand for?",
        options: ["Personal Home Page", "Private Home Page", "PHP: Hypertext Preprocessor", "Public Home Page"],
        correctAnswer: 2
    },
    {
        question: "How do you write 'Hello World' in PHP?",
        options: ["echo 'Hello World';", "print('Hello World');", "document.write('Hello World');", "printf('Hello World');"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a PHP super global variable?",
        options: ["$_POST", "$POST", "POST", "$_SESSION"],
        correctAnswer: 0
    },
    {
        question: "How do you create a variable in PHP?",
        options: ["var $variableName;", "int $variableName;", "$variableName;", "string $variableName;"],
        correctAnswer: 2
    },
    {
        question: "Which function is used to get the length of a string in PHP?",
        options: ["length()", "strlen()", "strlength()", "size()"],
        correctAnswer: 1
    },
    {
        question: "What is the correct way to include a file in PHP?",
        options: ["#include 'file.php';", "include 'file.php';", "require 'file.php';", "Both include and require"],
        correctAnswer: 3
    },
    {
        question: "Which of the following is used to start a session in PHP?",
        options: ["session_start();", "start_session();", "begin_session();", "session_begin();"],
        correctAnswer: 0
    },
    {
        question: "How do you define a constant in PHP?",
        options: ["const NAME = 'value';", "define('NAME', 'value');", "constant NAME = 'value';", "define NAME 'value';"],
        correctAnswer: 1
    },
    {
        question: "What is the correct way to create an array in PHP?",
        options: ["$array = 'apple', 'banana', 'cherry';", "$array = array('apple', 'banana', 'cherry');", "$array = ['apple', 'banana', 'cherry'];", "Both b and c"],
        correctAnswer: 3
    },
    {
        question: "How do you add a comment in PHP?",
        options: ["<!-- Comment -->", "// Comment", "/* Comment */", "Both b and c"],
        correctAnswer: 3
    },
    {
        question: "Which operator is used for string concatenation in PHP?",
        options: ["+", ".", ",", "&"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is used to get information sent via a POST request?",
        options: ["$_POST", "$POST", "$_REQUEST", "$POSTDATA"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is used to terminate the script execution in PHP?",
        options: ["exit()", "end()", "terminate()", "stop()"],
        correctAnswer: 0
    },
    {
        question: "What is the default file extension for PHP files?",
        options: [".html", ".xml", ".php", ".js"],
        correctAnswer: 2
    },
    {
        question: "Which function is used to get the type of a variable in PHP?",
        options: ["gettype()", "typeof()", "var_type()", "type()"],
        correctAnswer: 0
    },
    {
        question: "How do you check if a variable is set in PHP?",
        options: ["isset()", "is_set()", "isdefined()", "defined()"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a valid way to declare a PHP function?",
        options: ["function myFunction()", "def myFunction()", "create myFunction()", "fun myFunction()"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is the correct way to get the value of the 'name' attribute from an HTML form input in PHP?",
        options: ["$_GET['name']", "$_POST['name']", "$_REQUEST['name']", "All of the above"],
        correctAnswer: 3
    },
    {
        question: "Which of the following is the correct way to connect to a MySQL database in PHP?",
        options: ["mysql_connect()", "mysqli_connect()", "pdo_connect()", "Both b and c"],
        correctAnswer: 3
    }
];




const continueBtn = document.getElementById('cont');
const myqesution = document.querySelector('section h2');
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

// moving  to other question 
continueBtn.addEventListener('click',function(){
    if(currentindex<quizQuestions.length){
        currentindex++;
        showQuestion();
    }
    else {
        alert('game is done');
    }

});

const asnwerBtns = document.querySelectorAll('.asnwer-btn');
// showing question one by one and add the dataset to the correct answer
function showQuestion() {
    myqesution.innerHTML = quizQuestions[currentindex].question;
    resetBtns();
    let arrayLenght = quizQuestions[currentindex].options.length
    for (let index = 0; index < arrayLenght; index++) {
        let btn = document.createElement('button');
        btn.classList.add('asnwer-btn');
        btn.textContent = quizQuestions[currentindex].options[index];
        if (quizQuestions[currentindex].correctAnswer == index) {
            btn.setAttribute('correct','true');
        }
        // disabled the button when the user click on a button if its correct or not !
        document.querySelector('.btns').appendChild(btn);
        btn.addEventListener('click',()=>{
            if(btn.getAttribute('correct') == 'true'){
                currentscore++;
                btn.classList.add('correct');
            }
            else {
                btn.classList.add('notcorrect');
            }
            Array.from(asnwerBtns).forEach((element)=>{
                if (element.getAttribute('correct')==='true') {
                    element.classList.add('correct');
                }
                element.disabled = true;
            })
        })
        
    }

}


// when the user click on continu button here the function gonna delete the old buttons and the showquestion functon gonna create another new button
function resetBtns(){
    while (document.querySelector('.btns').firstChild) {
        document.querySelector('.btns').removeChild(document.querySelector('.btns').firstChild);
    }
}