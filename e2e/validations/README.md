# Test case validations

```
const Pet =  (body, response) => {
    return [
        // check ../helpers.validator.js for operations
        ["label", Expected,  "Operation",  Actual ]
    ]
}
```

## Usage
```
...
...
...
const res = await pet.createPet(body);
validator.validate(validatePet.Pet(body, res));

´´´