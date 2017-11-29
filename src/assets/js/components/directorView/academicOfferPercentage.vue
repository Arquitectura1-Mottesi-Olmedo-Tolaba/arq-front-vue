<template>
  <div class="ui center">
    <sui-card style="width:100%">
      <sui-card-content>
        <vue-highcharts :options="options()" ref="pieChart"></vue-highcharts>
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script>
  const vueHighcharts = require('../vueHighcharts.vue');

  var chart =
  {
      chart: {
          type: 'pie',
          options3d: {
              enabled: true,
              alpha: 45
          }
      },
      title: {
          text: 'Contents of Highsoft\'s weekly fruit delivery'
      },
      subtitle: {
          text: '3D donut in Highcharts'
      },
      plotOptions: {
          pie: {
              innerSize: 100,
              depth: 45
          }
      },
      series: [{
          name: 'Delivered amount',
          data: [
              ['Bananas', 8],
              ['Kiwi', 3],
              ['Mixed nuts', 1],
              ['Oranges', 6],
              ['Apples', 8],
              ['Pears', 4],
              ['Clementines', 4],
              ['Reddish (bag)', 1],
              ['Grapes (bunch)', 1]
          ]
      }]
  }


  var chart2 = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Alumnos',
        align: 'center',
        verticalAlign: 'middle',
        y: 40
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%']
        }
    },
    series: [{
        type: 'pie',
        innerSize: '50%',
        data: [
            ['Completada',   10.38],
            ['Faltante',       56.33],
            {
                name: 'Proprietary or Undetectable',
                y: 0.2,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
};

  export default {
    props:['studentInformation'],
    components:{'vue-highcharts': vueHighcharts},
    methods: {
      options(){
        return chart
      }
    }
  };
</script>
