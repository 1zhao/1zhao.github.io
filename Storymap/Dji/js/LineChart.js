google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Stunting', 'Wasting'],

        ['1990',  28,   12.5],
        ['1996',  31.7, 14.9],
        ['2004',  26.5, 19.4],
        ['2006',  32.6,   26],
        ['2007',  32.6,   26],
        ['2013',  33.5, 21.5]
    ]);

    var options = {
        title: 'Malnutrition(Stunting,Wasting) in Djibouti, 1990-2013',
        titlePosition:'out',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}