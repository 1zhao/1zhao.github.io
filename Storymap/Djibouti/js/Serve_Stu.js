
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawAxisTickColors);

function drawAxisTickColors() {
    var data = google.visualization.arrayToDataTable([
        ['Region', 'Stunting Rate(%)',{ role: 'style' }],
        ['Obock', 45.9, '#b30000'],
        ['Dikhil', 44.2,'#e34a33'],
        ['Tadjourah', 40.8,'#e34a33'],
        ['Arta',29.1,'#fc8d59'],
        ['Ali Sabieh',28.3,'#fc8d59'],
        ['Djibouti City',22.2,'#fdcc8a']
    ]);

    var options = {
        title: 'Stunting in Djibouti by Region',
        colors: ['#fdcc8a'],
        legend: { position: "none" },
        chartArea: {width: '80%'},
        hAxis: {
            title: 'Stunting Rate',
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
    var chart = new google.visualization.BarChart(document.getElementById('Serve_Stu'));
    chart.draw(data, options);
}




