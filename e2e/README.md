
# E2E


## Folders
```
/e2e
- helpers           # contains helper functions
-- http.js          # common HTTP methods
-- utils.js         # common utility functions
-- validator.js     # validator method to validate validations
- payloads          # contains request payload templates
- tests             # tests 
- validations       # contains response validations
- variables.js      # contains common variables used across tests
```

## variables.js usage

```
let vars = require("../variables");

class ParkingAPI {
    fun() {
        const variables = vars.vars()
        const name = variables.name
    }
}

```
## References
Let play with  https://playwright.dev/docs/test-assertions

https://playwright.dev/docs/test-assertions#soft-assertions


### You can Try
- contains
- toBe
- toHaveText
- toContainText