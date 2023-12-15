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
    name: 'usage',
    message: 'What technologies did you use for this project?'
},
{
    type: 'checkbox',
    name: 'license',
    message: 'What license is applicable to this project?',
    choices: []
},
{
    type: 'input',
    name: 'contributers',
    message: 'Please list any contributers on this project.'
},
{
    type: 'input',
    name: 'test',
    message: 'Please provide information on any tests that you may have encountered'
}










];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
