const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const writeFileAsync = util.promisify(fs.writeFile);

const assembleTeam = [];
const roles = [];

// initual function ran only once because there is only one manager
const addManager = async function() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Team Manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the Team Manager's ID Number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Team Manager's email address?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the Team Manager's office phone number?"
        },
        {
            type: "list",
            name: "addTeamMember",
            message: "Would you like to add any more Members to your Team?",
            choices: ['Engineer', 'Intern', 'No more Team Members to add.']
        }
    ])
    .then(answers => {
        // console.log(answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber, answers.addTeamMember, "Manager");
        assembleTeam.push(manager);
        switch(answers.addTeamMember){
            case 'Engineer':
                roles.push("Manager");
                addEngineer();
                break;
            case 'Intern':
                roles.push("Manager");
                addIntern();
                break;
            default:             
                roles.push("Manager");
                generateTeam();
        };
    }); 
        
};

const addEngineer = async function() {
    const answers = await inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the engineer's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the engineer's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the engineer's GitHub account Username?",
            name: "github"
        },
        {
            type: "list",
            name: "addTeamMember",
            message: "Would you like to add any more Members to your Team?",
            choices: ['Engineer', 'Intern', 'No more Team Members to add.']
        }
    ])
    .then(answers => {
        // console.log(answers);
        const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github, answers.addTeamMember, "Engineer");
        assembleTeam.push(engineer);
        switch(answers.addTeamMember){
            case 'Engineer':
                addEngineer();
                break;

            case 'Intern':
                addIntern();

                break;
            default:
                roles.push("Engineer");
                generateTeam();
        };
      
    });
};

const addIntern = async function() {
    const answers = await inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the intern's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the intern's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What school is the intern from?",
            name: "school"
        },
        {
            type: "list",
            name: "addTeamMember",
            message: "Would you like to add any more Members to your Team?",
            choices: ['Engineer', 'Intern', 'No more Team Members to add.']
        }
    ])
    .then(answers => {
        // console.log(answers);
        const intern = new Intern (answers.name, answers.id, answers.email, answers.school, answers.addTeamMember, "Intern");
        assembleTeam.push(intern);
        switch(answers.addTeamMember){
            case 'Engineer':               
                addEngineer();
                break;

            case 'Intern':                
                addIntern();
                break;

            default:                
                generateTeam();
        };
    });
};

 function generateTeam() {
    const avengersAssemble = render(assembleTeam);
    writeFileAsync(outputPath, avengersAssemble);
    console.log(assembleTeam);
    console.log("team.html has been generated in folder named: output");
 }

async function init() {
        
    try {
        await addManager();     
        
       
    } catch (err) {
        console.log(err);
    }
};

init();




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
