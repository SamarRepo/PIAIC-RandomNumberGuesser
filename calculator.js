import { add, subtract, multiply, divide } from "./math_functions.js";
import inquirer from "inquirer";
let calculating = true;
while (calculating) {
    let user_input = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: "Enter first number: "
        },
        {
            type: "number",
            name: "num2",
            message: "Enter second number: "
        },
        {
            type: "list",
            name: "operator",
            message: "Which operation to perform? ",
            choices: ["Add", "Subtract", "Multiply", "Divide", "Exit"]
        }
    ]);
    if (user_input.operator == "Add") {
        console.log(add(user_input.num1, user_input.num2));
    }
    else if (user_input.operator == "Subtract") {
        console.log(subtract(user_input.num1, user_input.num2));
    }
    else if (user_input.operator == "Multiply") {
        console.log(multiply(user_input.num1, user_input.num2));
    }
    else if (user_input.operator == "Divide") {
        console.log(divide(user_input.num1, user_input.num2));
    }
    else {
        break;
    }
}
console.log("Have a good day!");
