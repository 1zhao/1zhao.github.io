google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Stunting(height-for-age)', 'Weight-for-height'],
        ['1989',  28,   12.5],
        ['1996',  31.7, 14.9],
        ['2002',  26.5, 19.4],
        ['2006',  32.6,   26],
        ['2012',  33.5, 21.5],
        ['2013',  30,   17.8]
    ]);

    var options = {
        title: 'Stunting and wasting in Djibouti, 1989-2012',
        titlePosition:'out',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}
