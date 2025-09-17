import inquirer from "inquirer"

inquirer.prompt([
    {
        type: "input",
        name: "LFT",
        message: "Type in length in feet"
    }
]).then(answers => {
    let LFT = answers.LFT;
    let LCM = LFT * 30;
    console.log(`${LFT} feet in cm is ${LCM} cm`);
})