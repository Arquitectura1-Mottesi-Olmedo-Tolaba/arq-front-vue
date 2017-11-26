<template>
    <sui-accordion exclusive styled style="width: 100%">
      <template v-for="subject in currentAccademicOffer">
        <sui-accordion-title>
          <sui-icon name="dropdown" />
          {{subject.name}}
        </sui-accordion-title>
        <sui-accordion-content>
          <subject-information :subject="subject"> </subject-information>
        </sui-accordion-content>
      </template>
    </sui-accordion>
</template>


<script>
const subjectInformation = require('./subjectInformation.vue');

import DirectorService from '../services/directorService';

export default {
  name: 'DegreeInformation',
  components:{'subject-information': subjectInformation},
  data(){
    return{
      currentAccademicOffer: []
    }
  },
  created: function(){
      this.fetchCurrentAccademicOffer(this.$route.params.id);
    },
  methods: {
    fetchCurrentAccademicOffer(degreeId){
      DirectorService.fetchCurrentAccademicOffer(degreeId).then(
        response => this.currentAccademicOffer = response.body
      , response => {}
      );
    }
  }
};
</script>
