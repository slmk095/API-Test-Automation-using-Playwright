#  Request Payloads

## Payload example

```
const getPets = (name) => {
    return {
        "name" : "buffalo",
        ...
    }
}

module.exports =  {
    getPets
}

```

### usage

```
let body = payload.getPets();
...
...
const res = await pet.createPet(body);
validator.validate(validatePet.Pet(body, res));
...
...

```