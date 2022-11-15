// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); //file system

// TODO: Create an array of questions for user input
inquirer
    .createPromptModule([
        { //project name
            type: 'input',
            name: 'project-title',
            message: 'What is the name of the project?',
        },
        { //description
            type: 'input',
            name: 'description',
            message: 'Please describe the project',
        },
        { //installation instructions
            type: 'input',
            name: 'installation',
            message: 'How do you install the project?',
        },
        { //usage
            type: 'input',
            name: 'usage',
            message: 'How do you use the project?',
        },
        { //contribution guidelines
            type: 'input',
            name: 'contribution-guidelines',
            message: 'How do you contribute to this project?',
        },
        { //test instructions
            type: 'input',
            name: 'test-instructions',
            message: 'How do you test this project?',
        },
        { //license - not finished - need to make it multiple choice
            type: 'checkbox',
            name: 'license',
            message: 'Which license best suits your project?',
            choices: ['MPL 2.0', 'GNU', 'Apache', 'MIT', 'None of the above']
        },
        { //github username
            type: 'input',
            name: 'Github-username',
            message: 'What is your github username?',
        },
        { //email address
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
