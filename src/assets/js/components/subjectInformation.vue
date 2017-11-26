<template lang="html">
  <sui-grid divided="vertically">
    <sui-grid-row :columns="1">
      <sui-grid-column>
        <subject-highchart :info="subject.info" :refs="subject.id"/>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
const subjectHighchart = require('./subjectHighchart.vue');

export default {
  name: 'subjectInformation',
  components:{'subject-highchart': subjectHighchart},
  props:['subject'],
  methods: {
    createInfo(info){
      return info.name + " - " + (info.capacity ? "Alumnos: " + info.amount + "/" + info.capacity : info.amount)
    }
  }
};
</script>
