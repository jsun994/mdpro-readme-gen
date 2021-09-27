// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter a project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter any installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter any usage information:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter any contribution guidelines:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter any test instructions:'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please choose a license:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter a Github username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter a email address:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('readme created!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);
        writeToFile("./dist/README.md", generate(answers));
    });
}

// Function call to initialize app
init();