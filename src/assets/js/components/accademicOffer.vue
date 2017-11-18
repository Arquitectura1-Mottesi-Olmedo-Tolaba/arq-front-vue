
<template lang="html">
  <div>
    <h1> {{degreeName()}} - {{showPeriod()}}</h1>
    <h2> {{student()}} </h2>

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

<script>
const offerCard = require('./offerCard.vue');
import AccademicOfferService from '../services/accademinOfferService';

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

  created: function()
  {
      this.fetchAccademicOffer();
  },

  methods: {
    fetchAccademicOffer(){
      new AccademicOfferService().fetchAccademicOffer().then( response => {
          this.accademicOffer = response.body;
      }, (response) => {

      });
    },
    offers(){
      return this.accademicOffer.offers
    },
    degreeName(){
      return this.accademicOffer.name || "";
    },
    showPeriod(){
        return "Año: " + this.accademicOffer.period.year || "" + " - Cuatrimestre: " + this.accademicOffer.period.quarter || "";
    },
    createTimeline(timeline){
      return timeline.reduce((a,b) => {return a + " " + b.day + " desde las "+ b.start + " hasta " + b.end + " | "}, "");
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
