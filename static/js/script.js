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
    var humanChoice, botChoice;
    // humanChoice = yourChoice.id;
    // botChoice = 
    // results = decideWinner(humanChoice,botChoice); [0, 1] human | bot won
    // message = finalMessage(results); // "you won"
    rpsFrontEnd(yourChoice.id, botChoice, message);
}