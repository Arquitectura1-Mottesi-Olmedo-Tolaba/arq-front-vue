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
import StudentService from '../../services/studentService';

export default {
  name: 'AcademicOfferCodeForm',
  data(){
    return{
        student: {
          code: ''
        }
      }
    },
  methods: {
    submitStudentCode(){
      StudentService.existCode(this.student.code).then(this.successRedirect, this.error);
    },
    successRedirect(){
      this.$router.push('/academicOffer/' + this.student.code);
    },
    error(){
      console.log("error");
    }
  }
};
</script>
