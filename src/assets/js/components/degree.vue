<template>
  <div></div>
</template>

<script>
import DirectorService from '../services/directorService';

export default {
  name: 'EditDegree',
  data(){
    return{
      currentAccademicOffer: {}
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
