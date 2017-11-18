<template>
  <sui-form>
    <h2>Log-in to your account</h2>
    <sui-form-field>
      <sui-input iconPosition="left" placeholder="E-mail" v-model="director.email" icon="user"/>
    </sui-form-field>
    <sui-form-field>
      <sui-input iconPosition="left" placeholder="Password" v-model="director.password" icon="lock"/>
    </sui-form-field>
    <sui-button primary v-on:click.native="login" type="submit">Login</sui-button>
  </sui-form>
</template>

<script>
  import LoginService from '../services/loginService';

  export default{
    data(){
        return{
            director: {
              email: '',
              password: ''
            }
        }
    },

    methods: {
      login: function(){
          new LoginService().login({
            email: this.director.email,
            password: this.director.password
          }).then((response) => {
              this.$router.push('/dashboard');
          }, (response) => {

          });
      }
    }
  }
</script>
