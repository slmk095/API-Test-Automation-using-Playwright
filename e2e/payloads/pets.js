const vars = require('../variables')

const petsCreate = (id, name) => {
  const variables = vars.vars()
  return {
    "id": id,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": name,
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  };
};

module.exports = {
    petsCreate,
};
