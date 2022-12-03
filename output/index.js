import inquirer from 'inquirer';
import chalk from 'chalk';
/**Score chart:
 * User guess > Computer guess : user += 2 computer += 0
 * user guess = copmuter guess : user += 5 computer += 2
 * user guess < computer guess : user+= 0 computer += 2
 */
console.clear();
console.log(chalk.yellow(`Hi`));
console.log(chalk.yellow(`Welcome to the number guessing game...`));
console.log(chalk.yellow(`Make a guess between 0 & 10`));
let user_score = 0;
let computer_score = 0;
let checkreply = true;
async function Play() {
    const answer = await inquirer.prompt([
        {
            type: "input",
            message: "Enter a number",
            name: "userguess",
            validate: (input) => {
                if (isNaN(input)) {
                    return `please enter a number`;
                }
                else {
                    return true;
                }
            }
        },
    ]);
    const guess = Number(answer.userguess);
    //console.log(`You have guessed : ${guess}`);
    const computer_guess = Math.floor(Math.random() * 10);
    if (guess === computer_guess) {
        console.log(chalk.hex('#dbff33')(`WoW!,you guessed equal to the computer`));
        user_score += 5;
        computer_score += 2;
    }
    else if (guess < computer_guess) {
        console.log(chalk.hex('9d33cf')(`You guessed lower than the computer`));
        computer_score += 2;
    }
    else if (guess > computer_guess) {
        console.log(chalk.hex('	#9F2B68')(`You guessed higher than the computer`));
        user_score += 2;
    }
    playAgain();
}
async function playAgain() {
    const reply = await inquirer.prompt([
        {
            type: 'confirm',
            message: 'Do you want to play again?',
            name: 'confirm',
        }
    ]);
    checkreply = reply.confirm;
    if (!checkreply) {
        if (user_score > computer_score) {
            console.log(chalk.green.bold(`\t\t\tCongratulation you win
                        Your scored : ${user_score} points, while 
                        the computer scored : ${computer_score} points
                                Good Bye!`));
        }
        else if (user_score < computer_score) {
            console.log(chalk.blue.bold(`\t\t\tBetter luck next time,
                        You scored : ${user_score} points while the computer
                        scored : ${computer_score} points
                                Good Bye`));
        }
        //console.log(`\t\t\t\tGoodbye!`)
    }
    else {
        Play();
    }
}
Play();
// async function startPlay(){
//  const answer = await inquirer.prompt([
//     {
//         type: "input",
//         message :'Enter a number',
//         name : 'userguess',
//         validate :(input)  => {
//             if(isNaN(input)){
//                 return 'Please enter a valid number'
//             }
//             else{
//                 return true
//             }
//         }]);
//     }
//     const guess = Number(answer.userguess)
//.then((answers) => console.log(`you heve entered : ${answers.userguess}`))
