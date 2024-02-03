const moment = require('moment');
const utils = require('./helpers/utils');

const today = moment.utc(new Date()).milliseconds(0);
const ts = moment(today).unix();
const date_now = today.clone().seconds(0).milliseconds(0).toISOString().replace(".000Z", "Z");
const today_start_time = today.clone().startOf('day').toISOString().replace(".000Z", "Z");
const ts_plus_3_hours = today.clone().add(3 , 'hours').toISOString().replace(".000Z", "Z");
const ts_minus_3_days = today.clone().add(-3 , 'days').startOf('day').toISOString().replace(".000Z", "Z");
const ts_minus_1_days = today.clone().add(-1 , 'days').startOf('day').toISOString().replace(".000Z", "Z");
const ts_plus_2_days = today.clone().add(2 , 'days').startOf('day').toISOString().replace(".000Z", "Z");
const ts_plus_3_days = today.clone().add(3 , 'days').startOf('day').toISOString().replace(".000Z", "Z");
const ts_plus_4_days = today.clone().add(4 , 'days').startOf('day').toISOString().replace(".000Z", "Z");
const ts_plus_5_days = today.clone().add(5 , 'days').startOf('day').toISOString().replace(".000Z", "Z");
const ts_plus_7_days = today.clone().add(7 , 'days').startOf('day').toISOString().replace(".000Z", "Z");
const ts_plus_10_days = today.clone().add(10 , 'days').startOf('day').toISOString().replace(".000Z", "Z");


export const vars = () => {
    return {
        name: utils.randStr(5),
        current_timestamp: ts,
        date_now: date_now,
        today_start_time: today_start_time,
        minus_3_days: ts_minus_3_days,
        minus_1_days: ts_minus_1_days,
        plus_2_days: ts_plus_2_days,
        plus_3_days: ts_plus_3_days,
        plus_3_hours: ts_plus_3_hours,
        plus_4_days: ts_plus_4_days,
        plus_5_days: ts_plus_5_days,
        plus_7_days: ts_plus_7_days,
        plus_10_days: ts_plus_10_days,        
    }
}
