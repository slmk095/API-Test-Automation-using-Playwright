
const { expect,  } = require('@playwright/test');
const http = require('../helpers/http');

exports.PetsAPI = class PetsAPI {
    constructor(request) {
        this.request  = request
        this.HTTPCall = new http.HTTPCall(request)
    }

    getPetById = async (id) => {
      const url = `/v2/pet/${id}`
      const resp =  await this.HTTPCall.get(url)
      expect(resp.status()).toEqual(200)
      const respJson = await resp.json()
      return respJson
    };

    petCreate = async (body)  => {
      const url = '/v2/pet'
      const resp = await this.HTTPCall.post(url , null,  body)
      expect(resp.status()).toEqual(200)
      const respJson = await resp.json()
      return respJson
    }

    petDelete = async (id)  => {
      const url = `/v2/pet/${id}`
      const resp = await this.HTTPCall.delete(url)
      expect(resp.status()).toEqual(200)
      const respJson = await resp.json()
      return respJson
    }


  }