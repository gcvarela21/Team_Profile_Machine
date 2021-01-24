# Team_Profile_Machine

Utilizing the Node JS Inquirer, and Jest Libraries we can render Team Members information into Cards on a HTML page. Using prompted questions from terminal, the stored Data is pushed into empty arrays, and pulled into the html snippets that build the cards rendered to the page and the whole page its self from the Docutype, Head, and Body.

[Walkthrough Video](https://drive.google.com/file/d/1LYPubLn6zX_uRkoVoCX8jc5uXe7y4ex7/view)

## Table of Contents

* [Installation](#installation)
* [Summary](#summary)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

### Installation

[Node JS](https://nodejs.org/en/download/) needs to be installed on your computer.

**DEPENDANCIES:**

Step 1:
In order to install the necessary dependencies, open the console/terminal, and get inside project folder. Verify that The file folder contains the package.json file. This file declares what additional/necessary libraies are needed to run the program. Install with the following comand and move on to Step 5:

```javascript
npm install
```

Step 2:
If the package.json file isn't availbe then verify that you have Node JS on your computer by checking for the node version with the command:

```javascript
node -v
```

Step 3:
The response should be or simmilar to:

```javascript
v15.2.0
```

Step 4:
If Node.js isn't intstall on you computer visit the [node webpage]() for the program download and follow the instructions for proper installation. Once Installed and verified open your project the project folder location us the command:

```javascript
npm init -y
```

This will create the package.json file.
Check the declared required files and install the acccordingly.
For Example"

If a required library is mentions in the JS file simply us the command:

```javascript
npm install inquirer
```

Step 5:
Once your libraries are installed you can run the file with the command:

```javascript
node app.js
```

## Usage

Once the file has been run through Terminal the user will be prompted to ask some information about their Team Members to build out a web page with their profile cards. project. The initial Member Info that is asked for in for the Manager and is only called once.

```javascript
const assembleTeam = [];

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
```

The initail Prompt information is captured with in the .then() and triggers the next function that creates either and Engineer, Intern, or simply generates the html document with just the managers information. Each subsiquent function ends the same way by storing the generated object of information, and pushing it into a new class and the array called assembleTeam.

```javascript
.then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        assembleTeam.push(manager);
        // return answers;
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
```

You can find my project repository [Here](https://github.com/gcvarela21/Team_Profile_Machine/)

### License

This project is licensed under:
MIT

### Contributing

There are no contributions at this time

### Tests

In order to test open the console and run the following:

```javascript
npm run test
```

### Questions

If you have any questions contact me on [GitHub](https://github.com/gcvarela21) or contact:
Gloria Varela at varela_gloria@yahoo.com