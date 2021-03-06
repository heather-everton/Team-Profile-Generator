const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

// Items unique for each employee class
const employeeMarkupItems = {
  "Manager" : {
    "icon" : '<i class="fas fa-mug-hot"></i>',
    "extraTitle" : "Office Number"
  },
  "Engineer" : {
    "icon" : '<i class="fas fa-glasses"></i>',
    "extraTitle" : "GitHub"
  },
  "Intern" : {
    "icon" : '<i class="fas fa-user-graduate"></i>',
    "extraTitle" : "School"
  }
};

// There are specific rules for how to display the last employee property, especially for the Github link
const displayExtraProperty = (employee) =>{
  switch (employee.getRole()) {
    case "Manager":
      return employee.getOffice();
    case "Engineer":
      return '<a href="https://github.com/' + employee.getGithub() + '/" target="_blank" rel="noreferrer noopener">' + employee.getGithub() + '</a>';
    case "Intern":
      return employee.getSchool();
    default:
      return "";
  }
}

const generateTemplate = (team) => {
  let html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
  </head>
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 jumbotron mb-3 text-white bg-danger">
          <h1 class="text-center">My Team</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
  `;
  // Loop through employees sent to this function and display each in a Bootstrap card
  for(let i=0; i < team.length; i++){
    html += `
        <!-- Card Template -->
        <div class="card mx-3 mb-3 shadow" style="max-width: 18rem;">
          <div class="card-header text-white bg-primary">
            <h2>${team[i].getName()}</h2>
            <h3>${employeeMarkupItems[team[i].getRole()].icon} ${team[i].getRole()}</h3>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">ID: ${team[i].getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a></li>
              <li class="list-group-item">${employeeMarkupItems[team[i].getRole()].extraTitle}: ${displayExtraProperty(team[i])}</li>
            </ul>
          </div>
        </div>
        <!-- Card Template -->
        `;
  }
  html += `
      </div>
    </div>
  </body>
  </html>  
  `;

  return html;
};

module.exports = generateTemplate;