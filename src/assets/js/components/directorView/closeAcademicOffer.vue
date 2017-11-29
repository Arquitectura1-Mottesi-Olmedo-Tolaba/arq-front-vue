<template>
  <div class="ui center">
    <sui-card style="width:100%">
      <sui-card-content>
        <sui-card-header>Fecha de cierre de la encuesta</sui-card-header>
        <p>{{day}}</p>
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script>

  export default {
    props:['day'],
    methods: {
    }
  };
</script>
