const questionsObj = [
    {
        questionNumber: 1,
        question: 'Who invented Java Programming?',
        choices: ['Guido van Rossum','James Gosling','Dennis Ritchie','Bjarne Stroustrup'],
        answer: 1
    },
    {
        questionNumber: 2,
        question: 'Which one of the following is not a Java feature?',
        choices: ['Object-oriented','Portable','Dynamic and Extensible','Use of pointers'],
        answer: 3
    },
    {
        questionNumber: 3,
        question: 'Which of the following is not an OOPS concept in Java?',
        choices: ['Polymorphism','Inheritance','Compilation','Encapsulation'],
        answer: 2
    },
    {
        questionNumber: 4,
        question: 'Which exception is thrown when java is out of memory?',
        choices: ['MemoryError','OutOfMemoryError','MemoryOutOfBoundsException','MemoryFullException'],
        answer: 1
    },
    {
        questionNumber: 5,
        question: 'Which of the following is a superclass of every class in Java?',
        choices: ['Object class','ArrayList','Abstract class','String'],
        answer: 0
    }
];

const startButton = document.querySelector('.start-btn');
const quizBox = document.querySelector('.quiz-content');
const question = document.querySelector('h3');
const nextButton = document.querySelector('.next-btn');
const questionCounter = document.querySelector('.next-btn > h4');
const optionList = document.querySelectorAll('li');
const result = document.querySelector('.result');
const scoreCounter = document.querySelector('span');
const resultText = document.querySelector('.result > h4');

let questionIndex = 0;

function startQuiz(){
    startButton.style.display = 'none';
    quizBox.style.display = 'block';
    showQuestion(questionIndex);   
}

function showQuestion(){
    question.innerHTML = `${questionsObj[questionIndex].questionNumber}. ${questionsObj[questionIndex].question}`;
    let choicesIndex = 0;
    optionList.forEach(list => {
        list.innerHTML = `<input class="answers" type="radio" name="q${questionIndex}" id="${choicesIndex}">
        <label for="${choicesIndex}">${questionsObj[questionIndex].choices[choicesIndex]}</label>`;
        choicesIndex ++;
    })

    questionCounter.innerHTML = `${questionsObj[questionIndex].questionNumber} Out of ${questionsObj.length} questions`;
}

let userAns = [];

nextButton.addEventListener('click', e => {
   
    const answers = document.querySelectorAll('.answers');
    answers.forEach(answer => {
        if(answer.checked){
            userAns.push(answer.id);
        }
    })
    
    questionIndex++;
    if(questionIndex < questionsObj.length){
        showQuestion(questionIndex);
    }else
    {
        let answerIndex = 0;
        let score = 0;
        userAns.forEach(user => {
            if(user == questionsObj[answerIndex].answer){
                score += 20;
            }
            answerIndex++;
        })
        scoreCounter.innerHTML = `<b>${score}%</b>`;
        if(score <= 20){
            resultText.innerHTML = `"You need to work hard."`;
        }else if(score == 40){
            resultText.innerHTML = `"Dont give up, you can do better."`;
        }else if(score == 60){
            resultText.innerHTML = `"Half way there, you can do it."`;
        }else if(score == 80){
            resultText.innerHTML = `"You should be proud of yourself."`;
        }else{
            resultText.innerHTML = `"Perfect Score"`;
        }

        quizBox.style.display = 'none'
        result.style.display = 'block';
    }
})