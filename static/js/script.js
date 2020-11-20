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
    // message = finalMessage(results); // "you won"
    // rpsFrontEnd(yourChoice.id, botChoice, message);
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