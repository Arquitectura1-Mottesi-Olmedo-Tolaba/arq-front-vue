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
              <close-academic-offer :day="academicOffer.day" />
            </div>
            <sui-divider />
            <div>
              <academic-offer-percentage :studentInformation="academicOffer.studentInformationDTO" />
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
import CoursesTable from '@/components/directorView/coursesTable.vue'
import AcademicOfferPercentage from '@/components/directorView/academicOfferPercentage.vue'
import CloseAcademicOffer from '@/components/directorView/closeAcademicOffer.vue'
import SendEmail from '@/components/directorView/sendEmail.vue'
import DirectorService from '@/services/directorService';

export default {
  name: 'DashboardAcademicOffer',
  components:{
    'courses-table': CoursesTable,
    'academic-offer-percentage': AcademicOfferPercentage,
    'close-academic-offer': CloseAcademicOffer,
    'send-email': SendEmail,
  },
  props: ['degreeID'],
  data(){
    return{
      academicOffer: {
        studentInformationDTO: {},
        day: {},
        offers: [],
        name: ""
      }
    }
  },
  created(){
    this.fetchCurrentAcademicOffer(this.degreeID);
  },
  methods: {
    fetchCurrentAcademicOffer(degreeId){
      DirectorService.fetchCurrentAcademicOffer(degreeId).then(
        response => this.academicOffer = response.body
      , response => {}
      );
    }
  }
};
</script>
