
let gameState = { position: 0, intervalId: undefined };

function updatePosition(position) {
    gameState = { position, intervalId: gameState.intervalId };
}

function updateIntervalId(intervalId) {
    gameState = { position: gameState.position, intervalId: intervalId };
}

function moveTo(position) {
    removeClass(getCurrentPawnField(), "pawn")
    addClass(getAllFields()[position], "pawn");
}

function addClass(element, className) {
    element.classList.add(className);
}

function removeClass(element, className) {
    element.classList.remove(className);
}

function getCurrentPawnField() {
    return getBoardElementBySelector(".pawn")
}

function getAllFields() {
    return getBoardElementsBySelector(".field");
}

function getBoardElementBySelector(selector) {
    return getBoard().querySelector(selector);
}

function getBoardElementsBySelector(selector) {
    return getBoard().querySelectorAll(selector);
}

function getBoard() {
    return document.querySelector(".board");
}

function getPlayButton() {
    return document.querySelector(".play");
}

function getStopButton() {
    return document.querySelector(".stop");
}

getPlayButton().addEventListener("click", () => {
    const intervalId = setInterval(() => { 
        moveTo(gameState.position);
        updatePosition((gameState.position + 4) % 16);
    }, 500);
    updateIntervalId(intervalId);
});

getStopButton().addEventListener("click", () => {
    clearInterval(gameState.intervalId);
});
