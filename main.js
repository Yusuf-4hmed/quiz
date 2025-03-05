// questions: if the answer is correct it will have a 1 otherwise it will have a 0
const questions = [
    {
        question: "What's 9 + 10 ?",
        answers: [["19", 1], ["11", 0], ["90", 0], ["21",0]],
    },
    {
        question: "What is the 3rd planet in the Solar System?",
        answers: [["Venus", 0], ["Mars", 0], ["Earth", 1], ["Pluto", 0]]
    },
    {
        question: "Which one is even?",
        answers: [["19", 0], ["17", 0], ["15", 0], ["40", 1]]
    }
]

let currentQuestion = 0;

const question = document.getElementById("question");
    question.innerText = questions[currentQuestion].question;

const selections = document.getElementById("selections");
    const option1 = selections.children[0];
        option1.innerText = questions[currentQuestion].answers[0][0]
    const option2 = selections.children[1];
        option2.innerText = questions[currentQuestion].answers[1][0];
    const option3 = selections.children[2];
        option3.innerText = questions[currentQuestion].answers[2][0];
    const option4 = selections.children[3];
        option4.innerText = questions[currentQuestion].answers[3][0];

const updateQuestions = () => {
    if (currentQuestion < 2) {
        currentQuestion++


        question.innerText = questions[currentQuestion].question;

        option1.innerText = questions[currentQuestion].answers[0][0];
        option2.innerText = questions[currentQuestion].answers[1][0];
        option3.innerText = questions[currentQuestion].answers[2][0];
        option4.innerText = questions[currentQuestion].answers[3][0];

        option1.classList.remove("option-selected");
        option2.classList.remove("option-selected");
        option3.classList.remove("option-selected");
        option4.classList.remove("option-selected");

        checkButton.innerText = "CHECK"
        checkButton.style.backgroundColor = "var(--color-blue-300)";
        checkButton.style.boxShadow = "0px 5px 0px #0077b6"
    } else {
        selections.classList.add("hidden");
        question.innerText = `You scored ${score}/3!`
    }
    
}

option1.addEventListener("click", () => {
    option1.classList.toggle("option-selected");

    option2.classList.remove("option-selected");
    option3.classList.remove("option-selected");
    option4.classList.remove("option-selected");

    if (option1.classList.contains("option-selected")) {
        enableCheckButton()
    } else {
        disableCheckButton()
    }
    
})
option2.addEventListener("click", () => {
    option2.classList.toggle("option-selected");

    option1.classList.remove("option-selected");
    option3.classList.remove("option-selected");
    option4.classList.remove("option-selected");

    if (option2.classList.contains("option-selected")) {
        enableCheckButton()
    } else {
        disableCheckButton()
    }
})
option3.addEventListener("click", () => {
    option3.classList.toggle("option-selected");

    option2.classList.remove("option-selected");
    option1.classList.remove("option-selected");
    option4.classList.remove("option-selected");

    if (option3.classList.contains("option-selected")) {
        enableCheckButton()
    } else {
        disableCheckButton()
    }
})
option4.addEventListener("click", () => {
    option4.classList.toggle("option-selected");

    option2.classList.remove("option-selected");
    option3.classList.remove("option-selected");
    option1.classList.remove("option-selected");

    if (option4.classList.contains("option-selected")) {
        enableCheckButton()
    } else {
        disableCheckButton()
    }
})


const checkButton = document.getElementById("check-button");
const disableCheckButton = () => {
    checkButton.disabled = true;
    checkButton.style.opacity = "0.3";
    checkButton.style.pointerEvents = "none";
}
const enableCheckButton = () => {
    checkButton.disabled = false;
    checkButton.style.opacity = "1";
    checkButton.style.pointerEvents = "auto";
}
disableCheckButton()

let isAnswerRight
let score = 0;

selections.addEventListener("click", (e) => {
    if (e.target.classList.contains("option-selected")) {
        console.log(e.target.innerText);
        if (questions[currentQuestion].answers.some(item => item[0] === e.target.innerText && item[1] === 1)) {
            isAnswerRight = true;
        } else (isAnswerRight = false)
    }
})

checkButton.addEventListener("click", () => {
    if (isAnswerRight) {
        score++
        console.log("you are correct, smart human")
        checkButton.innerText = "SMART HUMAN!";
        checkButton.style.backgroundColor = "green";
        checkButton.style.boxShadow = "0px 5px 0px rgba(0, 255, 0, 0.3)";
        
    } else {
        console.log("wrong lol")
        checkButton.innerText = "WRONG LOL"
        checkButton.style.backgroundColor = "red";
        checkButton.style.boxShadow = "0px 5px 0px rgba(255, 0, 0, 0.5)";
    }
    isAnswerRight = false;
     setTimeout(updateQuestions, 1000)
     setTimeout(disableCheckButton, 1000)
})



