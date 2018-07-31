google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['% of Pop with Access', 'Urban', 'Rural', ],
        ['Water Source', 98, 64],
        ['Sanitation Facilities', 60, 5],
    ]);

    var options = {
        chart: {
            title: 'Access to Waster and Sanitation in Djihouti',

        },
        bars: 'horizontal', // Required for Material Bar Charts.
        hAxis: {format: 'decimal'},
        height: 280,
        colors: ['#1b9e77', '#d95f02']
    };

    var chart = new google.charts.Bar(document.getElementById('chart_div'));

    chart.draw(data, google.charts.Bar.convertOptions(options));

    var btns = document.getElementById('btn-group');

    btns.onclick = function (e) {

        if (e.target.tagName === 'BUTTON') {
            options.hAxis.format = e.target.id === 'none' ? '' : e.target.id;
            chart.draw(data, google.charts.Bar.convertOptions(options));
        }
    }
}