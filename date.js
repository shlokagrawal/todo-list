// for day & date

let today = new Date();
let options = { weekday: "long", day: "numeric", month: "long", year: "numeric" }
let day = today.toLocaleDateString("en-UK", options);
module.exports.dayToday = day;