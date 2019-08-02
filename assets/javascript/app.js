window.onload = function(){
    $('#begin').on("click",newGame)
    $('#submit').on("click",scoreGame)
    $('#playAgain').on("click",startingGame)
}

const correctAnswersArr = ["davidProwse","snake","bigToe","dreams","potatoHead"];
var selectedAnswersArr = [];
const questionChoicesArr = ["darthVader","mammel","hallux","phobia","toy"];
var missedAnswersCount = 0
var correctCount = 0


function newGame(){
    //show questions and set radio buttons to empty
    document.getElementById("startingInfo").style.display = "none";
    document.getElementById("questionForm").style.display = "block";
    $('input').prop('checked',false);
    selectedAnswersArr = [];
    missedAnswersCount = 0;
    correctCount = 0;


    //start timer

    //timer reaches 0 or submit button pressed

}


function scoreGame(){
    //Get selected answers
    for (k of questionChoicesArr){
        var radioValue = $("input[name="+k+"]:checked").val()
        if(radioValue === undefined){
            missedAnswersCount++
        }else{
            selectedAnswersArr.push(radioValue)
        }
    }
    console.log(selectedAnswersArr)
    //Hide Questions Window and display correct window
    document.getElementById("questionForm").style.display = "none";
    document.getElementById("answerForm").style.display = "block";
    //Calculate Correct Answers
    for(a of selectedAnswersArr){
        if(correctAnswersArr.indexOf(a) >= 0){
            correctCount++
        }
    }
    //Display Correct Answers, Incorrect Answers, and Missed Answers totals
    $("#totalCorrect").text(correctCount)
    $("#totalWrong").text(correctAnswersArr.length-correctCount)
    $('#notAnswered').text(missedAnswersCount)
}

function startingGame (){
    //restart game
    document.getElementById("answerForm").style.display = "none";
    document.getElementById("startingInfo").style.display = "block";

}