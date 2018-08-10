
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawAxisTickColors);

function drawAxisTickColors() {
    var data = google.visualization.arrayToDataTable([
        ['Region', 'Wasting Rate(%)',{ role: 'style' }],
        ['Obock' ,25.7,'#e34a33'],
        ['Djibouti City',17.9,'#fc8d59'],
        ['Tadjourah',16.4,'#fc8d59'],
        ['Ali Sabieh',15.8,'#fdcc8a'],
        ['Arta'	,14.8,'#fdcc8a'],
        ['Dikhil' ,14.7,'#fdcc8a']



    ]);

    var options = {
        title: 'Wasting in Djibouti by Region',
        colors: ['#e34a33'],
        legend: { position: "none" },
        chartArea: {width: '80%'},
        hAxis: {
            title: 'Wasting Rate',
            minValue: 0,
            textStyle: {
                bold: true,
                fontSize: 10,
                color: '#4d4d4d'
            },
            titleTextStyle: {
                bold: true,
                fontSize: 12,
                color: '#4d4d4d'
            }
        },
        vAxis: {
            title: 'Region',
            textStyle: {
                fontSize: 10,
                bold: true,
                color: '#848484'
            },
            titleTextStyle: {
                fontSize: 12,
                bold: true,
                color: '#848484'
            }
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById('Serve_Was'));
    chart.draw(data, options);
}
