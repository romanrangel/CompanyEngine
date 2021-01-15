const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const application = (inquirer.prompt([
    {
        type: "choices",
        message: "What is the team members role?",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        type: "input",
        message: "What is the team members name?",
        name: "name"
    },
    {
        type: "input",
        message: "Enter the team members ID",
        name: "id"
    },
    {
        type: "input",
        message: "Enter the team members email",
        name: "email"
    }, {
        type: "choices",
        message: "Would you like to add another team member?",
        name: "restart",
        choices: ["Yes", "No"]
    }
]).then(data => {
    fs.writeFile(`team.html`, generateMarkdown(data), err => err ? console.error(err) : console.log('Success!'));
    if (data.role === "Manager") {
        inquirer.prompt([{
                type: "input",
                message: "What is your office number?",
                name: "office"
            },]).then(managerData => { // build manager object
            const manager = new Manager(`${
                this.name
            }, ${
                this.id
            }, ${
                this.email
            }, ${
                this.officeNumber
            }`)
        })
    }
    if (data.role === "Intern") {
        inquirer.prompt([{
                type: "input",
                message: "What school are you in?",
                name: "school"
            },]).then(internData => { // build data object
            const intern = new Intern(`${
                this.name
            }, ${
                this.id
            }, ${
                this.email
            }, ${
                this.school
            }`)
        })
    }
    if (data.role === "Engineer") {
        inquirer.prompt([{
                type: "input",
                message: "What is your github username?",
                name: "github"
            },]).then(engineerData => { // build manager object
            const engineer = new Engineer(`${
                this.name
            }, ${
                this.id
            }, ${
                this.email
            }, ${
                this.github
            }`)
        })
    }
    if (data.restart === "Yes") {
        application();
    } else 
        (data.restart === "No") { // export information into cards
        }

}).catch(err => {
    console.log(err);
}))

const inquirer = require("inquirer");
const fs = require("fs");
inquirer 
.prompt ([
    {
        type: "input",
        message: "What is your name",
        name: "name"
    },
    {
        type: "input",
        message: "Where are you from",
        name: "location"
    },
    {
        type: "input",
        message: "Tell us about yourself",
        name: "bio"
    },
    {
        type: "input",
        message: "Enter your LinkedIn username",
        name: "linkedin"
    },
    {
        type: "input",
        message: "Enter your GitHub username",
        name: "github"
    }
]) .then ( data => {
    fs.writeFile('user.html', user(data), (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}) .catch( err => {
    console.log(err);
});
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
