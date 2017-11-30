<template>
  <div class="ui center">
    <sui-progress state="success" :percent=" this.percentage() ? this.percentage() : 0 " progress
      label="Estado de la encuesta" />
  </div>
</template>

<script>

  export default {
    props:['studentInformation'],
    methods: {
      percentage(){
        return this.studentInformation.completed * 100 / this.studentInformation.total
      }
    }
  };
</script>
