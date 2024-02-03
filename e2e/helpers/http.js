const { expect, request } = require('@playwright/test');

exports.HTTPCall = class HTTPCall {
    constructor(request) {
        this.request  = request
    }
    get = async (url, params) => {
        const res = await this.request.get(url , {
            params: params 
        });
        return res;
    };

    post = async (url,params, body) => {
        const data = {
            params: params,
            data: body
        }
        const res = await this.request.post(url , data);
        return res
    };

    delete = async (url) => {
        const res = await this.request.delete(url , { });
        return res
    }

    put = async (url, params, data) => {
        const headers =  {
            'Content-Type' : "application/json"
        }
        const res = await this.request.put(url , { headers, params, data: JSON.stringify(data) });
        return res
    }

    patch = async (url, body) => {
        const headers =  {
            'Content-Type' : "application/merge-patch+json"
        }
        const res = await this.request.patch(url , { headers: headers , data: JSON.stringify(body) });
        return res
    }
}
