let showAnswer = false;
let showAnswerButton = false;
let svar = "";

let jokes = []

const randJoke = () => {
    document.getElementById("svar").innerHTML = "";
    showAnswer = false;
    const rand = Math.floor(Math.random() * jokes.length);
    const joke = jokes[rand];
    svar = joke.svar;
    let blockquote = document.getElementById("joke");
    blockquote.innerHTML = joke.vits;
    if (joke.svar?.length > 0) {
        document.getElementById("answerBtn").style.display = "inline-block";
    } else {
        document.getElementById("answerBtn").style.display = "none";
    }
    document.getElementById("answerBtn").innerHTML = "Vis svar";
};

const loadJSON = () => {
    fetch('https://stalegjelsten.github.io/tilfeldig-vits/jokes.json')
        .then((response) => response.json())
        .catch((error) => console.log('Error', error))
        .then((data) => {
            jokes = data;
            randJoke()
        })
}

const visSvar = () => {
    showAnswer = !showAnswer;
    if (showAnswer) {
        document.getElementById("svar").innerHTML = svar;
        document.getElementById("answerBtn").innerHTML = "Skjul svar";
    } else {
        document.getElementById("svar").innerHTML = "";
        document.getElementById("answerBtn").innerHTML = "Vis svar";
    }
};

loadJSON()
