window.onload = function(){
    $('#begin').on("click",newGame)
    $('#submit').on("click",scoreGame)
    $('#playAgain').on("click",startingGame)
}

function newGame(){
    document.getElementById("startingInfo").style.display = "none";
    document.getElementById("questionForm").style.display = "block";

}


function scoreGame(){


}

function startingGame (){

}