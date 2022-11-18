// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); //file system
const generateMarkdown = require('../utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions =[
        { //project name
            type: 'input',
            name: 'title',
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
            name: 'contributionGuidelines',
            message: 'How do you contribute to this project?',
        },
        { //test instructions
            type: 'input',
            name: 'testInstructions',
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
            name: 'GithubUsername',
            message: 'What is your github username?',
        },
        { //email address
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data)
    fs.writeFileSync(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Great! Take a look at your auto-generated ReadMe!")
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
