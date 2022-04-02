const csv = require('csv-parser')
const fs = require('fs')
const results = {};
const dates = [];
const associateAmount = [];
const basicAmount = [];
const totalAmount = [];
const associateCount = [];
const basicCount = [];
const totalCount = [];

function addMonthToHighchartsArrays(data) {
  const year = parseInt(data.dateNumeric.substr(0,4));
  const month = parseInt(data.dateNumeric.substr(5,2));
  dates.push(new Date(year, month, 1));
  associateAmount.push(parseFloat(data.associateAmount.substr(1)));
  basicAmount.push(parseFloat(data.basicAmount.substr(1)));
  totalAmount.push(parseFloat(data.totalAmount.substr(1)));
  associateCount.push(parseInt(data.associateCount));
  basicCount.push(parseInt(data.basicCount));
  totalCount.push(parseInt(data.totalCount));
}

fs.createReadStream('monthlyTotals.csv')
  .pipe(csv())
  .on('data', (data) => addMonthToHighchartsArrays(data))
  .on('end', () => {
    results.dates = dates;
    results.associateAmount = associateAmount;
    results.basicAmount = basicAmount;
    results.totalAmount = totalAmount;
    results.associateCount = associateCount;
    results.basicCount = basicCount;
    results.totalCount = totalCount;
    
    console.log(results);
    fs.writeFile('monthlyTotals.json', JSON.stringify(results, null, 2), err => {
      if (err) {
        console.error(err)
        return
      }
    })
    
  });
