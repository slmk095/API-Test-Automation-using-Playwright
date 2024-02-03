
# playwright test automation for begineers

## Version

node version 20

>  use nvm for better control 

```
nvm install 20
nvm use 20
npm init playwright@latest
```

## Expected output
```
mkdir e2e # create New Directory

cd e2e # Go go e2e directory and apply below command

```

## Some clean up
- clean up playwright.config.js
- delete tests-examples folder
- Under tests folder 
    - rename example.spec.js -> get-pets.test.js
    - clean un used content in get-pets.test.js and create a first test set as given in get-pet.spec.js


# To Run Tests
```
export BASE_URL=https://petstore.swagger.io
npx playwright test # to run all tests
npx playwright test tests/get-pet.test.js # to Run specific file
npx playwright test tests/get-pet.test.js --grep "@fast" # to run with annotations
npx playwright test tests/get-pet.test.js --grep "@fast|@slow" # to run multiple annotations with "or" condition
```

# References
Let play with  https://playwright.dev/docs/test-assertions

https://playwright.dev/docs/test-assertions#soft-assertions


# You can Try
- contains
- toBe
- toHaveText
- toContainText