#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "Enter your pin code !!!",
        type: "number",
    }]);
if (pinAnswer.pin === myPin) {
    console.log("Correct your pin code");
    let operationAns = await inquirer.prompt([{
            name: "operation",
            message: "please select  option!",
            type: "list",
            choices: ["with Draw", "check balance"]
        }]);
    if (operationAns.operation === "with Draw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "Enter you Amount!",
                type: "number",
            }]);
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is: " + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("Your Balance is:" + myBalance);
    }
}
else {
    console.log("Incorrect pin code!!!");
}
