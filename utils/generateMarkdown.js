//  Created a function that returns a license badge based on which license is passed in
  function renderLicenseBadge(license) {
  if (license !== "none") {
    return `[![Github license](https://img.shields.io/badge/license-${license}-blue.svg)]`;
  }
  return "";
}
  //  Created a function that returns the license link

function renderLicenseLink(license) {
  if (license!== "none") {
    return `(https://opensource.org/licenses/${license})`
  }
  return "";
 }

//  Created a function that returns the license section of README

function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`
 }

//  Created a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseSection(data.license)}
## Description
-  ${data.description}
## Live URL for Deployed Application
-  ${data.link}
## ScreenShot
-  ![alt-text](${data.screenshot})
##  Table of Contents
* [Installation](#installation)
* [Contributors](#contributors)
* [License](#license)
* [Testing](#testing)
* [Questions](#questions)
## Languages & Technologies
-  ${data.usage}
##  License
-  ${data.license}
## Contributors
-  ${data.contributors}
## Testing
-  ${data.test}  
##  Questions
-  You can reach me via GitHub: ${data.creator}
-  You can reach me via email at: ${data.email}
`;
}

module.exports = generateMarkdown;
