//  Included packages needed for this application
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

// Created an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?'
},
{
    type: 'input',
    name: "description",
    message: 'What is the purpose of this project?'
},
{
    type: 'input',
    name: 'screenshot',
    message: 'Please provide the relative path for the image you want to use as your screenshot.'
},
{
    type: 'input',
    name: 'usage',
    message: 'What technologies and languages did you use for this project?'
},
{
    type: 'checkbox',
    name: 'license',
    message: 'What license is applicable to this project?',
    choices: ['MIT', 'BSD', 'Copyleft', 'GPL']
},
{
    type: 'input',
    name: 'contributers',
    message: 'Please list any contributers on this project.'
},
{
    type: 'input',
    name: 'test',
    message: 'Please provide information on any tests that you may have encountered.'
},
{
    type: 'input',
    name: 'creator',
    message: 'Please enter your Github Username.'
},
{
    type: 'input',
    name: 'link',
    message: 'Please provide the live URL link to your deployed application.'
},
{
    type: 'input',
    name: 'email',
    message: 'Please enter your email address.'
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(data => {
       
        writeToFile("tutor.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();


    