1. Playwright Overview
    a. Playwright tests are created in accordance to the testing e2e scenarios. 
    b. Playwright supports all the browser engines like chromium, firefix, webkit. It also supports cross browser testing. 
    c. Playwright supports cross parallel execution of tests simultaneously hence reducing the execution time for the suites.
    d. Playwright allows to perform API testing (GET,PUT,DELETE,POST requests and checking responses) within the same test flow as UI tests.

2. Set up playwright
    a. Clone repository "".
    b. Open the project in VS Code.
    c. Run command "npm install" to install all the node modules from package.json.

3. Execution
    a. Use command "npm run test" to run all the tests available under feature folder.
    b. Use command "npm run test <FEATURE_FILE_RELATIVE_PATH>" to run a specific feature file.
    c. Use command "npm run test:parallel" to run all the tests available under feature folder parallely.

4. Report Generation
    a. Report in html format will be available in the "./reports" location.
   

