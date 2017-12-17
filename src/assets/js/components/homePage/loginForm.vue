<template>
  <sui-form>
    <h2>Log-in director</h2>
    <sui-form-field v-if="showErrorMessage()">
      <error-message title="Error" :message="this.errorMessage" />
    </sui-form-field>
    <sui-form-field>
      <sui-input iconPosition="left" placeholder="E-mail" v-model="director.email" icon="user"/>
    </sui-form-field>
    <sui-form-field>
      <sui-input type="password" iconPosition="left" placeholder="Password" v-model="director.password" icon="lock"/>
    </sui-form-field>
    <sui-button primary v-on:click.native="login" type="submit">Login</sui-button>
  </sui-form>
</template>

<script>
  import LoginService from '../../services/loginService';
  const ErrorMessage = require('../errorMessage.vue');

  export default{
    name: 'LoginForm',
    data(){
      return{
        director: {
          email: '',
          password: ''
        },
        errorMessage: ''
      }
    },
    components:{
      'error-message': ErrorMessage
    },
    methods: {
      login(){
        this.errorMessage = ''
        new LoginService().login({
          email: this.director.email,
          password: this.director.password
        }, this.successCallback, this.errorCallback)
      },
      successCallback(response){
        this.$router.push('/dashboard')
      },
      errorCallback(error){
        this.errorMessage = error.body.message
      },
      showErrorMessage(){
        return this.errorMessage.length > 0
      }
    }
  }
</script>
