const fs = require("fs");
const csv = require("csv-parser");

let results = [];
let hi=async()=>{
    await fs.createReadStream("gps_data.csv")
            .pipe(csv())
            .on("data", (data) => results.push(data))
}
hi()
module.exports = results;  