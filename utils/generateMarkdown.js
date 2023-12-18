// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
-  ${data.description}
## Live URL for Deployed Application
-  ${data.link}
## ScreenShot
-  ![alt-text](${data.screenshot})
##  Table of Contents
* [Languages & Technologies](#languagesandtechnologies)
* [Contributors](#contributors)
* [Testing](#testing)
## Languages & Technologies
-  ${data.usage}
## Contributors
-  ${data.contributors}
## Testing
-  ${data.test}  
`;
}

module.exports = generateMarkdown;
