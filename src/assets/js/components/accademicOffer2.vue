<template lang="html">
  <div>
    <h1> {{accademicOffer.name}} - {{showPeriod()}}</h1>

    <sui-card-group :itemsPerRow="1">
      <sui-card v-for="offer in offers">
        <sui-card-content>
          <sui-card-header>{{offer.subject.name}}</sui-card-header>
          <sui-card-description v-for="course in offer.courses">
            {{"Profesor: " + course.professor.name}} - {{createTimeline(course.timelines)}}
          </sui-card-description>
        </sui-card-content>
        <sui-card-content extra>
          <sui-container text-align="center">
            <sui-button-group>
              <sui-button basic positive>Ya la curse</sui-button>
              <sui-button basic negative>No la voy a cursar</sui-button>
            </sui-button-group>
          </sui-container>
        </sui-card-content>
      </sui-card>
    </sui-card-group>
  </div>
</template>

<script>
export default {
  name: 'CardGroup1Example',
  data(){
      return{
          accademicOffer: {},
          offers: []
      }
  },

  created: function()
  {
      this.fetchAccademicOffer();
  },

  methods: {
      fetchAccademicOffer: function()
      {
          this.$http.get('http://localhost:3000/api/accademicOffer').then((response) => {
              this.accademicOffer = response.body;
              this.offers = this.accademicOffer.offers;
          }, (response) => {

          });
      },

      showPeriod: function()
      {
        var period = this.accademicOffer.period
          return "Año: " + period.year + " - Cuatrimestre: " + period.quarter;
      },

      createTimeline(timeline)
      {
        return timeline.reduce((a,b) => {return a + " " + b.day + " desde las "+ b.start + " hasta " + b.end + " | "}, "");
      }
  }
};
</script>
