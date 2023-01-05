 const inquirer = require('inquirer');


console.log("Activating README Generator")
console.log("Please answer the following questions to generate a high quality README file")

const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'What is the name of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a short description of your project:'
  },
  {
    type: 'input',
    name: 'installationInstructions',
    message: 'Enter instructions for installing your project:'
  },
  {
    type: 'input',
    name: 'usageInstructions',
    message: 'Enter instructions for using your project:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license does your project use?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0']
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'Enter the names of any contributors to your project:'
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your github username'
  },
];

function generateReadme(projectName, description, installationInstructions, usageInstructions, license, contributors, github) {
    let readme = `# ${projectName}
  
  ${description}
  
  ## Installation
  
  ${installationInstructions}
  
  ## Usage
  
  ${usageInstructions}
  
  ${getLicenseSection(license)}
  
  ## Contributors
  
  ${contributors}
  
  ## Github
  
  ${github}
`;
    return readme;
  }
  function getLicenseSection(license) {
    if (license === 'MIT') {
      return `## License
  
  This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details`;
    } else if (license === 'APACHE 2.0') {
      return `## License
  
  This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details`;
    } else if (license === 'GPL 3.0') {
      return `## License
  
  This project is licensed under the GPL 3.0 License - see the [LICENSE](LICENSE) file for details`;
    } else {
      return '';
    }
  }
  
  
  inquirer.prompt(questions).then(answers => {
    const readme = generateReadme(answers.projectName, answers.description, answers.installationInstructions, answers.usageInstructions, answers.license, answers.contributors, answers.github);
    const fs = require('fs');
    fs.writeFileSync('README.md', readme);
  });
  
    

  
      
