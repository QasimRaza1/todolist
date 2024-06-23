// yourfile.mjs
import inquirer from "inquirer";
let todos = [];
let loop = true;
async function run() {
    while (loop) {
        const answers = await inquirer.prompt([
            {
                type: "input",
                name: "TODO",
                message: "What do you want to add in your todo?"
            },
            {
                type: "confirm",
                name: "addmore",
                message: "Do you want to add more todo?",
                default: false
            }
        ]);
        const { TODO, addmore } = answers;
        if (TODO.trim() !== "") {
            todos.push(TODO);
        }
        else {
            console.log("Kindly add valid input");
        }
        loop = addmore;
    }
    if (todos.length > 0) {
        console.log("Your todo List:\n");
        todos.forEach(todo => {
            console.log(todo);
        });
    }
    else {
        console.log("No todos found");
    }
    console.log(todos);
}
run();
