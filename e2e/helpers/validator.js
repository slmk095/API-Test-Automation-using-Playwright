// Response validator function to validate array of response validations


const { expect } = require('@playwright/test');

const validate = (rules) => {
    rules.forEach(item => {
        let [label, expected, operation, received ] = item
        let desc = `verify ${label} Received: ${received} matches  expected: ${expected} `
        switch(operation) {
            case "equal":
                expect.soft(received, desc).toEqual(expected);
                break;
            case "contains":
                expect.soft(expected, desc).toContain(received);
                break;
            case "tobe":
                expect.soft(received, desc).toEqual(expect.any(expected));
                break;
            default:
                console.log(`operation ${operation} not found in ${item}`)
        }
    }); 
} 


module.exports  = {
    validate
}
