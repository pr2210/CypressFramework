# CypressFramework

Welcome to Cypress framework! Project includes a end to end automation test to purchase an order from an e-commerce web page. The same tests are automated in BDD cucumber followed by Gherkin language. Also, it includes some basic API tests and UI functionalities.

**1. Getting Started**

To get started with this project, follow these steps:

**Prerequisites**

Before you begin, ensure you have the following installed on your machine:

**Node.js & npm:** You can download and install Node.js from nodejs.org. npm comes bundled with Node.js.

**Installation:**

**a.** Clone the repository to your local machine:

_git clone https://github.com/pr2210/CypressFramework.git_

**b.** Navigate to the project directory:

_cd CypressFramework_

**c.** Install dependencies:

_npm install_


**2. Folder Structure**

**cucumberReports** - includes BDD cucumber reports in Json and html format

**e2e>Cucumber-tests** - test files in js format to run the tests. You may also add test file to this folder.

**e2e>Functional-tests** - contains feature file of cucumber in gherkin language.

**fixtures** - includes example.json file, used to store hardcoded values in json format, so that we can change this file as per requirement and not directly the test file.

**reports** - includes reports of tests in Json and html format

**support>pageObjects** - used to store locators from UI

**support>step_definitions** - contains js file of cucumber feature file.

**videos** - includes test videos after run


**3. How to run**

To run tests in headed mode, 

Launch the Cypress Test Runner>

_npx cypress run --spec "cypress\e2e\Functional-tests" --headed --browser chrome_

Headless Mode>

_npx cypress run --spec "cypress\e2e\Functional-tests"_

Viewing Test Results

After running tests, Cypress will generate reports containing detailed information about test execution. These reports are being stored in 'cypress/reports' directory or as specified Cypress configuration. Also cypress provides videos of tests and screenshots of failed tests.

To run the Cucumber BDD test>

_npx cypress run --spec "cypress\e2e\Cucumber-tests" --headed --browser chrome_

***Note***: To run feature file and generate Cucumber HTML report, modify cypress.config.js file-

**move** > _require('cypress-mochawesome-reporter/plugin')(on);_

**before**> _await addCucumberPreprocessorPlugin(on, config);_


**4. Contributing**

I welcome contributions to improve this project and make it better! To contribute, please follow these guidelines:

**Reporting Bugs**

If you encounter any bugs or issues with the project, please open a new issue on GitHub > 'https://github.com/pr2210/CypressFramework/issues'. Be sure to include detailed information about the problem, including steps to reproduce it and any relevant error messages or screenshots.

**Suggesting Enhancements**

If you have ideas for enhancements or new features, feel free to open a new issue on GitHub to discuss them > '_https://github.com/pr2210/CypressFramework/issues_'. I appreciate feedback and are open to suggestions that can improve the project.

**Code Contribution Guidelines**

If you'd like to contribute code to the project, please follow these steps:

**a. Fork the Repository:** Fork the repository to your own GitHub account.

**b. Clone the Repository:** Clone the forked repository to your local machine.

_git clone https://github.com/pr2210/CypressFramework.git_

**c. Create a Branch:** Create a new branch for your changes.

_git checkout -b feature-name_

**d. Make Changes:** Make your changes to the codebase. Ensure that your changes adhere to the project's coding standards and guidelines.

**e. Commit Changes:** Commit your changes with clear and descriptive commit messages

_git commit -m "Add feature XYZ"_

**f. Push Changes:** Push your changes to your forked repository.

_git push origin feature-name_

**g. Submit a Pull Request:**

Finally, submit a pull request from your branch to the main repository. Be sure to provide a detailed description of your changes and why they are beneficial.
