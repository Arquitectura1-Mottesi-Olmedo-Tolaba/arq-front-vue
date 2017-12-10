<template lang="html">
  <div>
    <sui-form>
      <sui-form-field>
        <label style="text-align: left;">Sugerencias</label>
        <textarea rows="6" v-model="currentMessage" @change="emitMessage(currentMessage)"></textarea>
      </sui-form-field>
    </sui-form>
  </div>
</template>

<script>
  export default {
    name: 'SuggestionsOffer',
    props:['message'],
    data(){
      return {currentMessage: ''}
    },
    created(){
      this.currentMessage = this.message
    },
    methods: {
      emitMessage(currentMessage){
        console.log(currentMessage)
        this.$emit('change', currentMessage)
      }
    },
  };
</script>
