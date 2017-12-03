<template lang="html">

  <div>
    <student-information :information="this.information()" />
    <div class="ui segment">
      <list-offer :listData="offers()" :searchFunction="this.searchFunction" :amountInPage='2'/>
    </div>
    <div class="ui segment">
      <router-link to="/submitPage">
        <sui-button
          v-on:click.native="sendApplayOffer()"
          type="submit">Enviar
        </sui-button>
      </router-link>
    </div>
  </div>
</template>

<script>
const ListOffer = require('./listOffers.vue');
const StudentInformation = require('./studentInformation.vue');
import StudentService from '../../services/studentService';

export default {
  name: 'AcademicOfferForm',
  components:{
    'list-offer': ListOffer,
    'student-information':StudentInformation
  },
  data(){
    return{
      academicOffer: {
        student: {},
        offers: [],
        period: {}
      },
      subjectName: ''
    }
  },

  created: function(){
    this.fetchAcademicOffer(this.$route.params.id);
  },

  methods: {
    information(){
      return {
        subject: this.academicOffer.name,
        period: this.academicOffer.period,
        student: this.academicOffer.student
      }
    },
    fetchAcademicOffer(academicOfferCode){
      StudentService.fetchAcademicOffer(academicOfferCode).then(
        response => this.academicOffer = response.body
      , response => {}
      );
    },
    isNotApprovedSubjects(subject){
      return !this.academicOffer.student.approvedSubjects
        .some(approvedSubject => approvedSubject.name === subject.name);
    },
    offers(){
      return this.academicOffer.offers;
    },
    searchFunction(data, message){
      return data.subject.name.toLowerCase().includes(message)
    },
    sendApplayOffer(){
      var applyOffers = this.academicOffer.offers.map(offer => {
        return {
          subject: offer.subject,
          option: offer.selectedOption
        }
      });
      console.log("TODO: cambiar");
      console.log(applyOffers);
    }
  }
};
</script>
