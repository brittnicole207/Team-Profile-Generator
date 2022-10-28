//Once index.js is initialized, it will run the application
const fs = require("fs"); 
const inquirer = require("inquirer");
const renderPage = require ("./src/page-template.js");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require ("./lib/Intern");

const teamArray =[];

//Callback function for a manager to enter their manager details
const promptManager = () => {
    return inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
        validate: nameProvided => {
            if (nameProvided) {
                return true; 
            } else {
            console.log("Please enter the manager's name.")
            return false;
        }
    }
},
{
        type: "input",
        name: "email",
        message: "Please enter the manager's email: ",
        validate: emailProvided => {
            if (emailProvided) {
                return true; 
            } else {
            console.log("Please enter the manager's email.")
            return false;
            }
        } 
    },
    {
    type: "input",
    name: "id",
    message: "Please provide the the manager's ID: ",
    validate: id => {
        if (isNaN(id)) {
        console.log("Please enter the manager's ID.");
        return false;
    } else {
    return true; 
    }
    }
    },
{
    type: "input",
    name: "officeNumber",
    message: "Please enter the office number: ",
    validate: userInput => {
       if (userInput) {
        return true;
    } else {
            console.log("Please enter the manager's office number."); 
            return false; 
            }
        }
    }
])
.then(managerInfo => {
    const {name, email, id, officeNumber} = managerInfo;
    const manager = new Manager (name, email, id, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};

// The manager will get a view on the command line for the option to add an employee. 
const promptEmployee = () => {
    console.log(`
    ==================
    Add employees
    ==================
`);

//There will be a list for the manager to select if they want to add an engineer or an intern. 
return inquirer.prompt ([
    {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: ["Engineer", "Intern"]
    },
    {
        type: "input",
        name: "name",
        message: "What is the employee's name?", 
        validate: nameEntered => {
        if (nameEntered) {
            return true; 
        } else {
        console.log("Please enter the employee's name.");
        return false;
        }
    }
},
{
        type: "input",
        name: "email", 
        message: "Please enter the employee's email: ",
        validate: emailEntered => {
        if  (emailEntered) {
            return true; 
        } else {
            console.log("Please enter the employee's email.");
        return false;
        }
    }
},
{
        type: "input",
        name: "id", 
        message: "Please provide the employee's ID: ",
        validate: id => {
            if (isNaN(id)) {
            console.log("Please enter the employee's ID."); 
            return false;
        } else {
            return true; 
        }
    }
},
{
    type: "input",
    name: "github",
    message: "Please enter the engineer's GitHub username: ", 
    when: (input) => input.role === "Engineer",
    validate: githubName => {
    if (githubName) {
        return true;
        } else {
        console.log("Please enter the engineer's GitHub username.");
        return false;
        }
    }
},
{   type: "input",
    name: "school",
    message: "Please provide the intern's school: ",
    when: (input) => input.role === "Intern",
    validate: schoolEntered => {
        if (schoolEntered) {
            return true;
        } else { 
            console.log("Please enter the intern's school.")
        }
    }
},
{
    type: "confirm",
    name: "confirmAdd",
    message: "Would you like to add another employee?",
    default: false 
    }
])
//When the manager says that they do not want to add another employee, then it will populate all the data that the Command Line requested from the manager. 
    .then(employeeData => {
        let {name, email, id, role, github, school, confirmAdd} = employeeData;
        let employee = employeeData; 

        if (role === "Engineer") {
            employee = new Engineer(name, email, id, github); 

            console.log(employee);
        }
        else if (role === "Intern") {
            employee = new Intern(name, email, id, school);

            console.log(employee);
        }
        teamArray.push(employee);

        if (confirmAdd) {
            return promptEmployee(teamArray);
        } else {
            console.log(teamArray);
            return teamArray;
        }
    })
};

//This will take the data and put it into the JS template which will populate into the HTML file. 
function writeToFile(data) {
    fs.writeFile("./dist/index.html", data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Success!');
    });
}

promptManager()
    .then(promptEmployee) 
    .then(teamArray => {
        return renderPage(teamArray);
    })
    .then(pageHTML => {
        return writeToFile(pageHTML);
    })
.catch(err => {
    console.log(err)
})
