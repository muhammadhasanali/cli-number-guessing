#! /usr/bin/env node
import inquirer from 'inquirer'

const randomNumber = Math.floor(Math.random() * 6 + 1) 
const answer = await inquirer.prompt([{
    name: "userinputnumber",
    type: "number",
    message: "Please guess a number"
}
])

if(answer.userinputnumber == randomNumber){
    console.log("Congratulations you guessed the right number")
}else{
    console.log("No! You guessed a wrong number")
}

let arrayyyy = [1,2,3,4,5,6,7,8,9]

console.log(arrayyyy[2])