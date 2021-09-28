// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  return `![badge](https://img.shields.io/badge/license-${license}-green.svg)`;
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  switch (license) {
    case 'AGPLv3':
      return 'https://choosealicense.com/licenses/agpl-3.0/';
    case 'GPLv3':
      return 'https://choosealicense.com/licenses/gpl-3.0/';
    case 'LGPLv3':
      return 'https://choosealicense.com/licenses/lgpl-3.0/';
    case 'MPL':
      return 'https://choosealicense.com/licenses/mpl-2.0/';
    case 'Apache':
      return 'https://choosealicense.com/licenses/apache-2.0/';
    case 'MIT':
      return 'https://choosealicense.com/licenses/mit/';
    case 'Boost':
      return 'https://choosealicense.com/licenses/bsl-1.0/';
    case 'Unlicense':
      return 'https://choosealicense.com/licenses/unlicense/';
  }
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  return `
  Distributed under the [${license}](${renderLicenseLink(license)}) (click for more information) License.
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  <!-- TABLE OF CONTENTS -->
  <details open="open">
    <summary><h3 style="display: inline-block">Table of Contents</h3></summary>
    <ol>
      <li><a href="#description">Description</a></li>
      <li><a href="#installation">Installation</a></li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#contributing">Contributing</a></li>
      <li><a href="#tests">Tests</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#questions">Questions</a></li>
    </ol>
  </details>

  ## Installation
  _To get a local copy up and running follow these simple steps._

  _This is an example of software you need and how to install them:_
  <br/>

    ${data.installation}
  
  ## Usage
  _For more examples, please consider:_
  <br/>

    ${data.usage}

  ## Contributing
  _For Example:_

    Fork the Project

    Create your Feature Branch ("git checkout -b feature/AmazingFeature")

    Commit your Changes ("git commit -m 'Add some AmazingFeature'")

    Push to the Branch ("git push origin feature/AmazingFeature")

    Open a Pull Request
  
  _Information:_
  <br/>
  
    ${data.contribution}

  ## Tests
  _Instructions:_
  <br/>

    ${data.test}

  ## License
  ${renderLicenseSection(data.license)}

  ## Questions
  Github Username: [${data.github}](https://github.com/${data.github})

  Reach me at: ${data.email}
`;
}

module.exports = generateMarkdown;