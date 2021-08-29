const Manager = require("./lib/Manager");
const inquirer = require('inquirer')

const questions = [
    {
        message:"What type of Employee is this?",
        type: 'list',
        choices: ['Manager', 'Engineer', 'Intern',],
        name: 'employeeRole',
    },

    {
        message:"What is the Employee's name?",
        type: 'input',
        name: 'employeeName'
    },
    {
        message:"What is the Employee ID?",
        type: 'list',
        choices: [1, 2, 3, 4, 5],
        name: 'employeeId'
    },
    {
        message:"What is the email address of the Employee?",
        type: 'input',
        name: 'projectName',
    },
    {
        message: "Do you wish to add another employee?",
        type: 'list',
        choices: ['yes', 'no'],
        name: 'loop'
    },
    
]
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        
    if (response.loop === 'no'){
        process.exit()
    }
    else {
        init()
    }



//generateMarkdown(response)
})
}


init()

