let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById('guestScore')

let homeResult = 0
let guestResult = 0

function homeScorePlus1(){
    homeResult += 1
    homeScore.innerText = homeResult
}

function homeScorePlus2(){
    homeResult += 2
    homeScore.innerText = homeResult
}

function homeScorePlus3(){
    homeResult += 3
    homeScore.innerText = homeResult
}

function guestScorePlus1(){
    guestResult += 1
    guestScore.innerText = guestResult
}

function guestScorePlus2(){
    guestResult += 2
    guestScore.innerText = guestResult
}

function guestScorePlus3(){
    guestResult += 3
    guestScore.innerText = guestResult
}