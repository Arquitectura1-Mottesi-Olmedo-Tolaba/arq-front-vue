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
      <sui-container text-align="center" class="mx-3">
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
    eachTimeline(timeline){
      return timeline.day + " desde las "+ timeline.start + " hasta " + timeline.end
    },
    createTimeline(timeline){
      var timelineArray =  timeline.map(each => this.eachTimeline(each));
      return timelineArray.join(" | ")
    },
    stateButton(state, offer){
      return state.id === offer.selectedOption.id ? "active" : "basic"
    },
    applyOption(option, offer){
      offer.selectedOption = option
    }
  }
};
</script>
