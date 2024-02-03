#  Helper function

## Utils

> function: delay(seconds)
<br> usage:  utils.delay(3) <br>
cursor wait for 3 seconds before moving to next step 

> function: randStr(length)
<br> usage:  utils.randStr(10) <br>
returns alphanumeric string of 10 length. Example 3B339HHJK3 

> function: aroundDate(date)
<br> usage:  utils.aroundDate('2023-10-21T10:23:12.889') <br>
returns date in string. Example 2023-10-21T10:23:12.000Z 

## HTTP

> function: get(url, params)
<br> usage:  HTTPCall.get(url, null) <br>
retrun response of the request 


## Validator

> function : validator.validate(rules)
<br> usage: validator.validate(getParking(body, response)) <br>
Validates and reports Test status
```
const getParking = (body, response) => {
    return [
        ["label", "Expected" , "Operation", "Actual"]
    ]
}
```
