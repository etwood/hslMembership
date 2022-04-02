const csv = require('csv-parser')
const fs = require('fs')
const results = [];
const dates = [];
const associateAmount = [];
const basicAmount = [];
const otherAmount = [];
const associateCount = [];
const basicCount = [];
const otherCount = [];

function addMonthToHighchartsArrays(data) {
  const year = parseInt(data.dateNumeric.substr(0,4));
  const month = parseInt(data.dateNumeric.substr(5,2));
  dates.push(new Date(year, month, 1));

  const fAssociateAmount = parseFloat(data.associateAmount.substr(1));
  const fBasicAmount = parseFloat(data.basicAmount.substr(1));
  const fTotalAmount = parseFloat(data.totalAmount.substr(1));
  associateAmount.push(fAssociateAmount);
  basicAmount.push(fBasicAmount);
  otherAmount.push(fTotalAmount - fAssociateAmount - fBasicAmount);

  const iAssociateCount = parseInt(data.associateCount);
  const iBasicCount = parseInt(data.basicCount);
  const iTotalCount = parseInt(data.totalCount);
  associateCount.push(iAssociateCount);
  basicCount.push(iBasicCount);
  otherCount.push(iTotalCount - iAssociateCount - iBasicCount);
}

fs.createReadStream('monthlyTotals.csv')
  .pipe(csv())
  .on('data', (data) => addMonthToHighchartsArrays(data))
  .on('end', () => {
    results.push({name: 'dates', data: dates});
    results.push({name: 'associateAmount', data: associateAmount});
    results.push({name: 'basicAmount', data: basicAmount});
    results.push({name: 'otherAmount', data: otherAmount});
    results.push({name: 'associateCount', data: associateCount});
    results.push({name: 'basicCount', data: basicCount});
    results.push({name: 'otherCount', data: otherCount});
    
    console.log(results);
    fs.writeFile('monthlyTotals.json', JSON.stringify(results, null, 2), err => {
      if (err) {
        console.error(err)
        return
      }
    })
    
  });
