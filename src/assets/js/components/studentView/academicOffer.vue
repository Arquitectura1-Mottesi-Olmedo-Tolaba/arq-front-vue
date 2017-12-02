<template lang="html">

  <div class="container-fluid">
    <h1>{{degreeName()}}</h1>
    <p>{{showPeriod()}}</p>
    <h2>{{student()}}</h2>
    <sui-form>
      <sui-card-group :itemsPerRow="1">
        <template v-for="offer in offers()">
          <offer-card v-bind:offer="offer"></offer-card>
        </template>
      </sui-card-group>
      </br>
      <router-link to="/submitPage">
        <sui-button
          v-on:click.native="sendApplayOffer()"
          type="submit">Enviar
        </sui-button>
      </router-link>
    </sui-form>
  </div>

</template>

<style>
body{
  background: #F5F5F5;
  color: #333;
}

#page{
  background: #FFF;
  padding: 3rem;
}
</style>

<script>
const offerCard = require('./offerCard.vue');
import StudentService from '../../services/studentService';

export default {
  name: 'AcademicOfferForm',
  components:{'offer-card': offerCard},
  data(){
    return{
      academicOffer: {
        student: {},
        offers: [],
        period: {}
      }
    }
  },

  created: function(){
    this.fetchAcademicOffer(this.$route.params.id);
  },

  methods: {
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
      var res =
       this.academicOffer.offers.filter(offer => this.isNotApprovedSubjects(offer.subject))
      return this.academicOffer.offers;
    },
    degreeName(){
      return this.academicOffer.name || "";
    },
    showPeriod(){
        return "Año: " + (this.academicOffer.period.year || "") + " - Cuatrimestre: " + (this.academicOffer.period.quarter || "");
    },
    student(){
      return this.academicOffer.student.name || ""
    },
    sendApplayOffer(){
      var applyOffers = this.academicOffer.offers.map(offer => {
        return {
          subject: offer.subject,
          option: offer.selectedOption
        }
      });
      console.log("TODO: cambiar el siguiente console.log");
      console.log(applyOffers);
    }
  }
};
</script>
