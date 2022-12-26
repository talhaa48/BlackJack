let cards = []
let sum = 0
let message = ""
let isAlive = false
let hasBlackJack = false
let player = {
    name : "Talhaa",
    chips : 180
}
let playerEl = document.getElementById("player-el")
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
playerEl.textContent = player.name + ": $" + player.chips
function getRandomCard(){
    let randomNumber =  Math.floor(Math.random()*13)+1
    if (randomNumber>10){
        return 10
    }else if (randomNumber===1){
        return 11
    }else{
        return randomNumber
    }
   
}
function startGame(){
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard,secondCard]
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0; i<cards.length; i++)
    cardsEl.textContent += cards[i] + " "
    if (sum<=20){
        message = "Do you want a new card ?"
    }else if(sum===21){
        message = "You have the blackjack!"
        hasBlackJack = true
    }else {
        message = "You are out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum

}
function newGame(){
    if (isAlive===true && hasBlackJack===false){
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}