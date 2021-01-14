const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('questions');
const answerButtons =  document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex
const nextButton = document.getElementById('next-btn')

startButton.addEventListener('click', startGame)





function startGame() {
   startButton.classList.add('hide');
   shuffledQuestions = questions.sort(() => Math.random( ) - .5)
   currentQuestionIndex = 0;
   questionContainerElement.classList.remove('hide');
   setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion(question){
questionElement.innerText = question.question
question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtons.appendChild(button)
});
}

function resetState() {
   nextButton.classList.add('hide')
   while (answerButtons.firstChild) {
       answerButtons.removeChild
       (answerButtons.firstChild)
   } 
}
function selectAnswer(e) {
  const selectedButton = e.target 
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtons.children.forEach(button => {
      setStatusClass(button, button.dataset.correct)
  })
  )}

function setStatusClass(element) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }else {
        element.classList.add('wrong')
    }
}

function clearStatusClass() {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
        question:'what is 2 + 2?',
        answers: [
            {text: '4', correct:true},
            {text: '22', correct:false}
        ]
    }
]