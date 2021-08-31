const Manager = require("./lib/Manager");
//const generateHTML = require('./src/generateHTML')
const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util');
const { hostname } = require("os");
let choices = []
let employeeName;
let employeeId;
let employeeRole;
let employeeEmail;
let employeeSpecial;
//const writeFileAsync = () => util.promisify(fs.writeFile);
//const employees = {manager: [], engineer: [], intern: []}
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
        name: 'employeeEmail',
    },
    {
        message:"What is the manager's office number?",
        type: 'number',
        name: 'officeNumber',
        when: (response) =>
            response.employeeRole === 'Manager'
            
        
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
if (response.employeeRole === 'Manager'){
    const newManager = new Manager(response.employeeName, response.employeeId, response.employeeEmail, "Manager", response.officeNumber, "Manager")
    choices.push(questions)
}
        
    if (response.loop === 'no'){
        //console.log(employees)
        //const html = generateHTML(employees)
        //console.log(html)
        //fs.writeFile("./dist/index.html", (questions.response), generateHTML(questions))
        //console.log(response)
        writeToFile()
      

        

    }
    else {
        init()
    }





})
}
function writeToFile(){
let path = './dist/'
let fileName = 'index.html'
let filePath = path + fileName
const htmlString = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
<div class = "text-center p-4 w-100 text-light" id = "employeebox">
    <h1>${questions.employeeName}</h1>
    <h2>${questions.employeeRole}</h2>
    <ul>
        <li>${questions.employeeId};</li>
        <li>${questions.employeeEmail}</li>
        <li>${questions.employeeSpecial}</li>
    </ul>

</div>`;

fs.writeFile(filePath, htmlString, (err) => {
    if (err) throw err;
    console.log("it worked!")
})

function writeBox(){
    
}
}

init()

