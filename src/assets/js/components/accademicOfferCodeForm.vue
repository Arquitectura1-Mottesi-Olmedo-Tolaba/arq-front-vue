<template>
  <sui-form>
    <h2>Codigo oferta academica</h2>
    <sui-form-field>
      <sui-input iconPosition="left" placeholder="Codigo" v-model="student.code" icon="terminal"/>
    </sui-form-field>
    <sui-button primary v-on:click.native="submitStudentCode" type="submit">Submit</sui-button>
  </sui-form>
</template>

<script>
export default {
  name: 'AccademicOfferCodeForm',
  data(){
    return{
        student: {
          code: ''
        }
      }
    },
  methods: {
    submitStudentCode(){
      this.$router.push('/accademicOffer/' + this.student.code);
    }
  }
};
</script>
