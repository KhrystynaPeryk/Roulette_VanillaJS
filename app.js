let playAgain, userInput, random;
let range = 8;
let attempts = 1;
let totalEarned = 0;
let maxPrice = 100;
let wonTimes = 1;
let increment = 2;
let centVar = 100;
let threeVar = 3;

let doYouPlay = confirm('Do you want to play a game?');

if (!doYouPlay) {
    alert('You could have become a billionaire...');
} else {
    random = Math.floor(Math.random() * (range + 1));
    }
while (attempts <= threeVar) {
    userInput = parseInt(prompt(`Choose a roulette pocket number from 0 to ${range}
Attempts left: ${increment * increment - attempts}
Total prize: ${totalEarned}$
Possible prize on current attempt: ${maxPrice}$`));
    if (userInput !== random) {
        if (attempts === threeVar) {
            alert(`Thank you for your participation. Your prize is: ${totalEarned}$`);
            let playAgain = confirm('Would you like to play again?')
            if (playAgain) {
                attempts = 1;
                maxPrice = centVar;
                totalEarned = 0;
                continue;
            }
        }
        maxPrice = maxPrice / increment;
        if (!playAgain) {
            attempts++;
        }
    } else {
        totalEarned = totalEarned + maxPrice;
        wonTimes = wonTimes * increment;
        maxPrice = centVar;
        let playAgain = confirm(`Congratulation, you won! Your prize is: ${totalEarned}$. 
Do you want to continue?`);
		if (playAgain) {
            maxPrice = maxPrice * wonTimes;
            range = range + increment * increment;            
            random = Math.floor(Math.random() * (range + 1));
            attempts = 1;
        } else {
            alert(`Thank you for your participation. Your prize is: ${totalEarned}$`);
                break
            }
	}
}