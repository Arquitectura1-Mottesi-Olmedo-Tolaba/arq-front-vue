<template lang="html">
  <sui-card>
    <sui-card-content>
      <sui-card-header>
        {{offer.subject.name}}
      </sui-card-header>
    </sui-card-content>
    <sui-card-content>
      <sui-card-description v-for="course in offer.courses">
        {{course.name}} - {{"Profesor: " + course.professor.name}} - {{createTimeline(course.timelines)}}
      </sui-card-description>
    </sui-card-content>
    <sui-card-content extra>
      <sui-container text-align="center">
        <sui-button-group>
          <sui-button
            v-for="option in offer.options"
            v-on:click.native="applyOption(option, offer)"
            v-bind:class="stateButton(option, offer)"
            primary>{{option.description}}</sui-button>
        </sui-button-group>
      </sui-container>
    </sui-card-content>
  </sui-card>
</template>

<script>
export default {
  name: 'offerCard',
  props:['offer'],

  methods: {
    createTimeline(timeline){
      return timeline.reduce((a,b) => {return a + " " + b.day + " desde las "+ b.start + " hasta " + b.end + " | "}, "");
    },
    stateButton(state, offer){
      return state.id === offer.selectedOption.id ? "active" : "basic"
    },
    applyOption(option, offer){
      offer.selectedOption = option
    },
    student(){
      return this.accademicOffer.student.name
    }
  }
};
</script>
