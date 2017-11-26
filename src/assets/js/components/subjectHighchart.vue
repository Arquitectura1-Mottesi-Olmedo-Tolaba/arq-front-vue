<template>
  <section class="charts" :id="refs">
    <vue-highcharts :options="chart()"></vue-highcharts>
  </section>
</template>
<script>
  const vueHighcharts = require('./vueHighcharts.vue');

  export default {
    props:['info', 'refs'],
    components:{'vue-highcharts': vueHighcharts},
    methods: {
      createSeries: function(){
        var firstColumn = this.info.map(inf => inf.amount);
        var secondColumn = this.info.map(inf => inf.capacity || null);
        return [{name: "Respuesta Alumnos", data: firstColumn},{name: "Capacidad Aula", data: secondColumn}];
      },
      createCategories: function(){
        return this.info.map(inf => inf.name);
      },
      chart: function(){
        return {
          chart: {
              type: 'column'
          },
          title: {
              text: 'Decisiones de alumnos'
          },
          yAxis: {
            title: {
              text: 'Cantidad de alumnos'
            }
          },
          xAxis: {
            categories: this.createCategories(),
            labels: {
                x: -10
            }
          },
          legend: {
              enabled: false
          },
          plotOptions: {
              series: {
                  dataLabels: {
                      enabled: true
                  }
              }
          },
          series: this.createSeries()
        };


      }
    }
  };
</script>
