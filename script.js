document.addEventListener('DOMContentLoaded', function () {
    Highcharts.getJSON(
        'hslMembership.json',
        function (result) {
            createCountsChart(result);
            createAmountsChart(result);
        }
    );

    function createCountsChart(result) {
        Highcharts.chart('counts', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'HeatSync Labs Membership'
            },
            xAxis: {
                categories: result.months
            },
            yAxis: {
                title: {
                    text: 'Members'
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },
            colors: ["#7cb5ec", "#90ed7d", "#f7a35c", "#8085e9", "#f15c80", "#e4d354", "#2b908f", "#f45b5b", "#91e8e1", "#434348"],
            series: result.counts
        });
    }

    function createAmountsChart(result) {
        const countsChart = Highcharts.chart('amounts', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'HeatSync Labs Member Recurring Donations'
            },
            xAxis: {
                categories: result.months
            },
            yAxis: {
                title: {
                    text: 'Donations'
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },        
            colors: ["#7cb5ec", "#90ed7d", "#f7a35c", "#8085e9", "#f15c80", "#e4d354", "#2b908f", "#f45b5b", "#91e8e1", "#434348"],
            series: result.amounts
        });
    }    
});