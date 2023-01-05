console.log(getLicenseBadge('MIT'));
console.log(getLicenseBadge('APACHE 2.0'));
console.log(getLicenseBadge('GPL 3.0'));
console.log(getLicenseBadge(''));
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function getLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'APACHE 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL 3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else {
    return '';
  }
}


console.log(getLicenseLink('MIT'));
console.log(getLicenseLink('APACHE 2.0'));
console.log(getLicenseLink('GPL 3.0'));
console.log(getLicenseLink(''));

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function getLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'APACHE 2.0') {
    return 'https://www.apache.org/licenses/LICENSE-2.0';
  } else if (license === 'GPL 3.0') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else {
    return '';
  }
}

console.log(getLicenseSection('MIT'));
console.log(getLicenseSection('APACHE 2.0'));
console.log(getLicenseSection('GPL 3.0'));
console.log(getLicenseSection(''));

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

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


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
