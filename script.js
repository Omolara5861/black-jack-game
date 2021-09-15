
let allCards = [];
let isAlive = false;
let hasBlackJack = false;
let sum = 0;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let player = {
    name: "Lara: ",
    chips: "$200"
};

playerEl.textContent = player.name + player.chips;

// 1. Create a function, getRandomCard(), that always returns the number 5
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13 ) + 1;
    // if 1     -> return 11
    if(randomNumber === 1) {
        return 11;
    }
    // if 11-13 -> return 10
    else if(randomNumber > 10) {
        return 10;
    }
    else { return randomNumber; }
}

function renderGame() {
    // if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
    cardsEl.textContent = "Cards: ";
    for(i = 0; i < allCards.length; i++) {
        cardsEl.textContent += allCards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
        if(sum < 21) {
        message = "Do you want to draw a new card? ";
        }
    // else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
        else if(sum === 21) {
        message = "Wohoo! You've got Blackjack! ";
        hasBlackJack = true;
    }
    
    // else -> "You're out of the game! 😭"
    else {
        message = "You're out of the game! ";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function startGame() {
    isAlive = true;
    // Generate two random numbers
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    allCards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    // Re-assign the cards and sum variables so that the game can start
    renderGame();
}

function newCard() {
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if( isAlive === true && hasBlackJack === false) {
        renderGame();
    }
    console.log("Drawing a new card from the deck!");
    let card = getRandomCard();
    sum += card;
    allCards.push(card);
}

