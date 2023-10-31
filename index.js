import inquirer from "inquirer";
let question = await inquirer.prompt([
    {
        type: "number",
        name: "guess",
        message: "kindly write your guess"
    }
]);
let noguess = Math.floor(Math.random() * 10);
console.log(noguess);
const { guess } = question;
console.log(guess, "guess", noguess, "noguess");
if (guess === noguess) {
    console.log("yes you guessed it right \n you win! ");
}
else {
    console.log("better luck next time ");
}
