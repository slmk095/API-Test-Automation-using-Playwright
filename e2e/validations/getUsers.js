
const { expect } = require('@playwright/test');

const CreateUser =  (body, response) => {
    return [
        ["userId", String(body.id),  "equal",  response.message ],
        ["userStatus", body.status,  "equal",  response.status ]
    ]
}
const GetUser =  (body, response) => {
    return [
        ["userId", body.id,  "equal",  response.id ],
        ["respStatus", body.status,  "equal",  response.status ],
        ["userStatus", body.userStatus,  "equal",  response.userStatus ],
        ["username", body.username,  "equal",  response.username ],
        ["firstName", body.firstName,  "equal",  response.firstName ],
        ["lastName", body.lastName,  "equal",  response.lastName ],
        ["email", body.email,  "equal",  response.email ],
        ["phone", body.phone,  "equal",  response.phone ]
    ]
}

const UserDelete =  (body, response) => {
    return [
        ["username", body.username,  "equal",  response.message ],
        ["DeleteCode", body.code,  "equal",  response.code ]
    ]
}

const UpdateUser =  (body, response) => {
    return [
      //  ["updateMessage", body.username,  "equal",  response.username ],
        ["updateCode", body.code,  "equal",  response.code ]
    ]
}


module.exports =  {
    CreateUser,
    GetUser,
    UserDelete,
    UpdateUser

}

