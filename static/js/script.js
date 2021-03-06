// Challenge one 1: Age in days
function  ageInDays() {
    var birthYear = prompt("What year were you born?")
    var days = (2020 - birthYear) * 365;
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode("You are " + days + " days old")
    h1.setAttribute("id", "days")
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1)
} 

function reset() {
    document.getElementById("days").remove();
}

function generateDog() {
    var image = document.createElement('img')
    var div = document.getElementById('flex-dog-gen')
    image.src = "https://www.iluobin.com/Uploads/ueditor/php/upload/image/20190306/1551871722957742.jpg"
    div.appendChild(image)
}

function rpsGame(yourChoice) {
    console.log(yourChoice)

    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt())
    console.log('Computer choice', botChoice)

    results = decideWinner(humanChoice,botChoice)
    console.log(results)

    message = finalMessage(results); 
    console.log(message)

    rpsFrontEnd(yourChoice.id, botChoice, message); // {'message': 'You won!', 'color': 'green'}
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3)
}

function numberToChoice(number) {
    return['rock','paper','scissors'][number]
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock' : {'scissors': 1, "rock": 0.5, 'paper': 0},
        'paper' : {'rock': 1, "paper": 0.5, 'scissors': 0},
        'scissors' : {'paper': 1, "scissors": 0.5, 'rock': 0}
    }
    var yourScore = rpsDatabase[yourChoice][computerChoice]
    var computerScore = rpsDatabase[computerChoice][yourChoice]

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if(yourScore === 0) {
        return {'message': 'you lost!', 'color': 'red'};
    } else if (yourScore === 0.5) {
        return{'message': 'you tied!', ' color' : 'yellow'}
    } else {
        return{'message': 'you won!', ' color' : 'green'}
    }
}

function rpsFrontEnd (humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        "rock": document.getElementById('rock').src,
        "paper": document.getElementById('paper').src,
        "scissors": document.getElementById('scissors').src
    }

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();
    
    var humanDiv = document.createElement('div')
    var botDiv = document.createElement('div')
    var messageDiv = document.createElement('div')

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'height=150 width=150 style= 'box-shadow: 0px 10px 50px rgba(37,50,233,1)'>"
    messageDiv.innerHTML = "<h1 style'color:" + finalMessage['color'] +"; font-size:50px; padding 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'height=150 width=150 style= 'box-shadow: 0px 10px 50px rgba(243,38,24,1)'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv)
    document.getElementById('flex-box-rps-div').appendChild(messageDiv)
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++ ) {
    copyAllButtons.push(all_buttons[i].classList[1])
}

function buttonColourChange(buttonThis) {
    if (buttonThis.value === 'red') {
        buttonsRed();
    } else if (buttonThis.value === 'green') {
        buttonsGreen();
    } else if (buttonThis.value === 'reset') {
        buttonsReset();
    } else if (buttonThis.value === 'random') {
        randomColours();
    }
}

function buttonsRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-danger')
    }
}

function buttonsGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-success')
    }
}

function buttonsReset() {
    for (let i = 0; i < all_buttons.length; i++ ) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(copyAllButtons[i])
    }
}

function randomColours() {
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

    for (let i = 0; i < all_buttons.length; i++) {
        let randomNumber = Math.floor(Math.random() * 4)
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(choices[randomNumber])
    }
}

// BlackJack
let blackjackGame = {
    'you': {'scoreSpan': '#your-black-jack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-black-jack-result', 'div': '#dealer-box', 'score': 0},
    'cards': ['2','3','4','5','6','7','8','9','10','K','J','Q','A',],
    'cardsMap': {'2':2 ,'3':3 ,'4':4 ,'5':5 ,'6':6 ,'7':7 ,'8':8 ,'9':9 ,'10':10 ,'K':10 ,'J':10 ,'Q':10 ,'A': [1,11]},
}

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('static/sounds/swish.m4a')

document.querySelector("#blackjack-hit-button").addEventListener("click", blackjackHit)

document.querySelector("#blackjack-deal-button").addEventListener("click", blackjackDeal)

function blackjackHit() {
    let card = randomCard();
    console.log(card);
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU)
    console.log(YOU['score'])
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex]
}

function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
    let cardImage = document.createElement('img')
    cardImage.src = `static/images/${card}.png`
    document.querySelector(activePlayer['div']).appendChild(cardImage)
    hitSound.play();
    }
}

function blackjackDeal() {
    let yourImages = document.querySelector('#your-box').querySelectorAll('img')
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img')
    
    for (i=0; i < yourImages.length; i++) {
        yourImages[i].remove()
    }

    for (i=0; i < dealerImages.length; i++) {
        dealerImages[i].remove()
    }
}

function updateScore(card, activePlayer) {
    activePlayer['score'] += blackjackGame['cardsMap'][card];
}

function showScore(activePlayer) {
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score']
}