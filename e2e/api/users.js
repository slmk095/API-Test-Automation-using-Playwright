
const { expect,  } = require('@playwright/test');
const http = require('../helpers/http');

exports.UsersAPI = class UsersAPI {
    constructor(request) {
        this.request  = request
        this.HTTPCall = new http.HTTPCall(request)
    }

    getUserByName = async (username) => {
      const url = `/v2/user/${username}`
      const resp =  await this.HTTPCall.get(url)
      expect(resp.status()).toEqual(200)
      const respJson = await resp.json()
      return respJson
    };

    userCreate = async (body)  => {
      const url = '/v2/user'
      const resp = await this.HTTPCall.post(url , null,  body)
      expect(resp.status()).toEqual(200)
      const respJson = await resp.json()
      return respJson
    }
  

    UserDelete = async (username)  => {
      const url = `/v2/user/${username}`
      const resp = await this.HTTPCall.delete(url)
      expect(resp.status()).toEqual(200)
      const respJson = await resp.json()
      return respJson
    }

    UpdateUser = async (username , body)  => {
      const url = `/v2/user/${username}`
      const resp = await this.HTTPCall.put(url, null , body)
    
      expect(resp.status()).toEqual(200)
      const respJson = await resp.json()
      return respJson
    }

}