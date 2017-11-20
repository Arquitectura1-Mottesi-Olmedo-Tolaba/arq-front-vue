<template lang="html">

  <div>
    <h1> {{degreeName()}} </h1>
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
import StudentService from '../services/studentService';

export default {
  name: 'AccademicOfferForm',
  components:{'offer-card': offerCard},
  data(){
    return{
      accademicOffer: {
        student: {},
        offers: [],
        period: {}
      }
    }
  },

  created: function(){
    this.fetchAccademicOffer(this.$route.params.id);
  },

  methods: {
    fetchAccademicOffer(accademicOfferCode){
      StudentService.fetchAccademicOffer(accademicOfferCode).then(
        response => this.accademicOffer = response.body
      , response => {}
      );
    },
    isNotApprovedSubjects(subject){
      return !this.accademicOffer.student.approvedSubjects
        .some(approvedSubject => approvedSubject.name === subject.name);
    },
    offers(){
      return this.accademicOffer.offers.filter(offer => this.isNotApprovedSubjects(offer.subject))
    },
    degreeName(){
      return this.accademicOffer.name || "";
    },
    showPeriod(){
        return "Año: " + (this.accademicOffer.period.year || "") + " - Cuatrimestre: " + (this.accademicOffer.period.quarter || "");
    },
    student(){
      return this.accademicOffer.student.name || ""
    },
    sendApplayOffer(){
      var applyOffers = this.accademicOffer.offers.map(offer => {
        return {
          subject: offer.subject,
          option: offer.selectedOption
        }
      });
      console.log(applyOffers);
    }
  }
};
</script>
