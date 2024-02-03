const moment = require('moment');
const { expect } = require('@playwright/test');

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const aroundDate = newdate => moment(newdate).clone().toISOString().replace(".000Z", "Z");

const randStr = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const randNum = (length) => {
    var result           = '';
    var characters       = '123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return Number(result);
}


module.exports = {
    delay,
    randStr,
    aroundDate,
    randNum
}