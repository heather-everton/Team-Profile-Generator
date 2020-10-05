//npm installs
const fs = require('fs');
const inquirer = require('inquirer');

//link to constructor functions
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//link to templates
const {writeFile, copyFile} = require('./utils/generate-site.js');

// const {generateCards, generateHTML} = require('./src/page-template.js');
const generateTemplate = require("./src/page-template.js");


const team = []




const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Employee's name:",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter the team member's name!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter their email address:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                  } else {
                    console.log("Please enter team member's email!");
                    return false;
                  }              
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter their employee ID:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                  } else {
                    console.log("Please enter team member's employee ID!");
                    return false;
                  }              
            }
        },

        {
            type: 'input',
            name: 'other',
            message: "Enter the Manager's office number:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                  } else {
                    console.log("Please enter the manager's office number");
                    return false;
                  }              
            }
        }
    ])
    .then(answers =>{
        const someManager = new Manager(answers.name, answers.email, answers.id, answers.role, answers.other);
        team.push(someManager);
        return addTeamMember(team)
    })        
}

function addTeamMember(team){
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addRole',
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "No additional Team Members"],
        },
    ])
    .then(answers => {

        if(answers.addRole === "Engineer") {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Employee's name:",
                    validate: nameInput => {
                        if (nameInput) {
                          return true;
                        } else {
                          console.log("Please enter the team member's name!");
                          return false;
                        }
                      }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter their email address:',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                          } else {
                            console.log("Please enter team member's email!");
                            return false;
                          }              
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Enter their employee ID:',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                          } else {
                            console.log("Please enter team member's employee ID!");
                            return false;
                          }              
                    }
                },
                
                {
                    type: 'input',
                    name: 'other',
                    message: "Enter the Engineer's github URL:",
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                          } else {
                            console.log("Please enter the Engineer's github URL.");
                            return false;
                          }              
                    }
                }
            ])
            .then(answers =>{
                const someEngineer = new Engineer(answers.name, answers.email, answers.id, answers.role, answers.other);
                team.push(someEngineer);
                return addTeamMember(team)
            })        
                   
        } else if (answers.addRole === "Intern"){
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Employee's name:",
                    validate: nameInput => {
                        if (nameInput) {
                          return true;
                        } else {
                          console.log("Please enter the team member's name!");
                          return false;
                        }
                      }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter their email address:',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                          } else {
                            console.log("Please enter team member's email!");
                            return false;
                          }              
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Enter their employee ID:',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                          } else {
                            console.log("Please enter team member's employee ID!");
                            return false;
                          }              
                    }
                },
        
                {
                    type: 'input',
                    name: 'other',
                    message: "Enter the Intern's School:",
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                          } else {
                            console.log("Please enter the Intern's school.");
                            return false;
                          }              
                    }
                }
            ])
            .then(answers =>{
                console.log(answers)
                const someIntern = new Intern(answers.name, answers.email, answers.id, answers.role, answers.other);
                team.push(someIntern);
                return addTeamMember(team)
            })                 
        } else {
            // console.log(team);
            return team;
        }
    })
}

promptManager()
    // .then(addTeamMember => {
    //   return team  
    // })
    .then(team => {
        console.log (team)
        // return generateCards(team)
        return generateTemplate(team)
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    }) 
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    })
  