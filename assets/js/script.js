Survey
    .StylesManager
    .applyTheme("orange");

var json = {
    title: "Simple coding quiz",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 15,
    maxTimeToFinish: 75,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "You are about to start a simple coding quiz. <br/>You have 15 seconds for every question and 75 seconds to answer all five.<br/>Please click on <b>'Start Quiz'</b> button when you are ready to begin."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "codingtypes",
                    title: "What is NOT a commonly used data type?",
                    choices: [
                        "Strings", "Booleans", "Alerts", "Numbers"
                    ],
                    correctAnswer: "Alerts"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "if/then",
                    title: "The condition in an if/else statement is wrapped in a?",
                    choicesOrder: "random",
                    choices: [
                        "quotes", "curly brackets", "parentheses", "square brackets"
                    ],
                    correctAnswer: "curly brackets"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "arrays",
                    title: "Arrays in javascript can be used to store what?",
                    choicesOrder: "random",
                    choices: [
                        "numbers and strings", "other arrays", "booleans", "all of the above"
                    ],
                    correctAnswer: "all of the above"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "debug",
                    title: "A great tool during development and debugging for printing code to the debugger is?",
                    choicesOrder: "random",
                    choices: [
                        "console.log", "JavaScript", "Terminal/Bash", "for loops"
                    ],
                    correctAnswer: "console.log"
                }
            ]
        }, {
            maxTimeToFinish: 15,
            questions: [
                {
                    type: "radiogroup",
                    name: "strings",
                    title: "String values must be inclosed in what to be assigned a variable",
                    choicesOrder: "random",
                    choices: [
                        "commas", "curly brackets", "parentheses", "quotes"
                    ],
                    correctAnswer: "quotes"
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Thanks for taking this simple quiz, reload the page to try again!"
    });

$("#surveyElement").Survey({model: survey});