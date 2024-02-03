
const { expect } = require('@playwright/test');

const Pet =  (body, response) => {
    return [
        ["petId", body.id,  "equal",  response.id ],
        ["petStatus", body.status,  "equal",  response.status ]
    ]
}

const petDelete =  (body, response) => {
    return [
        ["DeleteMessage", body.id,  "equal",  response.message ],
        ["DeleteCode", body.code,  "equal",  response.code ]
    ]
}

module.exports =  {
    Pet,
    petDelete,
}


