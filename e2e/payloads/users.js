const vars = require('../variables')

const userCreate = (id, username) => {
  const variables = vars.vars()
  return {
    
        "id": id,
        "username": username,
        "firstName": "sandhya",
        "lastName": "rani",
        "email": "sandhya@123.com",
        "password": "passcode",
        "phone": "1111111",
        "userStatus": 1
      }

  };

    
  


module.exports = {
    userCreate,
};
