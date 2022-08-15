let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById('guestScore')

let homeResult = 0
let guestResult = 0


function scoretest(){
        
    if (homeResult > guestResult){

        homeScore.style.color = "#FFF";
        guestScore.style.color = "#F94F6D"

    }else if(guestResult > homeResult){

        guestScore.style.color = "#FFF";
        homeScore.style.color = "#F94F6D";

    }else{
        homeScore.style.color = "#F94F6D";
        guestScore.style.color = "#F94F6D";
    }

}

function homeScorePlus1(){
    homeResult += 1
    homeScore.innerText = homeResult
    scoretest()
}

function homeScorePlus2(){
    homeResult += 2
    homeScore.innerText = homeResult
    scoretest()
}

function homeScorePlus3(){
    homeResult += 3
    homeScore.innerText = homeResult
    scoretest()
}

function guestScorePlus1(){
    guestResult += 1
    guestScore.innerText = guestResult
    scoretest()
}

function guestScorePlus2(){
    guestResult += 2
    guestScore.innerText = guestResult
    scoretest()
}

function guestScorePlus3(){
    guestResult += 3
    guestScore.innerText = guestResult
    scoretest()
}

function restart(){
    homeResult = 0
    guestResult = 0
    homeScore.innerText = homeResult
    guestScore.innerText = guestResult
    scoretest()
}
