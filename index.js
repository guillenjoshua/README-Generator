
const fs = require('fs');
const inquirer = require('inquirer');
const utils = require('utils');


const readMeQuestions = [
{
    type: 'input',
    name: 'badge',
    message: 'Insert badge ID'

},
{
    type: 'input',
    name: 'Title',
    message: 'What is the title of your project/README?'
},

{
    type: 'input',
    name: 'Description',
    message: 'Write a description'
},

{
    type: 'input',
    name: 'Installation',
    message: 'Installation Instructions: please provide step-by-step'
},

{
    type: 'input',
    name: 'Usage',
    message: 'Instructions for usage and examples.'

},

{
    type: 'checkbox',
    message: 'Select License:',
    name: 'License', 
    choices: [
        'MIT License',
        'GPL License',
        'Public Domain',
        'Apache'
    ]
},

{
    type: 'input',
    name: 'Contributing',
    message: 'What are the guidelines for contributing?'
},

{
    type: 'input',
    name: 'Tests',
    message: 'Run tests with examples'
},

{
    type: 'input',
    name: 'Authors',
    message: 'Enter Collaborators Name(s)'
},

{
    type: 'input',
    name: 'Questions',
    message: 'What is your GitHub username?'
},


{
    type: 'input',
    name: 'Questions1',
    message: 'Enter the url of your GitHub profile'
},

{
    type: 'input',
    name: 'Questions2',
    message: 'Enter your email address for questions'
}
// {
//     type: 'input',
//     name: 'Contents',
//     message: 'Write a table of contents (Must be separated by commas)'
// }

]

console.clear();


inquirer    

    .prompt(readMeQuestions).then(response => {


    // Creates the Title and the header of the README
    fs.appendFileSync('README.md', `# ${response.Title}` + '\n', function(err) {
        if (err) {
            return console.log(err)
        }
        console.log('Guuud!');
    }); 


    fs.appendFileSync('README.md', ('\n' + response.badge) + '\n', function(err) {
        if (err) {
            return console.log(err)
        }
        console.log('Guuud!');
    }); 
    

    //Creates the Descirption of the users project
    fs.appendFileSync('README.md', ('## Description' + '\n' + response.Description) + '\n', function(err) {
        if (err) {
            return console.log(err)
        }
        console.log('Guuud!');
    }); 


    //Table of Contents
    // fs.appendFileSync('README.md', ('## Table of Contents' + '\n' + '*[Installation Instructions](#installation-instructions)')); 
      



    //Creates the Installation Instructions
    fs.appendFileSync('README.md', ('## Installation Instructions' + '\n' + response.Installation) + '\n', function(err) {
        if (err) {
            return console.log(err)
        }
        console.log('Guuud!');
    }); 

    //Creates the Usage Instructions
    fs.appendFileSync('README.md', ('## Usage' + '\n' + response.Usage) + '\n', function(err) {
        if (err) {
            return console.log(err)
        }
        console.log('Guuud!');
    }); 

    //Creates the license chosen from the given options
    fs.appendFileSync('README.md', ('## License' + '\n' + response.License) + '\n', function(err) {
        if (err) {
            return console.log(err)
        }
        console.log('Guuud!');
    }); 

    //Creates rules for contribution
    fs.appendFileSync('README.md', ('## How to Contribute' + '\n' + response.Contributing) + '\n', function(err) {
        if (err) {
            return console.log(err)
        }
        console.log('Guuud!');
    });

    //Creates the Test Instructions
    fs.appendFileSync('README.md', ('## How to Run Tests' + '\n' + response.Tests) + '\n', function(err) {
        if (err) {
            return console.log(err)
        }
        console.log('Guuud!');
    });

    //Creates list of Authors of project
    fs.appendFileSync('README.md', ('## Authors' + '\n' + response.Authors) + '\n', function(err) {
        if (err) {
            return console.log(err)
        }
        console.log('Guuud!');
    });

    //Creates GitHub Username that is listed (Questions)
    fs.appendFileSync('README.md', ('### GitHub Username: ' + '\n' + response.Questions) + '\n', function(err) {
        if (err) {
            return console.log(err)
        }
        console.log('Guuud!');
    });

    //Creates name of GitHub user profile (Questions)
    fs.appendFileSync('README.md', ('### GitHub Profile: ' + '\n' + response.Questions1) + '\n', function(err) {
        if (err) {
            return console.log(err)
        }
        console.log('Guuud!');
    });

    //Creates the Email Contact (Questions)
    fs.appendFileSync('README.md', ("### Email Contact: " + "\n" + response.Questions2) + '\n', function(err) {
        if (err) {
            return console.log(err)
        }
        console.log('Guuud!');
    });

})

