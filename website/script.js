document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'HeatSync Labs Membership'
        },
        xAxis: {
            categories: ['Basic', 'Associate', 'Plus']
        },
        yAxis: {
            title: {
                text: 'Members'
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },        
        series: [
            {
              "name": "dates",
              "data": [
                "2014-04-01T07:00:00.000Z",
                "2014-05-01T07:00:00.000Z",
                "2014-06-01T07:00:00.000Z",
                "2014-07-01T07:00:00.000Z",
                "2014-08-01T07:00:00.000Z",
                "2014-09-01T07:00:00.000Z",
                "2014-10-01T07:00:00.000Z",
                "2014-11-01T07:00:00.000Z",
                "2014-12-01T07:00:00.000Z",
                "2015-01-01T07:00:00.000Z",
                "2015-02-01T07:00:00.000Z",
                "2015-03-01T07:00:00.000Z",
                "2015-04-01T07:00:00.000Z",
                "2015-05-01T07:00:00.000Z",
                "2015-06-01T07:00:00.000Z",
                "2015-07-01T07:00:00.000Z",
                "2015-08-01T07:00:00.000Z",
                "2015-09-01T07:00:00.000Z",
                "2015-10-01T07:00:00.000Z",
                "2015-11-01T07:00:00.000Z",
                "2015-12-01T07:00:00.000Z",
                "2016-01-01T07:00:00.000Z",
                "2016-02-01T07:00:00.000Z",
                "2016-03-01T07:00:00.000Z",
                "2016-04-01T07:00:00.000Z",
                "2016-05-01T07:00:00.000Z",
                "2016-06-01T07:00:00.000Z",
                "2016-07-01T07:00:00.000Z",
                "2016-08-01T07:00:00.000Z",
                "2016-09-01T07:00:00.000Z",
                "2016-10-01T07:00:00.000Z",
                "2016-11-01T07:00:00.000Z",
                "2016-12-01T07:00:00.000Z",
                "2017-01-01T07:00:00.000Z",
                "2017-02-01T07:00:00.000Z",
                "2017-03-01T07:00:00.000Z",
                "2017-04-01T07:00:00.000Z",
                "2017-05-01T07:00:00.000Z",
                "2017-06-01T07:00:00.000Z",
                "2017-07-01T07:00:00.000Z",
                "2017-08-01T07:00:00.000Z",
                "2017-09-01T07:00:00.000Z",
                "2017-10-01T07:00:00.000Z",
                "2017-11-01T07:00:00.000Z",
                "2017-12-01T07:00:00.000Z",
                "2018-01-01T07:00:00.000Z",
                "2018-02-01T07:00:00.000Z",
                "2018-03-01T07:00:00.000Z",
                "2018-04-01T07:00:00.000Z",
                "2018-05-01T07:00:00.000Z",
                "2018-06-01T07:00:00.000Z",
                "2018-07-01T07:00:00.000Z",
                "2018-08-01T07:00:00.000Z",
                "2018-09-01T07:00:00.000Z",
                "2018-10-01T07:00:00.000Z",
                "2018-11-01T07:00:00.000Z",
                "2018-12-01T07:00:00.000Z",
                "2019-01-01T07:00:00.000Z",
                "2019-02-01T07:00:00.000Z",
                "2019-03-01T07:00:00.000Z",
                "2019-04-01T07:00:00.000Z",
                "2019-05-01T07:00:00.000Z",
                "2019-06-01T07:00:00.000Z",
                "2019-07-01T07:00:00.000Z",
                "2019-08-01T07:00:00.000Z",
                "2019-09-01T07:00:00.000Z",
                "2019-10-01T07:00:00.000Z",
                "2019-11-01T07:00:00.000Z",
                "2019-12-01T07:00:00.000Z",
                "2020-01-01T07:00:00.000Z",
                "2020-02-01T07:00:00.000Z",
                "2020-03-01T07:00:00.000Z",
                "2020-04-01T07:00:00.000Z",
                "2020-05-01T07:00:00.000Z",
                "2020-06-01T07:00:00.000Z",
                "2020-07-01T07:00:00.000Z",
                "2020-08-01T07:00:00.000Z",
                "2020-09-01T07:00:00.000Z",
                "2020-10-01T07:00:00.000Z",
                "2020-11-01T07:00:00.000Z",
                "2020-12-01T07:00:00.000Z",
                "2021-01-01T07:00:00.000Z",
                "2021-02-01T07:00:00.000Z",
                "2021-03-01T07:00:00.000Z",
                "2021-04-01T07:00:00.000Z",
                "2021-05-01T07:00:00.000Z",
                "2021-06-01T07:00:00.000Z",
                "2021-07-01T07:00:00.000Z",
                "2021-08-01T07:00:00.000Z",
                "2021-09-01T07:00:00.000Z",
                "2021-10-01T07:00:00.000Z",
                "2021-11-01T07:00:00.000Z",
                "2021-12-01T07:00:00.000Z",
                "2022-01-01T07:00:00.000Z",
                "2022-02-01T07:00:00.000Z",
                "2022-03-01T07:00:00.000Z",
                "2022-04-01T07:00:00.000Z"
              ]
            },
            {
              "name": "associateAmount",
              "data": [
                675,
                850,
                775,
                775,
                700,
                625,
                625,
                600,
                575,
                525,
                525,
                500,
                425,
                400,
                375,
                325,
                350,
                350,
                350,
                350,
                375,
                425,
                425,
                375,
                400,
                425,
                400,
                350,
                350,
                325,
                325,
                325,
                300,
                300,
                300,
                300,
                300,
                300,
                300,
                325,
                325,
                325,
                375,
                400,
                475,
                550,
                625,
                550,
                450,
                550,
                650,
                700,
                700,
                775,
                800,
                900,
                900,
                1000,
                1025,
                975,
                1200,
                1225,
                1275,
                1450,
                1450,
                1300,
                1200,
                1100,
                1025,
                1025,
                1075,
                1025,
                1050,
                950,
                950,
                925,
                900,
                800,
                800,
                800,
                800,
                750,
                725,
                725,
                700,
                725,
                725,
                725,
                725,
                675,
                725,
                700,
                750,
                775,
                775,
                750,
                0
              ]
            },
            {
              "name": "basicAmount",
              "data": [
                1425,
                2000,
                2250,
                2050,
                1850,
                1750,
                1900,
                1850,
                1625,
                1475,
                1375,
                1275,
                1325,
                1375,
                1575,
                1425,
                1425,
                1275,
                1100,
                1100,
                1200,
                1100,
                1350,
                1500,
                1450,
                1350,
                1400,
                1550,
                1650,
                1650,
                1500,
                1550,
                1750,
                1750,
                1900,
                1850,
                1850,
                2000,
                1900,
                1950,
                1900,
                1950,
                1900,
                1900,
                2150,
                2000,
                2000,
                2100,
                1850,
                2200,
                2450,
                2650,
                2750,
                2750,
                2850,
                2750,
                2850,
                2800,
                2800,
                2900,
                2800,
                3050,
                2850,
                2800,
                2650,
                2650,
                2700,
                2650,
                2600,
                2800,
                2750,
                2650,
                2650,
                2550,
                2550,
                2450,
                2450,
                2400,
                2450,
                2450,
                2350,
                2300,
                2300,
                2300,
                2300,
                2300,
                2400,
                2350,
                2300,
                2400,
                2450,
                2550,
                2600,
                2550,
                2550,
                2450,
                50
              ]
            },
            {
              "name": "otherAmount",
              "data": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              "name": "associateCount",
              "data": [
                27,
                34,
                31,
                31,
                28,
                25,
                25,
                24,
                23,
                21,
                21,
                20,
                17,
                16,
                15,
                13,
                14,
                14,
                14,
                14,
                15,
                17,
                17,
                15,
                16,
                17,
                16,
                14,
                14,
                13,
                13,
                13,
                12,
                12,
                12,
                12,
                12,
                12,
                12,
                13,
                13,
                13,
                15,
                16,
                19,
                22,
                25,
                22,
                18,
                22,
                26,
                28,
                28,
                31,
                32,
                36,
                36,
                40,
                41,
                39,
                48,
                49,
                51,
                58,
                58,
                52,
                48,
                44,
                41,
                41,
                43,
                41,
                42,
                38,
                38,
                37,
                36,
                32,
                32,
                32,
                32,
                30,
                29,
                29,
                28,
                29,
                29,
                29,
                29,
                27,
                29,
                28,
                30,
                31,
                31,
                30,
                0
              ]
            },
            {
              "name": "basicCount",
              "data": [
                25,
                35,
                41,
                35,
                32,
                30,
                34,
                33,
                30,
                27,
                25,
                23,
                24,
                25,
                28,
                25,
                26,
                23,
                21,
                21,
                23,
                21,
                26,
                29,
                28,
                26,
                27,
                30,
                32,
                32,
                29,
                29,
                32,
                32,
                35,
                34,
                34,
                38,
                36,
                37,
                36,
                37,
                36,
                36,
                41,
                39,
                38,
                40,
                35,
                42,
                46,
                51,
                52,
                52,
                54,
                53,
                54,
                53,
                53,
                55,
                53,
                57,
                54,
                53,
                50,
                50,
                51,
                51,
                50,
                54,
                53,
                51,
                51,
                49,
                49,
                48,
                48,
                47,
                48,
                48,
                46,
                45,
                45,
                45,
                45,
                45,
                47,
                46,
                45,
                47,
                48,
                50,
                51,
                50,
                50,
                48,
                1
              ]
            },
            {
              "name": "otherCount",
              "data": [
                1,
                2,
                2,
                2,
                2,
                2,
                2,
                3,
                1,
                1,
                1,
                1,
                1,
                2,
                1,
                1,
                1,
                1,
                2,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ]
            }
          ]
    });
});