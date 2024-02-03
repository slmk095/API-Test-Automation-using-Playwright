// @ts-check
const { test, expect } = require('@playwright/test');
const validator = require('../helpers/validator')
const petValidation = require('../validations/getPets')
const petsPayload = require('../payloads/pets')
const { PetsAPI } = require('../api/pets');
const utils = require('../helpers/utils');

test.describe('pets' , async () => {

  const petId = utils.randNum(4)

  test('create-pet' , async({request}) => {
    const pets = new PetsAPI(request)
    const body = petsPayload.petsCreate(petId,"fish-tail")
    const resp = await pets.petCreate(body)
    validator.validate(petValidation.Pet(body, resp))
  });


  test('get-pet-by-id' , async({request}) => {
    const pets = new PetsAPI(request)
    const resp = await pets.getPetById(petId)
    const body = {
      "id" : petId,
      "status" : "available"
    }
    validator.validate(petValidation.Pet(body, resp))
  });

  test('delete-pet-by-id' , async({request}) => {
    const pets = new PetsAPI(request)
    const resp = await pets.petDelete(petId)
    const body = {
      "id" : petId.toString(),
      "code" : 200
    }
    validator.validate(petValidation.petDelete(body, resp))
  });

})