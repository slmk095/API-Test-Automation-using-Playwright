// @ts-check
const { test, expect } = require('@playwright/test');
const validator = require('../helpers/validator')
const UserValidation = require('../validations/getUsers')
const usersPayload = require('../payloads/users')
const { UsersAPI  } = require('../api/users');
const utils = require('../helpers/utils');

test.describe('users' , async () => {

  const userId = utils.randNum(4)
  const username = utils.randStr(5)
  const data = usersPayload.userCreate(userId, username)

  test('create-user' , async({request}) => {
    const users = new UsersAPI(request)
    const resp = await users.userCreate(data)
    validator.validate(UserValidation.CreateUser(data, resp))
  });


  test('get-user-by-username' , async({request}) => {
    const users = new UsersAPI(request)
    const resp = await users.getUserByName(username)

    validator.validate(UserValidation.GetUser(data, resp))
  });

  test('update-user' , async({request}) => {
    const users = new UsersAPI(request)

    const updatedData = {
      ...data,
      "firstName" : "API Test"
    }

    const resp = await users.UpdateUser(username, updatedData)

    const expected = {
      code: 200
    }
  
    validator.validate(UserValidation.UpdateUser(expected, resp))

  });

  test('delete-user-by-name' , async({request}) => {
    const users = new UsersAPI(request)
    const resp = await users.UserDelete(username)
    const expected = {
      "username": username,
      "code" : 200
    }
    validator.validate(UserValidation.UserDelete(expected, resp))
  });


})

  



