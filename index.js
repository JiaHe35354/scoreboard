let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let countHome = 0
let countGuest = 0

function homeAdd1() {
    countHome += 1;
    homeScore.textContent = countHome
}
function homeAdd2() {
    countHome += 2;
    homeScore.textContent = countHome
}
function homeAdd3() {
    countHome += 3;
    homeScore.textContent = countHome
}

function guestAdd1() {
    countGuest += 1;
    guestScore.textContent = countGuest
}
function guestAdd2() {
    countGuest += 2;
    guestScore.textContent = countGuest
}
function guestAdd3() {
    countGuest += 3;
    guestScore.textContent = countGuest
}