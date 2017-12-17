<template>
  <sui-form>
    <h2>Codigo oferta academica</h2>
    <sui-form-field v-if="showErrorMessage()">
      <error-message title="Error" :message="this.errorMessage" />
    </sui-form-field>
    <sui-form-field>
      <sui-input iconPosition="left" placeholder="Codigo" v-model="student.code" icon="terminal"/>
    </sui-form-field>
    <sui-button primary v-on:click.native="submitStudentCode" type="submit">Submit</sui-button>
  </sui-form>
</template>

<script>
import StudentService from '@/services/studentService.js'
import ErrorMessage from '@/components/errorMessage.vue'

export default {
  name: 'AcademicOfferCodeForm',
  components:{
    'error-message': ErrorMessage
  },
  data(){
    return{
        student: {
          code: ''
        },
        errorMessage: ''
      }
    },
  methods: {
    submitStudentCode(){
      StudentService.existCode(this.student.code, this.successCallback, this.errorCallback);
    },
    successCallback(){
      this.$router.push('/academicOffer/' + this.student.code);
    },
    errorCallback(error){
      this.errorMessage = error.body.message
    },
    showErrorMessage(){
      return this.errorMessage.length > 0
    }
  }
};
</script>
