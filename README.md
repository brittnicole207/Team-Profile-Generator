## Team Profile Generator

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
  <br />

## Description

This node.js application will allow a manager to generate a webpage that displays the team employee information.

The full video demonstrating the functionality of the application can be found [here.](https://www.youtube.com/watch?v=YVCeuvgUEvg)

<br />

The screenshot of the generated HTML file can be found [here.](https://drive.google.com/file/d/1-WW9HEOZ719S8uzYW1wixlNR3evSgV5Y/view?usp=sharing)

<br />

## User Story

```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation

```
npm i inquirer@8.2.4
```

<br />

## Usage

At the root of the project, run the following command and answer the prompted questions:

`node index.js`

## Questions

Please contact the developer with any questions at brittanydevdesign@gmail.com.
<br />
