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