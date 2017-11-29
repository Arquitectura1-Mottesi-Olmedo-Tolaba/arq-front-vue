<template>
  <div>
  <h1>{{academicOffer.name}} </h1>
  <sui-grid>
      <sui-grid-row>
        <sui-grid-column :width="10">
          <courses-table :offers="academicOffer.offers"> </courses-table>
        </sui-grid-column>
        <sui-grid-column :width="6">
          <div class="ui center aligned basic segment">
            <div>
              <academic-offer-percentage :studentInformation="academicOffer.studentInformation"></academic-offer-percentage>
            </div>
            <sui-divider />
            <div>
              <close-academic-offer :day="academicOffer.day"></close-academic-offer>
            </div>
            <sui-divider />
            <div>
              <send-email />
            </div>
          </div>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </div>
</template>


<script>
const CoursesTable = require('./coursesTable.vue');
const AcademicOfferPercentage = require('./academicOfferPercentage.vue');
const CloseAcademicOffer = require('./closeAcademicOffer.vue');
const SendEmail = require('./sendEmail.vue');

import DirectorService from '../../services/directorService';

export default {
  name: 'DashboardAcademicOffer',
  components:{
    'courses-table': CoursesTable,
    'academic-offer-percentage': AcademicOfferPercentage,
    'close-academic-offer': CloseAcademicOffer,
    'send-email': SendEmail,
  },
  data(){
    return{
      academicOffer: {
        studentInformation: {},
        day: {},
        offers: [],
        name: ""
      }
    }
  },
  created: function(){
      this.fetchCurrentAccademicOffer(this.$route.params.id);
    },
  methods: {
    fetchCurrentAccademicOffer(degreeId){
      DirectorService.fetchCurrentAccademicOffer(degreeId).then(
        response => this.academicOffer = response.body
      , response => {}
      );
    }
  }
};
</script>
