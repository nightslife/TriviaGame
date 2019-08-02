window.onload = function(){
    $('#begin').on("click",newGame)
    $('#submit').on("click",scoreGame)
    $('#playAgain').on("click",startingGame)
}

const correctAnswersArr = ["davidProwse","snake","bigToe","dreams","potatoHead"];
var intervalID;
var timer = 30;


function newGame(){
    //show questions and set radio buttons to empty
    document.getElementById("startingInfo").style.display = "none";
    document.getElementById("questionForm").style.display = "block";
    $('input').prop('checked',false);
    selectedAnswersArr = [];
    missedAnswersCount = 0;
    correctCount = 0;
    $("#timeDisplay").text(timer);


    //start timer
    intervalID = setInterval(count,1000);
}


function scoreGame(){
    clearInterval(intervalID);
    //Get selected answers
    var unanswered = 0;
    var correct = 0;
    var i=0;
    for (question of $('.question')){
        var selection = $(question).find('input:checked').attr('value');
        if(!selection) {unanswered++}
        else if (selection === correctAnswersArr[i++]) correct++;
    }
    //Hide Questions Window and display correct window
    document.getElementById("questionForm").style.display = "none";
    document.getElementById("answerForm").style.display = "block";
    //Display Correct Answers, Incorrect Answers, and Missed Answers totals
    $("#totalCorrect").text(correct)
    $("#totalWrong").text(correctAnswersArr.length-correct)
    $('#notAnswered').text(unanswered)
}

function startingGame (){
    //restart game
    timer=30
    document.getElementById("answerForm").style.display = "none";
    document.getElementById("startingInfo").style.display = "block";

}
function count(){
    timer--;
    $("#timeDisplay").text(timer)
    if(timer === 0){
        scoreGame()
    }
}