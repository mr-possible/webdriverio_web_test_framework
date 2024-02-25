# WebDriverIO Test Automation Framework (Mocha + Typescript)

## Steps to run the suite (local machine):

1. Run `npm install`. This will make sure the `node_modules` folder and `package-lock.json` are generated, indicating successful download of dependencies for the project.

2. Run `Env=qa npm run test:local`. You can also give `Env` as either `dev` or `prod`. I have anyways kept same url for all the environments for demonstration purposes.

Small note: I am currently exploring to efficiently run this on CI/CD setup as I am facing issues with running test cases on docker container.


