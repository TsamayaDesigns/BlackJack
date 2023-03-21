// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
// 2. Create a variable, sum, and set it to the sum of the two cards
const firstCard = 11;
const secondCard = 10;

let sum = firstCard + secondCard;

if (sum < 21) {
    console.log("Do you want another card? 🙂");
} else if (sum === 21) {
    console.log("You've got BLACKJACK!!! 🥳")
} else {
    console.log("You've BUSTED!!! 😭")
}
