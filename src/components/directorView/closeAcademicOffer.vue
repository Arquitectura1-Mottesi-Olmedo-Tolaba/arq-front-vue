<template>
  <div class="container">
    <sui-statistic in-group>
      <sui-statistic-value>{{day}}</sui-statistic-value>
      <sui-statistic-label>Fecha de cierre de la encuesta</sui-statistic-label>
    </sui-statistic>
  </div>
</template>

<script>

  export default {
    props:['day'],
    methods: {}
  };
</script>
