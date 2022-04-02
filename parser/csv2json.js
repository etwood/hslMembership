const csv = require('csv-parser')
const fs = require('fs')
const results = [];
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
  associateAmount.push(data.associateAmount);
  basicAmount.push(data.basicAmount);
  totalAmount.push(data.totalAmount);
  associateCount.push(data.associateCount);
  basicCount.push(data.basicCount);
  totalCount.push(data.totalCount);
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
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  });
