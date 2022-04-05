const csv = require('csv-parser')
const fs = require('fs')

const dates = [];
const dateStrings = [];
const otherAmount = [];
const associateAmount = [];
const basicAmount = [];
const plusAmount = [];
const otherCount = [];
const associateCount = [];
const basicCount = [];
const plusCount = [];

function addMonthToHighchartsArrays(data) {
  const year = parseInt(data.dateNumeric.substr(0,4));
  const month = parseInt(data.dateNumeric.substr(5,2));
  dates.push(new Date(year, month, 1));
  const yearString = data.dateString.substr(0,4);
  const monthString = data.dateString.substr(5);
  dateStrings.push(monthString + ' ' + yearString);

  const fAssociateAmount = parseFloat(data.associateAmount.substr(1));
  const fBasicAmount = parseFloat(data.basicAmount.substr(1));
  const fPlusAmount = parseFloat(data.plusAmount.substr(1));
  const fTotalAmount = parseFloat(data.totalAmount.substr(1));
  associateAmount.push(fAssociateAmount);
  basicAmount.push(fBasicAmount);
  plusAmount.push(fPlusAmount);
  otherAmount.push(fTotalAmount - fAssociateAmount - fBasicAmount - fPlusAmount);

  const iAssociateCount = parseInt(data.associateCount);
  const iBasicCount = parseInt(data.basicCount);
  const iPlusCount = parseInt(data.plusCount);
  const iTotalCount = parseInt(data.totalCount);
  associateCount.push(iAssociateCount);
  basicCount.push(iBasicCount);
  plusCount.push(iPlusCount);
  otherCount.push(iTotalCount - iAssociateCount - iBasicCount - iPlusCount);
}

fs.createReadStream('MonthlyTotalsWithPlus.csv')
  .pipe(csv())
  .on('data', (data) => addMonthToHighchartsArrays(data))
  .on('end', () => {
    const results = {
      months: [],
      amounts: [],
      counts: []
    };

    results.months = dateStrings;

    results.amounts.push({name: 'Plus', data: plusAmount});
    results.amounts.push({name: 'Basic', data: basicAmount});
    results.amounts.push({name: 'Associate', data: associateAmount});
    results.amounts.push({name: 'Other', data: otherAmount});

    results.counts.push({name: 'Plus', data: plusCount});
    results.counts.push({name: 'Basic', data: basicCount});
    results.counts.push({name: 'Associate', data: associateCount});
    results.counts.push({name: 'Other', data: otherCount});
    
    fs.writeFile('hslMembership.json', JSON.stringify(results, null, 2), err => {
      if (err) {
        console.error(err)
        return
      }
    })
  });
