<template lang="html">
  <sui-grid divided="vertically">
    <sui-grid-row :columns="2">
      <sui-grid-column v-for="info in subject.info">
        <p>{{createInfo(info)}}</p>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
export default {
  name: 'subjectInformation',
  props:['subject'],
  methods: {
    createInfo(info){
      return info.name + " - " + (info.capacity ? "Alumnos: " + info.amount + "/" + info.capacity : info.amount)
    }
  }
};
</script>
