// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter a project title:',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter a title! (Required)');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description:',
        validate: descInput => {
            if (descInput) {
              return true;
            } else {
              console.log('Please enter a description! (Required)');
              return false;
            }
        }
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
        type: 'list',
        name: 'license',
        message: 'Please choose a license:',
        choices: [
            'AGPLv3',
            'GPLv3',
            'LGPLv3',
            'MPL',
            'Apache',
            'MIT',
            'Boost',
            'Unlicense'
        ]
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
        console.log('README created!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);
        writeToFile('./dist/README.md', generate(answers));
    })
    .catch(err => {
        return console.log(err);
    });
}

// Function call to initialize app
init();