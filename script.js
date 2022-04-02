document.addEventListener('DOMContentLoaded', function () {
    Highcharts.getJSON(
        'monthlyCounts.json',
        function (countsData) {
            const countsChart = Highcharts.chart('counts', {
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
                series: countsData
            });
        }
    );
    Highcharts.getJSON(
        'monthlyAmounts.json',
        function (amountsData) {
            const countsChart = Highcharts.chart('amounts', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'HeatSync Labs Membership Revenue'
                },
                xAxis: {
                    categories: ['Basic', 'Associate', 'Plus']
                },
                yAxis: {
                    title: {
                        text: 'Revenue'
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
                series: amountsData
            });
        }
    );
});