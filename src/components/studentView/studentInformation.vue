<template lang="html">

  <div class="ui card" style="width: 100%">
    <div class="content">
      <div class="header">{{information.student.name}}</div>
      <div class="meta">
        <span>{{information.subject}}</span>
        <span>{{showPeriod()}}</span>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'StudentInformation',
  props: ['information'],
  methods: {
    showPeriod(){
        return "Año: " + (this.information.period.year || "") + " - Cuatrimestre: " + (this.information.period.quarter || "");
    }
  }
};
</script>
