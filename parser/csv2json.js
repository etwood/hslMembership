const csv = require('csv-parser')
const fs = require('fs')

const dates = [];
const dateStrings = [];
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
  const yearString = data.dateString.substr(0,4);
  const monthString = data.dateString.substr(5);
  dateStrings.push(monthString + ' ' + yearString);

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
    const results = {
      months: [],
      amounts: [],
      counts: []
    };

    results.months = dateStrings;

    results.amounts.push({name: 'Plus', data: otherAmount});
    results.amounts.push({name: 'Basic', data: basicAmount});
    results.amounts.push({name: 'Associate', data: associateAmount});

    results.counts.push({name: 'Plus', data: otherCount});
    results.counts.push({name: 'Basic', data: basicCount});
    results.counts.push({name: 'Associate', data: associateCount});
    
    fs.writeFile('hslMembership.json', JSON.stringify(results, null, 2), err => {
      if (err) {
        console.error(err)
        return
      }
    })
  });
