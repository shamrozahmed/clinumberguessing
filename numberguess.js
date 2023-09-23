#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let computerGeneratedNumber = Math.random() * 10 + 1;
let randomNumber = Math.round(computerGeneratedNumber);
;
;
console.log(chalk.bgMagentaBright.bold("Welcome to Number Guessing Game: Lets guess a Number in between 1 to 10 in 3 tries"));
let tries = 3;
let play = true;
while (play) {
    while (tries > 0) {
        const ask = await inquirer.prompt([
            {
                type: "number",
                name: "guessnumber",
                message: chalk.bgWhiteBright.blackBright.bold.italic("Enter Guess Number :"),
                validate: (guessnumber) => {
                    if (!guessnumber || guessnumber > 10) {
                        return "Please enter a number or instructed number:";
                    }
                    return true;
                }
            },
        ]);
        if (ask.guessnumber !== randomNumber) {
            // console.log ("Your have failed to guess the right number: Try Again")
            if (ask.guessnumber > randomNumber) {
                console.log(`Failed! Guess Number is Higher than System ${chalk.bgWhiteBright.black("Think Lower")}`);
            }
            else if (ask.guessnumber < randomNumber) {
                console.log(`Failed! Guess Number is Lower than System ${chalk.bgWhiteBright.black("Think Higher")}`);
            }
            console.log(chalk.redBright(`You have only ${tries - 1} try left`));
        }
        else {
            console.log("Congratulation! Your have succeed to guess the right number:" + chalk.bgBlueBright("Game End..."));
            tries = 0;
        }
        tries--;
    }
    const playagainask = await inquirer.prompt([
        {
            type: "confirm",
            name: "playAgain",
            message: chalk.bgWhiteBright.blackBright.bold.italic("Do you want to Play Again :")
        },
    ]);
    if (playagainask.playAgain) {
        console.log(chalk.bgMagentaBright.bold("Welcome to Number Guessing Game: Lets guess a Number in between 1 to 10 in 3 tries"));
        tries = 3;
        computerGeneratedNumber = Math.random() * 10 + 1;
        randomNumber = Math.round(computerGeneratedNumber);
    }
    else {
        console.log(chalk.bgBlueBright("Exiting Game..."));
        play = false;
    }
}
