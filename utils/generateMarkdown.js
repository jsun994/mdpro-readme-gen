// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  <!-- TABLE OF CONTENTS -->
  <details open="open">
    <summary><h3 style="display: inline-block">Table of Contents</h3></summary>
    <ol>
      <li><a href="#description">Description</a></li>
      <li><a href="#installation">Installation</a></li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#contribution">Contribution</a></li>
      <li><a href="#test">Test</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#github">Github</a></li>
      <li><a href="#email">Email</a></li>
    </ol>
  </details>

  ## Installation
  To get a local copy up and running follow these simple steps.

  This is an example of how to list things you need to use the software and how to install them:
  <br/>

    ${data.installation}
  
  ## Usage
  _For more examples, please consider:_
  <br/>

    ${data.usage}

  ## Contribution
  For Example:

    Fork the Project

    Create your Feature Branch ("git checkout -b feature/AmazingFeature")

    Commit your Changes ("git commit -m 'Add some AmazingFeature'")

    Push to the Branch ("git push origin feature/AmazingFeature")

    Open a Pull Request
  
  Additionally: ${data.contribution}

  ## Test
  ${data.test}

  ## License
  ${data.license}

  ## Github
  Project: ${data.github}

  ## Email
  Email me: ${data.email}
`;
}

module.exports = generateMarkdown;